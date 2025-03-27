function HistoryBillEdit() {
    return (
        <main className="p-10 bg-gray-100">
            <div className="container mx-auto mt-5">
                <div className="card p-4 shadow-lg mb-4">
                    <h2 className="text-xl font-bold">Sửa Hóa Đơn</h2>
                    <form className="mt-2 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                ID
                            </label>
                            <input
                                type="text"
                                value="1"
                                disabled
                                className="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Tên
                            </label>
                            <input
                                type="text"
                                value="Võ Ngọc A"
                                className="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Chuyến đi
                            </label>
                            <input
                                type="text"
                                value="201"
                                className="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Chỗ ngồi
                            </label>
                            <input
                                type="text"
                                value="5"
                                className="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Thời gian đặt
                            </label>
                            <input
                                type="datetime"
                                value="2025-03-26 10:00:00"
                                className="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label
                                for="status"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Trạng thái
                            </label>
                            <select id="status" className="mt-1 p-2 border rounded-md w-full">
                                <option value="Chưa giải quyết">Chưa giải quyết</option>
                                <option value="Đã xác nhận">Đã xác nhận</option>
                                <option value="Đã hủy bỏ">Đã hủy bỏ</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Giá
                            </label>
                            <input
                                type="number"
                                value="150000"
                                className="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Cập nhật hóa đơn
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
export default HistoryBillEdit;
