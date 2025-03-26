function Register() {
    return (
        <main className="mx-auto w-full md:w-[80%] px-4 flex items-center justify-center h-screen"  >
            <div className="w-full max-w-md bg-white my-[50px] p-6 rounded-lg shadow-lg">
            <a href="/" className="text-[#043175] hover:underline hover:text-blue-800 text-sm">&larr; Quay về trang chủ</a>

                <h2 className="text-2xl font-bold text-center text-[#043175]">Đăng ký</h2>
                <form className="">
                    <div>
                        <label className="block text-sm mb-1 font-bold text-[#043175]">Họ và Tên</label>
                        <input type="text" required className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    </div>
        
                    <div className="mt-3">
                        <label className="block text-sm mb-1 font-bold text-[#043175]">Số điện thoại</label>
                        <input type="tel" required className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    </div>
        
                    <div className="mt-3">
                        <label className="block text-sm mb-1 font-bold text-[#043175]">Email</label>
                        <input type="email" required className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    </div>
        
                    <div className="mt-3">
                        <label className="block text-sm mb-1 font-bold text-[#043175]">Mật khẩu</label>
                        <input type="password" required className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    </div>
        
                    <button className="w-full bg-[#043175] text-white py-2 rounded-lg mt-4 hover:bg-blue-800">Đăng ký</button>
        
                    <p className="text-center text-sm mt-3">
                        Đã có tài khoản? <a href="/login" className="text-[#043175] hover:underline">Đăng nhập</a>
                 
                    </p>
                </form>
            </div>
        </main>
    )
}

export default Register;