function Bus() {
    return (
        <main className="mx-auto w-full md:w-[80%] flex pb-3 " id="busDetail">
            <div class="w-[40%] bg-white p-3 rounded-lg shadow-md">
                <div class="w-full">
                    <div class="flex justify-between items-center border-b pb-3">
                        <span class="font-bold text-xl text-[#043175]">Bộ lọc tìm kiếm</span>
                        <a href="#" class="text-lg text-orange-600 hover:underline">Bỏ lọc</a>
                    </div>

                    <div class="mt-4">
                        <span class="text-lg font-semibold text-gray-700">Giờ đi</span>
                        <div class="grid grid-cols-1 gap-y-2 mt-2 pl-2">
                            <label class="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" class="accent-orange-700 w-4 h-4" />
                                <span class="text-[18px]">Sáng sớm 00:00 - 06:00 (0)</span>
                            </label>
                            <label class="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" class="accent-orange-700 w-4 h-4" />
                                <span class="text-[18px]">Buổi sáng 06:00 - 12:00 (0)</span>
                            </label>
                            <label class="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" class="accent-orange-700 w-4 h-4" />
                                <span class="text-[18px]">Buổi chiều 12:00 - 18:00 (0)</span>
                            </label>
                            <label class="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" class="accent-orange-700 w-4 h-4" />
                                <span class="text-[18px]">Buổi tối 18:00 - 24:00 (0)</span>
                            </label>
                        </div>
                    </div>

                    <div class="mt-6">
                        <span class="text-lg font-semibold text-gray-700">Loại xe</span>
                        <div class="flex flex-wrap gap-3 mt-3">
                            <button class="border px-4 py-2 rounded-md text-orange-600 border-orange-300 bg-orange-50 hover:bg-orange-100">Ghế</button>
                            <button class="border px-4 py-2 rounded-md text-orange-600 border-orange-300 bg-orange-50 hover:bg-orange-100">Giường</button>
                            <button class="border px-4 py-2 rounded-md text-orange-600 border-orange-300 bg-orange-50 hover:bg-orange-100">Limousine</button>
                        </div>
                    </div>

                    <div class="mt-6">
                        <span class="text-lg font-semibold text-gray-700">Tầng</span>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <button class="border px-4 py-2 rounded-md text-gray-700 border-gray-300 hover:bg-gray-100">Tầng trên</button>
                            <button class="border px-4 py-2 rounded-md text-gray-700 border-gray-300 hover:bg-gray-100">Tầng dưới</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[60%] p-4 w-full">
                <h1 className="font-awesome text-[30px] font-bold pt-2">Điểm xuất phát - Điểm đến</h1>
                <div class="bg-white rounded p-3 w-full my-3">
                    <table class="w-full p-2">
                        <tr class="text-center">
                            <td class=" "><span class="font-bold text-4xl">13:25</span></td>
                            <td class="py-2 w-[25%]">
                                <div class="flex items-center justify-center space-x-2">
                                    <i class="fas fa-dot-circle text-green-700"></i>
                                    <div class="flex-grow border-t-2 border-dashed border-gray-500"></div>
                                    <span class="text-gray-600 text-sm font-mono font-bold">13 giờ</span>
                                    <div class="flex-grow border-t-2 border-dashed border-gray-500"></div>
                                    <i class="fa-solid fa-location-dot text-orange-600 text-xl"></i>
                                </div>
                            </td>
                            <td class=" "><span class="font-bold text-4xl">17:30</span></td>
                            <td class="py-2"></td>
                        </tr>

                        <tr class="border-b-2">
                            <td class="py-2"> <span class="text-[15px]">An Khe - TP. Hồ Chí Minh</span></td>
                            <td></td>
                            <td class="py-2"><span class="text-[15px]">An Minh (Kiên Giang) - TP. Hồ Chí Minh</span></td>
                            <td class="  py-2">
                                <p class="text-2xl text-center text-orange-600 font-bold">200.000đ</p>
                            </td>
                        </tr>

                        <tr class="py-2">
                            <td class="py-2 text-gray-400 text-sm" colspan="3">• Limousine <span class="text-green-600">• 32 chỗ
                                trống</span></td>

                            <td class="py-2">
                                <button class="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-full text-white">
                                    Chọn chuyến
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="bg-white rounded p-3 w-full my-3">
                    <table class="w-full p-2">
                        <tr class="text-center">
                            <td class=" "><span class="font-bold text-4xl">13:25</span></td>
                            <td class="py-2 w-[25%]">
                                <div class="flex items-center justify-center space-x-2">
                                    <i class="fas fa-dot-circle text-green-700"></i>
                                    <div class="flex-grow border-t-2 border-dashed border-gray-500"></div>
                                    <span class="text-gray-600 text-sm font-mono font-bold">13 giờ</span>
                                    <div class="flex-grow border-t-2 border-dashed border-gray-500"></div>
                                    <i class="fa-solid fa-location-dot text-orange-600 text-xl"></i>
                                </div>
                            </td>
                            <td class=" "><span class="font-bold text-4xl">17:30</span></td>
                            <td class="py-2"></td>
                        </tr>

                        <tr class="border-b-2">
                            <td class="py-2"> <span class="text-[15px]">An Khe - TP. Hồ Chí Minh</span></td>
                            <td></td>
                            <td class="py-2"><span class="text-[15px]">An Minh (Kiên Giang) - TP. Hồ Chí Minh</span></td>
                            <td class="  py-2">
                                <p class="text-2xl text-center text-orange-600 font-bold">200.000đ</p>
                            </td>
                        </tr>

                        <tr class="py-2">
                            <td class="py-2 text-gray-400 text-sm" colspan="3">• Limousine <span class="text-green-600">• 32 chỗ
                                trống</span></td>

                            <td class="py-2">
                                <button class="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-full text-white">
                                    Chọn chuyến
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    )
}
export default Bus;