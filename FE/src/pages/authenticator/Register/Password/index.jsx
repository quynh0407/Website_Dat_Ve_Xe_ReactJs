import { useForm } from "react-hook-form";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
function Password() {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        mode: "onChange",
    });
    const navigate = useNavigate();

    const handlePassword = async (props) => {
        if (isValid) {
            navigate("/dang-nhap");
            toast.success("Đăng ký thành công");
        }

    }

    return (
        <>
            <main className="flex items-center justify-center h-screen">
                <div className="w-full max-w-md bg-white p-9 my-[50px] rounded-xl shadow-xl mx-auto">

                    <div className="flex items-center justify-center my-9">
                        <hr className="flex-grow border-t-2 border-gray-400" />
                        <span className="mx-4 text-[#043175]">Đặt mật khẩu</span>
                        <hr className="flex-grow border-t-2 border-gray-500" />
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handlePassword)}>
                        <div>
                            <label className="block text-sm mb-2 font-bold text-[#043175]">
                                Mật khẩu mới
                            </label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                {...register("password", {
                                    required: "Vui lòng nhập mật khẩu mới",
                                    minLength: {
                                        value: 6,
                                        message: "Mật khẩu phải có ít nhất 6 ký tự",
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d).+$/,
                                        message: "Mật khẩu phải chứa ít nhất 1 chữ hoa và 1 số",
                                    },
                                })}

                            />
                            {errors.password && (
                                <small className="text-red-600">{errors.password.message}</small>
                            )}
                        </div>

                        <div className="mt-3">
                            <label className="block text-sm mb-2 font-bold text-[#043175]">
                                Đặt mật khẩu
                            </label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                {...register("confirmPassword", {
                                    validate: (value) =>
                                        value === watch("password") || "Mật khẩu nhập lại không khớp",
                                })}
                            />
                            {errors.confirmPassword && (
                                <small className="text-red-600">{errors.confirmPassword.message}</small>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#043175] text-white py-2 rounded-lg hover:bg-[#031f4d] transition-colors"
                        >
                            Đăng ký
                        </button>
                    </form>


                </div>

            </main>
        </>
    )
}

export default Password;
