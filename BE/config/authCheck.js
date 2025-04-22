const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const checkJWT = (req, res, next) => {
    let token = null;

    // Kiểm tra token trong Authorization header (Bearer token)
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];  // Lấy token từ header
    }
    
    // Kiểm tra token trong cookie nếu không có ở header
    if (!token && req.cookies && req.cookies.token) {
        token = req.cookies.token; // Lấy token từ cookie
    }

    // Nếu không có token, trả về lỗi 401 (Unauthorized)
    if (!token) {
        return res.status(401).json({ message: "Bạn chưa đăng nhập hoặc token không hợp lệ!" });
    }

    try {
        // Giải mã token để lấy thông tin người dùng
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
        console.log("Decoded token:", decoded);  
        next();
    } catch (error) {
        // Kiểm tra nếu token hết hạn
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token đã hết hạn, vui lòng đăng nhập lại!" });
        }
        // Nếu token không hợp lệ
        return res.status(401).json({ message: "Token không hợp lệ!" });
    }
};

const isAdmin = (req, res, next) => {
    console.log("User from token:", req.user);
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({ message: "Bạn không có quyền!" });
    }
    next();
};

module.exports = { checkJWT, isAdmin };
