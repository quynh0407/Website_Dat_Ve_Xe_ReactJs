import Navbar from "../../../components/client/Navbar";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import BookingDetail from "../BookingHistory/bookingDetail"
import { useMediaQuery } from 'react-responsive';
import { X } from 'lucide-react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import ConfirmCancelModel from "../../../components/client/ConfirmCancelModel";

function BookingHistory() {
    const navigate = useNavigate();
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedTicketId, setSelectedTicketId] = useState(null);

    const [showDetail, setShowDetail] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleViewClick = (bookingId) => {
        if (isMobile) {
            navigate(`/lich-su-dat-ve/${bookingId}`);
        } else {
            setShowDetail(true);
            setSelectedBooking(bookingId);
        }
    };

    const handleCancelClick = (ticketId) => {
        setSelectedTicketId(ticketId);
        setShowConfirmModal(true);
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
                                            <td className="border hover:text-orange-700 px-4 py-2" onClick={() => handleViewClick(1)}>
                                                MV00{i + 1}
                                            </td>
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
                                                <button onClick={() => handleCancelClick(1)}>Hủy</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>
            {showConfirmModal && (
                <ConfirmCancelModel
                    ticketId={selectedTicketId}
                    onClose={() => setShowConfirmModal(false)}  
                />
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
            {/* <ConfirmDialog
                visible={visible}
                onHide={() => setVisible(false)}
                message="Bạn có chắc muốn  tiếp tục?"
                header="Xác nhận"
                icon="pi pi-exclamation-triangle"
                accept={() => {
                    console.log("ok!");
                    setVisible(false);
                }}
                reject={() => {
                    console.log("kh!");
                    setVisible(false);
                }}
                style={{ width: '50vw' }}
                breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
            /> */}

        </>
    );
}

export default BookingHistory;
