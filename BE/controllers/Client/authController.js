const UserModel = require('../../models/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendResetPassword = require("../../mail/resetPassword/sendmail");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

class AuthController {
    static async register(req, res) {
        try {
            console.log('Nhận từ Client:', req.body);

            const { fullName, email, password, phone } = req.body;

            const checkEmail = await UserModel.findOne({ where: { email } });
            if (checkEmail !== null) {
                return res.status(400).json({
                    success: false,
                    message: 'Email đã tồn tại!'
                });
            }

            const user = await UserModel.create({
                fullName,
                email,
                password,
                phone,
            });

            const userResponse = {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
            };

            return res.status(200).json({
                success: true,
                message: 'Đăng ký thành công!',
                data: userResponse
            });

        } catch (error) {
            console.error("Lỗi server:", error);
            return res.status(500).json({
                success: false,
                message: 'Lỗi server, vui lòng thử lại!'
            });
        }
    }
    //------------------[ LOGIN ]------------------
    static async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await UserModel.findOne({ where: { email } });
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "Email không chính xác!"
                });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    success: false,
                    message: "Email hoặc mật khẩu không chính xác!"
                });
            }

            const token = jwt.sign(
                { id: user.id, fullName: user.fullName, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "2h" }
            );

            return res.status(200).json({
                success: true,
                message: "Đăng nhập thành công!",
                token,
                user: { fullName: user.fullName, email: user.email, role: user.role }
            });

        } catch (error) {
            console.error("Lỗi server:", error);
            return res.status(500).json({
                success: false,
                message: "Đăng nhập thất bại!",
            });
        }
    }
    //-------------------[ RESET PASSWORD ]--------------------------
    static async resetPasswod(req, res) {
        const { email } = req.body;
        try {
            const user = await UserModel.findOne({
                where: { email }
            });
            if (!user) {
                res.status(404).json({
                    success: false,
                    message: "Email không tồn tại"
                });
                return;
            }
            const secret = process.env.JWT_SECRET + user.password;
            const token = jwt.sign({ email: user.email, id: user.id }, secret, {
                expiresIn: "5m",
            });
            const link = `http://localhost:4200/auth/resetPassword/${user.id}/${token}`;
            await sendResetPassword(email, link);
            res.status(200).json({
                success: true,
                message: "Kiểm tra mail để đặt lại mật khẩu"
            });
        } catch (error) {
            console.error("Lỗi xảy ra khi reset password:", error);
            res.status(500).json({
                success: false,
                message: "Lỗi khi tạo link reset"

            });
        }
    }

    static async updatePassword(req, res) {
        const { id, token } = req.params;
        const { password } = req.body;

        try {
            const user = await UserModel.findOne({ where: { id } });
            if (!user) {
                return res.status(404).json({ message: "Tài khoản không tồn tại." });
            }
            const secret = process.env.JWT_SECRET + user.password;
            jwt.verify(token, secret);
            const encryptedPassword = await bcrypt.hash(password, 10);
            await user.update({ password: encryptedPassword });

            return res.status(200).json({
                success: true,
                message: "Cập nhật mật khẩu thành công",
            });
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Liên kết đã hết hạn. Vui lòng gửi lại yêu cầu đặt lại mật khẩu." });
            }

            if (error.name === "JsonWebTokenError") {
                return res.status(401).json({ message: "Token không hợp lệ." });
            }

            return res.status(500).json({ message: "Lỗi máy chủ", error: error.message });
        }
    }


}

module.exports = AuthController;
