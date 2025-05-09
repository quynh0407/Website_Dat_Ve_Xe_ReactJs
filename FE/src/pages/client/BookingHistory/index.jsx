import Navbar from "../../../components/client/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Link } from 'react-router-dom';
import Cookies from "js-cookie";
import BookingDetail from "../BookingHistory/bookingDetail"
import { useMediaQuery } from 'react-responsive';
import { X } from 'lucide-react'; 

function BookingHistory() {

    const [BusBookingDetailData, setBusBookingDetailData] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const deleteBooking = async () => {

    };

    const [showDetail, setShowDetail] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleViewClick = (bookingId) => {
        if (isMobile) {
            window.location.href = `/lich-su-dat-ve/${bookingId}`;
        } else {
            setShowDetail(true);
            setSelectedBooking(bookingId);
        }
    };
    return (
        <>
            <main className="history mb-4 lg:mt-[12%] ">
                <div className="flex lg:w-[80%]  w-[90%] mx-auto lg:min-h-[30rem] ">
                    <div className="lg:w-[20%] md:hidden mobile:hidden bg-gray-100 p-3 rounded-md border border-gray-200">
                        <Navbar />
                    </div>
                    <div className="lg:w-[80%] md:w-full mobile:w-full bg-white p-3 rounded-md lg:ml-4 overflow-x-auto">
                        <h1 className="text-3xl font-bold">Lịch sử đặt vé</h1>
                        <p className="text-gray-600 mb-3">Theo dõi và quản lý quá trình lịch sử mua vé của bạn.</p>


                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-4">
                            <div>
                                <label className="block mb-1">Mã vé</label>
                                <input type="text" placeholder="Nhập mã vé" className="w-full border px-2 py-1 rounded" />
                            </div>
                            <div>
                                <label className="block mb-1">Thời gian</label>
                                <input type="date" className="w-full border px-2 py-1 rounded" />
                            </div>
                            <div>
                                <label className="block mb-1">Tuyến đường</label>
                                <input type="text" placeholder="Nhập tuyến đường" className="w-full border px-2 py-1 rounded" />
                            </div>
                            <div>
                                <label className="block mb-1">Trạng thái</label>
                                <select className="w-full border px-2 py-1 rounded">
                                    <option value="">Tất cả</option>
                                    <option value="cancelled">Hủy</option>
                                    <option value="pending">Chờ thanh toán</option>
                                    <option value="expired">Hết hạn</option>
                                    <option value="success">Thành công</option>
                                </select>
                            </div>
                            <div className="flex items-end">
                                <button className="w-full py-2 px-5 border-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl">
                                    Tìm
                                </button>
                            </div>
                        </div>


                        <div className="overflow-auto max-h-[30rem]">
                            <table className="w-full border border-gray-300 min-w-[900px]">
                                <thead className="bg-gray-100 sticky top-0 z-10">
                                    <tr>
                                        <th className="border px-4 py-2">Mã vé</th>
                                        <th className="border px-4 py-2">Số vé</th>
                                        <th className="border px-4 py-2">Tuyến đường</th>
                                        <th className="border px-4 py-2">Ngày đi</th>
                                        <th className="border px-4 py-2">Số tiền</th>
                                        <th className="border px-4 py-2">Thanh toán</th>
                                        <th className="border px-4 py-2">Trạng thái</th>
                                        <th className="border px-4 py-2">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 15 }).map((_, i) => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="border px-4 py-2">MV00{i + 1}</td>
                                            <td className="border px-4 py-2">{Math.floor(Math.random() * 5) + 1}</td>
                                            <td className="border px-4 py-2 max-w-[200px] line-clamp-2 overflow-hidden text-ellipsis">
                                                Lê Bình, Cái Răng, Cần Thơ → Quận 1, TP. Hồ Chí Minh
                                            </td>
                                            <td className="border px-4 py-2">2025-05-{String(i + 1).padStart(2, "0")}</td>
                                            <td className="border px-4 py-2">{(150000 + i * 10000).toLocaleString()}đ</td>
                                            <td className="border px-4 py-2">Đã thanh toán</td>
                                            <td className="border px-4 py-2">
                                                {["Hủy", "Chờ thanh toán", "Hết hạn", "Thành công"][i % 4]}
                                            </td>
                                            <td className="border px-4 py-2">
                                                <button
                                                    className="text-blue-600 hover:underline"
                                                    onClick={() => handleViewClick(1)}
                                                >
                                                    Xem
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>

            {showCancelModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="relative bg-white p-6 rounded-lg shadow-lg w-96 z-10">
                        <h2 className="text-lg font-bold mb-4 text-center">Xác nhận hủy vé</h2>

                        <p className="font-medium mb-2">Bạn có chắc chắn muốn hủy vé này không?</p>

                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2"
                                onClick={() => setShowCancelModal(false)}
                            >
                                Hủy
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                onClick={deleteBooking}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showDetail && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="relative bg-white rounded-lg max-w-3xl w-full">
                        <button
                            className="absolute top-2 right-2 text-red-600 font-bold"
                            onClick={() => setShowDetail(false)}
                        >
                           <X size={24} />
                        </button>
                        <BookingDetail bookingId={selectedBooking} />
                    </div>
                </div>
            )}
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

        </>
    );
}

export default BookingHistory;
