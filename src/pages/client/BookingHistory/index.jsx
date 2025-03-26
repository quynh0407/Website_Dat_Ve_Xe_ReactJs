function BookingHistory() {
    return (
        <>
            <main className="history mb-4 " id="home">
                <div className="flex w-[80%]  mx-auto">
                    <div className="w-[20%] bg-gray-100 p-5 rounded-md border border-gray-200">
                        <ul className="space-y-4">
                            <li className="border border-gray-200 rounded-md"><a href="/profile"
                                className="block hover:bg-gray-300 p-2 rounded-md"><i className="fas fa-user mr-2"></i> Thông tin cá
                                nhân</a></li>
                            <li className="border border-gray-200 rounded-md"><a href="/bookingHistory"
                                className="block hover:bg-gray-300 p-2 rounded-md"><i className="fas fa-history mr-2"></i> Lịch sử đặt
                                vé</a></li>
                            <li className="border border-gray-200 rounded-md"><a href="/logout"
                                className="block hover:bg-gray-300 p-2 rounded-md"><i className="fas fa-sign-out-alt mr-2"></i> Đăng
                                xuất</a></li>
                        </ul>
                    </div>
                    <div className="w-[80%] bg-white p-5 rounded-md ml-4">
                        <h1 className="text-3xl font-bold">Lịch sử đặt vé</h1>
                        <p className="text-gray-600">Theo dõi và quản lý quá trình lịch sử mua vé của bạn.</p>
                        <div
                            className="mt-6 p-4 bg-white border border-gray-200 rounded-md shadow-sm w-full relative overflow-hidden"
                            style={{
                                background: `linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0.849), rgba(255, 255, 255, 0.342)), 
                                 url('../../public/assets/images/main/bg-history-item.jpg')`,
                                backgroundPosition: "right center",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="mb-4 flex justify-between ">
                                <div className="flex justify-between">
                                    <p className="font-bold">Mã vé:</p>
                                    <p>123456789</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-bold mr-2">Trạng thái:</p>
                                    <p className="text-yellow-700 bg-yellow-200 p-1 rounded-md">Chưa khởi hành</p>
                                </div>
                            </div>
                            <div className="space-y-2 ">
                                <div className="flex justify-between">
                                    <p className="font-medium">Tuyến đường:</p>
                                    <p>Hà Nội - Sài Gòn</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-medium">Ngày giờ xuất phát:</p>
                                    <p>20/12/2023 08:00 AM</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-medium">Số ghế:</p>
                                    <p>A12</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-bold">Tổng giá vé:</p>
                                    <p className="font-bold">500,000 VND</p>
                                </div>
                            </div>
                            <hr className="mt-2 text-gray-400" />
                            <div className="flex justify-end mt-4">
                                <button className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    onclick="openCancelModal()">Hủy vé</button>
                            </div>
                        </div>



                        <div
                            className="mt-6 p-4 bg-white border border-gray-200 rounded-md shadow-sm w-full relative overflow-hidden"
                            style={{
                                background: `linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0.849), rgba(255, 255, 255, 0.342)), 
                                url('../../public/assets/images/main/bg-history-item.jpg')`,
                                backgroundPosition: "right center",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="mb-4 flex justify-between ">
                                <div className="flex justify-between">
                                    <p className="font-bold mr-1">Mã vé:</p>
                                    <p> 987654321</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-bold mr-2">Trạng thái:</p>
                                    <p className="text-green-700 bg-green-200 p-1 rounded-md">Đã tới tuyến</p>
                                </div>
                            </div>
                            <div className="space-y-2 ">
                                <div className="flex justify-between">
                                    <p className="font-medium">Tuyến đường:</p>
                                    <p>Đà Nẵng - Huế</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-medium">Ngày giờ xuất phát:</p>
                                    <p>15/11/2023 02:00 PM</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-medium">Số ghế:</p>
                                    <p>B5</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-bold">Tổng giá vé:</p>
                                    <p className="font-bold">300,000 VND</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="mt-6 p-4 bg-white border border-gray-200 rounded-md shadow-sm w-full relative overflow-hidden"
                            style={{
                                background: `linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0.849), rgba(255, 255, 255, 0.342)), 
                                url('../../public/assets/images/main/bg-history-item.jpg')`,
                                backgroundPosition: "right center",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="mb-4 flex justify-between ">
                                <div className="flex justify-between">
                                    <p className="font-bold">Mã vé:</p>
                                    <p>1122334455</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-bold mr-2">Trạng thái:</p>
                                    <p className="text-red-700 bg-red-200 p-1 rounded-md">Đã hủy</p>
                                </div>
                            </div>
                            <div className="space-y-2 ">
                                <div className="flex justify-between">
                                    <p className="font-medium">Tuyến đường:</p>
                                    <p>Hải Phòng - Quảng Ninh</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-medium">Ngày giờ xuất phát:</p>
                                    <p>10/10/2023 10:00 AM</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-medium">Số ghế:</p>
                                    <p>C3</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-bold">Tổng giá vé:</p>
                                    <p className="font-bold">200,000 VND</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </main>
            {/* <!-- Modal Hủy Vé --> */}
            <div id="cancelModal" className="fixed inset-0 flex items-center justify-center z-50 hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative bg-white p-6 rounded-lg shadow-lg w-96 z-10">
                    <h2 className="text-lg font-bold mb-4 text-center">Xác nhận hủy vé</h2>

                    <p className="font-medium mb-2">Chọn lý do hủy:</p>
                    <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="cancel_reason" value="Không thể đi" onclick="toggleTextarea(true)" />
                            <span>Không thể đi</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="cancel_reason" value="Đổi kế hoạch" onclick="toggleTextarea(false)" />
                            <span>Đổi kế hoạch</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="cancel_reason" value="Khác" id="otherReasonRadio"
                                onclick="toggleTextarea(false)" />
                            <span>Khác</span>
                        </label>
                    </div>

                    <textarea id="otherReason" className="w-full p-2 mt-3 border border-gray-300 rounded-md hidden"
                        placeholder="Nhập lý do khác..."></textarea>

                    <div className="flex justify-end mt-4">
                        <button className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2" onclick="closeCancelModal()">Hủy</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">Xác nhận</button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 text-center py-4 text-sm text-gray-600 mb-0">
                <div className="space-x-4">
                    <a href="#" className="hover:underline">Về chúng tôi</a>
                    <span>·</span>
                    <a href="#" className="hover:underline">Điều khoản và điều kiện</a>
                    <span>·</span>
                    <a href="#" className="hover:underline">Cách chúng tôi hoạt động</a>
                    <span>·</span>
                    <a href="#" className="hover:underline">Chính sách bảo mật & Cookie</a>
                    <span>·</span>
                    <a href="#" className="hover:underline">Trung tâm trợ giúp</a>
                </div>
                <p className="mt-2">&copy; 2025 Công ty của bạn. Bảo lưu mọi quyền.</p>
            </div>

            {/* <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
            <script src="../js/main.js"></script> */}
        </>
    )
}
export default BookingHistory;