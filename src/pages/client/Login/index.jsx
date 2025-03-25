function Login() {
    return (
        <main className=" flex items-center justify-center" id="home">
        <div className="w-full max-w-md bg-white p-6 my-[50px] rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-[#043175]">Đăng
                nhập</h2>

            <form className="mt-5px">
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                </div>

                <div className="mt-3">
                    <label
                        className="block text-sm font-medium text-gray-700">Mật
                        khẩu</label>
                    <input type="password" required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                </div>

                <button
                    className="w-full bg-[#043175] text-white py-2 rounded-lg mt-4 hover:bg-blue-700">Đăng
                    nhập</button>

                <p className="text-center text-sm mt-3">
                    Chưa có tài khoản? <a href="register.html"
                        className="text-blue-600 hover:underline">Đăng ký</a>
                </p>
            </form>
        </div>
    </main> 
    )
}
export default Login;