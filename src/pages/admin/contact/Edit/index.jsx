function ContactEdit() {
    return (
        <main class="p-10 bg-gray-100">
            <div class="container mx-auto mt-5">
                <div class="card p-4 shadow-lg mb-4">
                    <h2 class="text-xl font-bold">Sửa Liên Hệ</h2>
                    <form class="mt-2 space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">ID</label>
                            <input
                                type="text"
                                value="1"
                                disabled
                                class="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Tên</label>
                            <input
                                type="text"
                                value="Nguyễn Văn A"
                                class="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value="a@gmail.com"
                                class="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Số điện thoại</label>
                            <input
                                type="tel"
                                value="0901234567"
                                class="mt-1 p-2 border rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Nội dung</label>
                            <textarea class="mt-1 p-2 border rounded-md w-full">
                                Tôi muốn đặt câu hỏi về sản phẩm của bạn.
                            </textarea>
                        </div>
                        <div>
                            <label for="status" class="block text-sm font-medium text-gray-700">
                                Trạng thái
                            </label>
                            <select id="status" class="mt-1 p-2 border rounded-md w-full">
                                <option value="Đang chờ">Đang chờ</option>
                                <option value="Đã xử lý">Đã xử lý</option>
                                <option value="Đã phản hồi">Đã phản hồi</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Cập nhật liên hệ
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}
export default ContactEdit;