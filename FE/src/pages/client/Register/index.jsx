import { useForm } from "react-hook-form";
function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <main className="mx-auto w-full md:w-[80%] px-4 flex items-center justify-center h-screen"  >
            <div className="w-full max-w-md bg-white my-[50px] p-6 rounded-lg shadow-lg">
            <a href="/" className="text-[#043175] hover:underline hover:text-blue-800 text-sm">&larr; Quay về trang chủ</a>
                <h2 className="text-2xl font-bold text-center text-[#043175]">Đăng ký</h2>
                <form className="p-3">
                    <div>
                        <label className="block text-sm mb-1 font-bold text-[#043175]">Họ và Tên</label>
                        <input type="text"  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            {...register("name", {
                                required: { value: true, message: "Họ và Tên không được để trống" }
                            })}
                        />
                        {errors.name && <small className="text-red-500">{errors.name.message}</small>}
                    </div>
        
                    <div className="mt-3">
                        <label className="block text-sm mb-1 font-bold text-[#043175]">Số điện thoại</label>
                        <input type="tel"  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            {...register("phone", {
                                required: "Số điện thoại không được để trống",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Số điện thoại không hợp lệ, chỉ được nhập 10 chữ số",
                                },
                            })}
                        />
                        {errors.phone && <small className="text-red-500">{errors.phone.message}</small>}
                    </div>
        
                    <div className="mt-3">
                        <label className="block text-sm mb-1 font-bold text-[#043175]">Email</label>
                        <input type="email"  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            {...register("email", {
                                required: "Email không được để trống",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email không hợp lệ",
                                },
                            })}
                        />
                        {errors.email && <small className="text-red-500">{errors.email.message}</small>}
                    </div>
        
                    <div className="mt-3">
                        <label className="block text-sm mb-1 font-bold text-[#043175]">Mật khẩu</label>
                        <input type="password"  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            {...register("password", {
                                required: "Mật khẩu không được để trống",
                                minLength: {
                                    value: 5,
                                    message: "Mật khẩu phải ít nhất 5 ký tự",
                                },
                            })}
                        />
                        {errors.password && <small className="text-red-500">{errors.password.message}</small>}
                    </div>

        
                    <button onClick={handleSubmit(onSubmit)} type="submit" className="w-full bg-[#043175] text-white py-2 rounded-lg mt-4 hover:bg-blue-800">Đăng ký</button>
        
                    <p className="text-center text-sm mt-3">
                        Đã có tài khoản? <a href="/login" className="text-[#043175] hover:underline">Đăng nhập</a>
                    </p>
                </form>
            </div>
        </main>
    )
}

export default Register;