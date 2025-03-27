function BusCreate() {
    return (
        <main className="p-10 bg-gray-100">
            <div className="container mx-auto mt-5">
                <div className="card p-4 shadow-lg mb-4">
                <h2 className="text-xl font-bold">Thêm xe Khách</h2>
                    <form className="space-y-4 mt-2">
                        <div>
                            <label for="plateNumber" className="block text-sm font-medium text-gray-700">Biển số</label>
                            <input type="text" className="mt-1 p-2 border rounded-md w-full" id="plateNumber" required />
                        </div>
                        <div>
                            <label for="vehicleType" className="block text-sm font-medium text-gray-700">Loại xe</label>
                            <select className="mt-1 p-2 border rounded-md w-full" id="vehicleType" required>
                                <option value="">Chọn loại xe</option>
                                <option value="1">Giường nằm</option>
                                <option value="2">Ghế ngồi</option>
                            </select>
                        </div>
                        <div>
                            <label for="driver" className="block text-sm font-medium text-gray-700">Tài xế</label>
                            <input type="text" className="mt-1 p-2 border rounded-md w-full" id="driver" required />
                        </div>
                        <div>
                            <label for="status" className="block text-sm font-medium text-gray-700">Trạng thái</label>
                            <select className="mt-1 p-2 border rounded-md w-full" id="status" required>
                                <option value="">Chọn trạng thái</option>
                                <option value="active">Hoạt động</option>
                                <option value="maintenance">Bảo trì</option>
                                <option value="repairing">Đang sửa chữa</option>
                            </select>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Thêm xe</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
export default BusCreate;