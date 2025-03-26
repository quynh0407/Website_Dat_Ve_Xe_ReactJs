import Navbar from "../../../components/client/Navbar";
function BookingHistory() {
    return (
        <>
            <main className="history mb-4 mt-[11%]">
                <div className="flex w-[80%]  mx-auto">
                    <div className="w-[20%] bg-gray-100 p-3 rounded-md border border-gray-200">
                        <Navbar />
                    </div>
                    <div className="w-[80%] bg-white p-3 rounded-md ml-4 ">
                        <h1 className="text-3xl font-bold">Lịch sử đặt vé</h1>
                        <p className="text-gray-600 mb-3">Theo dõi và quản lý quá trình lịch sử mua vé của bạn.</p>


                        <div class="bg-white  mb-3 shadow-lg rounded-lg m-auto m-y-2  flex  border border-gray-300">
                            <div class="w-2/3  border-r border-dashed border-gray-400">
                                <div class="text-white font-mono rounded-tl-lg text-lg font-bold bg-[#043175] px-3 py-2">Mã vé:
                                    098765
                                </div>
                                <div class="text-gray-800 font-mono text-lg font-bold px-3">PRICE <span
                                    class="float-right">TRAIN</span>
                                </div>
                                <div class="text-xl font-bold text-gray-900 px-3">$100 <span class="float-right">1234</span>
                                </div>

                                <div class="mt-2 flex justify-between px-3">
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">FROM</p>
                                        <p class="text-lg font-bold">NEW YORK</p>
                                    </div>
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">DEPARTURE</p>
                                        <p class="text-lg font-bold">07:00AM</p>
                                    </div>
                                </div>

                                <div class="mt-2 flex justify-between px-3">
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">TO</p>
                                        <p class="text-lg font-bold">LOS ANGELES</p>
                                    </div>
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">ARRIVE</p>
                                        <p class="text-lg font-bold">10:00AM</p>
                                    </div>
                                </div>

                                <div class=" flex justify-between  p-3">
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">DATE</p>
                                        <p class="text-lg font-bold">15 AUGUST 2022</p>
                                    </div>
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">SEAT</p>
                                        <p class="text-lg font-bold">A3</p>
                                    </div>
                                </div>
                            </div>


                            <div class="w-1/3 p-3 text-center">
                                <div class="flex justify-between align-items-center ">
                                    <b>Chưa khởi hành</b>
                                    <button class="bg-red-400 text-white px-4 py-2 font-mono rounded-md hover:bg-red-600"
                                        onclick="openCancelModal()">Hủy vé</button>
                                </div>
                                <div class="border-b border-gray-400 my-2"></div>

                                <div class="flex justify-between">
                                    <p class="text-gray-700 font-mono text-sm">NAME</p>
                                    <p class="text-lg font-bold">BENJAMIN SHAH</p>
                                </div>

                                <div class="flex justify-between mt-2">
                                    <p class="text-gray-700 font-mono text-sm">FROM</p>
                                    <p class="text-lg font-bold">NEW YORK</p>
                                </div>

                                <div class="flex justify-between mt-2">
                                    <p class="text-gray-700 font-mono text-sm">TO</p>
                                    <p class="text-lg font-bold">LOS ANGELES</p>
                                </div>

                                <div class="flex justify-between mt-2">
                                    <p class="text-gray-700 font-mono text-sm">TRAIN</p>
                                    <p class="text-lg font-bold">1234</p>
                                </div>

                                <div class="flex justify-between mt-2">
                                    <p class="text-gray-700 font-mono text-sm">SEAT</p>
                                    <p class="text-lg font-bold">A3</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white  mb-3 shadow-lg rounded-lg m-auto m-y-2  flex  border border-gray-300">
                            <div class="w-2/3  border-r border-dashed border-gray-400">
                                <div class="text-white font-mono rounded-tl-lg text-lg font-bold bg-[#043175] px-3 py-3">Mã vé:
                                    098765
                                </div>
                                <div class="text-gray-800 font-mono text-lg font-bold px-3">PRICE <span
                                    class="float-right">TRAIN</span>
                                </div>
                                <div class="text-xl font-bold text-gray-900 px-3">$100 <span class="float-right">1234</span>
                                </div>

                                <div class="mt-2 flex justify-between px-3">
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">FROM</p>
                                        <p class="text-lg font-bold">NEW YORK</p>
                                    </div>
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">DEPARTURE</p>
                                        <p class="text-lg font-bold">07:00AM</p>
                                    </div>
                                </div>

                                <div class="mt-2 flex justify-between px-3">
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">TO</p>
                                        <p class="text-lg font-bold">LOS ANGELES</p>
                                    </div>
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">ARRIVE</p>
                                        <p class="text-lg font-bold">10:00AM</p>
                                    </div>
                                </div>

                                <div class=" flex justify-between  p-3">
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">DATE</p>
                                        <p class="text-lg font-bold">15 AUGUST 2022</p>
                                    </div>
                                    <div>
                                        <p class="text-gray-700 font-mono text-sm">SEAT</p>
                                        <p class="text-lg font-bold">A3</p>
                                    </div>
                                </div>
                            </div>


                            <div class="w-1/3 p-3 text-center">
                                <div class="flex justify-between align-items-center py-1">
                                    <b>Chưa khởi hành</b>

                                </div>
                                <div class="border-b border-gray-400 my-2"></div>

                                <div class="flex justify-between">
                                    <p class="text-gray-700 font-mono text-sm">NAME</p>
                                    <p class="text-lg font-bold">BENJAMIN SHAH</p>
                                </div>

                                <div class="flex justify-between mt-2">
                                    <p class="text-gray-700 font-mono text-sm">FROM</p>
                                    <p class="text-lg font-bold">NEW YORK</p>
                                </div>

                                <div class="flex justify-between mt-2">
                                    <p class="text-gray-700 font-mono text-sm">TO</p>
                                    <p class="text-lg font-bold">LOS ANGELES</p>
                                </div>

                                <div class="flex justify-between mt-2">
                                    <p class="text-gray-700 font-mono text-sm">TRAIN</p>
                                    <p class="text-lg font-bold">1234</p>
                                </div>

                                <div class="flex justify-between mt-2">
                                    <p class="text-gray-700 font-mono text-sm">SEAT</p>
                                    <p class="text-lg font-bold">A3</p>
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