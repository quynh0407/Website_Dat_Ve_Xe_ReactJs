import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import constants from "../../../Constants.jsx";
import { Link } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = constants.DOMAIN_API;
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleLogin = async (props) => {
     
    }
    return (
        <main className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white p-9 my-[50px] rounded-xl shadow-xl mx-auto">
                <div className="text-center mb-6">
                    <Link to="/">
                        <img src="/assets/images/logos/logo-light.png" className="w-[20] h-20" alt="logo" />
                    </Link>
                </div>

                <div className="flex gap-4 mb-6">
                    <button className="flex items-center justify-center w-full border border-gray-400 rounded-xl py-2 hover:bg-gray-100">
                        <img src="/assets/images/logos/google.png" alt="google" className="w-4 h-4 mr-2" />
                        <span>Đăng Nhập Google</span>
                    </button>
                </div>

                <div className="flex items-center justify-center my-9">
                    <hr className="flex-grow border-t-2 border-gray-400" />
                    <span className="mx-4 text-gray-900">Đăng Nhập Bằng</span>
                    <hr className="flex-grow border-t-2 border-gray-500" />
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label className="block text-sm font-bold text-[#043175] mb-1">Số điện thoại</label>
                        <input
                            type="tel"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            {...register("phone", {
                                required: "Vui lòng nhập số điện thoại",
                                pattern: {
                                    value: /^(0|\+84)[0-9]{9}$/,
                                    message: "Số điện thoại không hợp lệ",
                                },
                            })}
                        />
                        {errors.phone && <small className="text-red-600">{errors.phone.message}</small>}
                    </div>


                    <div>
                        <label className="block text-sm font-bold text-[#043175] mb-1">Mật khẩu</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            {...register("password", {
                                required: "Vui lòng nhập mật khẩu",
                            })}
                        />
                        {errors.password && <small className="text-red-600">{errors.password.message}</small>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#043175] text-white py-2 rounded-lg hover:bg-[#031f4d] transition-colors"
                    >
                        Đăng nhập
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    Bạn mới biết BusGo?{" "}
                    <Link to="/dang-ky" className="text-blue-600 hover:underline">
                        Tạo một tài khoản
                    </Link>
                </p>
                <p className="text-center text-sm mt-1">
                    Bạn không nhớ mật khẩu?{" "}
                    <Link to="/resetForm" className="text-blue-600 hover:underline">
                        Quên mật khẩu
                    </Link>
                </p>
            </div>

        </main>
    );
}

export default Login;
