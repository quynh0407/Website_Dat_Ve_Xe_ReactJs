import { useForm } from "react-hook-form";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
function Register() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onChange", 
    });
    const navigate = useNavigate();

    const handleRegister = async (props) => {
        if (isValid) { 
            navigate("/dang-ky/otp");
        } 
        if (!isValid) {
            toast.error("Vui lòng điền đầy đủ và chính xác thông tin.");
        }
    }

    return (
        <>
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
                        <span className="mx-4 text-gray-900">Đăng Ký Bằng</span>
                        <hr className="flex-grow border-t-2 border-gray-500" />
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
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
                        <button
                            type="submit"
                            className="w-full bg-[#043175] text-white py-2 rounded-lg hover:bg-[#031f4d] transition-colors"
                        >
                            Đăng ký
                        </button>
                    </form>

                    <p className="text-center text-sm mt-4">
                        Bạn đã biết BusGo?{" "}
                        <Link to="/dang-nhap" className="text-blue-600 hover:underline">
                            Đăng nhập
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
        </>
    )
}

export default Register;
