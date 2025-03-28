function UserCreate() {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-2">Thêm người dùng</h3>
                    <form className="p-4 border rounded-md shadow-lg">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Họ và Tên</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Nhập họ và tên"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border rounded"
                                placeholder="Nhập email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Nhập số điện thoại"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Mật khẩu</label>
                            <input
                                type="password"
                                className="w-full p-2 border rounded"
                                placeholder="Nhập mật khẩu"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Vai trò</label>
                            <select className="w-full p-2 border rounded" required>
                                <option value="admin">Quản trị viên</option>
                                <option value="customer">Khách hàng</option>
                            </select>
                        </div>
                        <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Thêm người dùng</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default UserCreate;