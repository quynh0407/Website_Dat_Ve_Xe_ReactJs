function reviewEdit(){
    return(
        <main className="p-10 bg-gray-100">
        <div className="container mx-auto mt-5">
            <div className="card p-4 shadow-lg mb-4">
            <h2 className="text-xl font-bold">Sửa trạng thái</h2>
            <form class="mt-2 space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">ID</label>
                    <input type="text" value="1" disabled class="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Tên</label>
                    <input type="text" value="Nguyễn Văn A" disabled class="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Chuyến đi</label>
                    <input type="text" value="201" disabled class="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Đánh giá</label>
                    <input type="text" value="5⭐" disabled class="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Bình luận</label>
                    <textarea disabled class="mt-1 p-2 border rounded-md w-full">Tuyệt vời!</textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Ngày đăng</label>
                    <input type="text" value="2023-10-26 10:00:00" disabled class="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Ngày cập nhật</label>
                    <input type="text" value="2023-10-26 10:00:00" disabled class="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Ảnh</label>
                    <input type="text" value='anh.jpg' disabled class="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label for="status" class="block text-sm font-medium text-gray-700">Trạng thái</label>
                    <select id="status" class="mt-1 p-2 border rounded-md w-full">
                        <option value="1" selected>Hiển thị</option>
                        <option value="0">Ẩn</option>
                    </select>
                </div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Cập nhật trạng thái
                </button>
            </form>
        </div>
    </div>
    </main>
    )
}
export default reviewEdit;