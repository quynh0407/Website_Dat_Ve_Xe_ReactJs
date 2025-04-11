import { useForm } from "react-hook-form";
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <main className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white p-6 my-[50px] rounded-lg shadow-lg">
                <a href="/" className="text-[#043175] hover:underline hover:text-blue-800 text-sm">&larr; Quay về trang chủ</a>

                <h2 className="text-2xl font-bold text-center text-[#043175] mt-2">
                    Đăng nhập
                </h2>

                <form className="mt-2 p-3">
                    <div>
                        <label className="block text-sm mb-2 font-bold text-[#043175]">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            {...register("email", {
                                required: "Vui lòng nhập email",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email không hợp lệ",
                                },
                            })}
                        />
                        {errors.email && <small className="text-red-600">{errors.email.message}</small>}
                    </div>
                    <div className="mt-3">
                        <label className="block text-sm mb-2 font-bold text-[#043175]">Mật khẩu</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            {...register("password", {
                                required: "Vui lòng nhập mật khẩu",
                            })}
                        />
                        {errors.password && <small className="text-red-600">{errors.password.message}</small>}
                    </div>

                    <button onClick={handleSubmit(onSubmit)} type="submit" className="w-full bg-[#043175] text-white py-2 rounded-lg mt-4 hover:bg-blue-700">Đăng nhập</button>

                    <p className="text-center text-sm mt-3">
                        Chưa có tài khoản? <a href="/register" className="text-blue-600 hover:underline">Đăng ký</a>
                    </p>
                </form>
            </div>
        </main>
    );
}

export default Login;
