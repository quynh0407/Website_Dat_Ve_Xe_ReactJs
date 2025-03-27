function BusEdit(){
    return(
        <main className="p-10 bg-gray-100">
            <div className="container mx-auto mt-5">
                <div className="card p-4 shadow-lg mb-4">
                <h2 className="text-xl font-bold">Sửa xe Khách</h2>
            <form class="mt-2 space-y-4">
                <div>
                    <label for="plateNumber" class="block text-sm font-medium text-gray-700">Biển số</label>
                    <input type="text" class="mt-1 p-2 border rounded-md w-full" id="plateNumber" required value="51A-12345" />
                </div>
                <div>
                    <label for="vehicleType" class="block text-sm font-medium text-gray-700">Loại xe</label>
                    <select class="mt-1 p-2 border rounded-md w-full" id="vehicleType" required>
                        <option value="">Chọn loại xe</option>
                        <option value="1" selected>Giường nằm</option>
                        <option value="2">Ghế ngồi</option>
                    </select>
                </div>
                <div>
                    <label for="driver" class="block text-sm font-medium text-gray-700">Tài xế</label>
                    <input type="text" class="mt-1 p-2 border rounded-md w-full" id="driver" required value="Nguyễn Văn A" />
                </div>
                <div>
                    <label for="status" class="block text-sm font-medium text-gray-700">Trạng thái</label>
                    <select class="mt-1 p-2 border rounded-md w-full" id="status" required>
                        <option value="">Chọn trạng thái</option>
                        <option value="active" selected>Hoạt động</option>
                        <option value="maintenance">Bảo trì</option>
                        <option value="repairing">Đang sửa chữa</option>
                    </select>
                </div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cập nhật xe</button>
            </form>
        </div>
    </div>
    </main>
    )
}
export default BusEdit;