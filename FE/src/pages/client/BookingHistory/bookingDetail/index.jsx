import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Share2, ArrowLeft, MoreVertical } from 'lucide-react';
function BookingDetail() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };



    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=245887897';
        link.download = 'qrcode.png';
        link.click();
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Vé xe FUTA',
                text: 'Mã ghế: 245887897',
                url: window.location.href,
            });
        } else {
            alert('Trình duyệt không hỗ trợ chia sẻ.');
        }
    };


    return (
        <>
            <div className="max-w-3xl mx-auto hidden lg:block bg-white rounded-lg shadow-lg p-6 mt-10">
                <div className="text-center">
                    <h2 className="text-xl font-semibold mb-1">CHI TIẾT VÉ: <span className="font-bold">S5XK8V</span></h2>
                    <CheckCircle className="text-green-500 w-16 h-16 mx-auto my-4" />
                    <h1 className="text-xl font-bold text-green-600 mb-2">Mua vé xe thành công</h1>
                    <p className="text-gray-600 text-sm">
                        BUS GO đã gửi thông tin vé về địa chỉ email <br />
                        <span className="font-medium">cao************@gmail.com</span>. Vui lòng kiểm tra lại.
                    </p>
                </div>
                <div className=" border-2 rounded-lg mt-[1rem] border-gray-200 text-center">
                    <div className="bg-slate-200 ">
                        <strong >THÔNG TIN MUA VÉ</strong>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8  p-4 ">
                        <div className="space-y-2 text-left text-sm text-gray-700">
                            <p><strong>Họ và tên:</strong> Kha BAo Duyen</p>
                            <p><strong>Số điện thoại:</strong> 086xxxx010</p>
                            <p><strong>Email:</strong> cao************@gmail.com</p>
                        </div>

                        <div className="text-left space-y-2 text-sm text-gray-700">
                            <p><strong>Tổng giá vé:</strong> <span className="text-black font-semibold">165.000đ</span></p>
                            <p><strong>PTTT:</strong> MoMo</p>
                            <p>
                                <strong>Trạng thái:</strong>{' '}
                                <span className="text-green-600 font-semibold">Thành công</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col border-2 w-[15rem] p-3 rounded-1 mx-auto m-2 items-center mt-6 gap-4">
                        <div className="flex items-center gap-2">
                            <button onClick={handleDownload} className="text-sky-600 hover:text-sky-800" title="Tải xuống mã QR">
                                <Download className="w-5 h-5" />
                            </button>
                            <p className="text-sm text-gray-700">
                                <strong>Mã ghế:</strong> 245887897
                            </p>

                            <button onClick={handleShare} className="text-sky-600 hover:text-sky-800" title="Chia sẻ">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                        <img
                            src="/assets/images/logos/qrcode.png"
                            alt="QR Code"
                            className="w-32 h-32"
                        />
                    </div>
                </div>
            </div>

            {/* mobile - tablet */}
            <div className="mx-auto hidden md:block mobile:block bg-slate-100 shadow-lg text-sm">
                <div className="text-white bg-orange-500 text-center py-3 font-semibold rounded-t relative flex items-center justify-center">
                    <button onClick={handleBack} className="absolute left-4">
                        <ArrowLeft size={20} />
                    </button>

                    Thông tin chi tiết vé

                    <button className="absolute right-4">
                        <MoreVertical size={20} />
                    </button>
                </div>

                <div className="">
                    <div className="border-[1px] bg-white border-gray-300 p-3 ">
                        <div className="">
                            <h3 className="font-bold text-md mb-2 text-gray-600">Thông tin hành khách</h3>
                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Họ và tên:</strong>
                                <p>Kha Thi Bao Duyen</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Số điện thoại:</strong>
                                <p>0987654321</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Email:</strong>
                                <p>Duyen@gmail.com</p>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 mt-1 italic">
                            Quý khách vui lòng kiểm tra thêm thư rác/Spam trong trường hợp quý khách chưa thấy email thông tin Vé ở Hộp thư đến
                        </p>
                    </div>

                    <div className="mt-2 border-[1px] bg-white border-gray-300 p-3 ">
                        <h3 className="font-bold text-md text-gray-600">Thông tin lượt đi</h3>
                        <div className="flex items-center justify-between my-2 border-[1px] border-gray-300 w-[18rem] shadow p-2 rounded-2">
                            <div className="border w-20 h-20 flex items-center justify-center bg-gray-200">
                                <img
                                    src="/assets/images/logos/qrcode.png"
                                    alt="QR Code"
                                    className=" "
                                />
                            </div>
                            <div className="ml-2">
                                <p><strong>Mã vé:</strong> 245887897</p>
                                <p><strong>Ghế:</strong> A07</p>
                                <p><strong>Giá:</strong> 165,000đ</p>
                            </div>

                            <div className="flex flex-column px-2">
                                <button onClick={handleShare} className="text-sky-600 hover:text-sky-800" title="Chia sẻ">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button onClick={handleDownload} className="text-sky-600 hover:text-sky-800" title="Tải xuống mã QR">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>


                        </div>

                        <div className="mt-4">
                            <h3 className="font-bold text-md mb-2 text-gray-600">Thông tin lượt đi</h3>

                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Trạng thái:</strong>
                                <p className="text-green-600 font-semibold">Thanh toán thành công</p>
                            </div>

                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Tuyến xe:</strong>
                                <p>Miền Tây - Cần Thơ</p>
                            </div>

                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Thời gian khởi hành:</strong>
                                <p>09:01 02/05/2025</p>
                            </div>

                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Số lượng vé:</strong>
                                <p>1 Vé</p>
                            </div>

                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Vị trí ghế:</strong>
                                <p>A07</p>
                            </div>

                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Điểm lên xe:</strong>
                                <p className="text-right w-[80%]">
                                    BX Miền Tây
                                    VP BX Miền Tây: 395 Kinh Dương Vương, P.An Lạc, Q.Bình Tân, TP.HCM
                                </p>
                            </div>

                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Thời gian lên xe/trung chuyển:</strong>
                                <p>08:46 02/05/2025</p>
                            </div>

                            <p className="text-red-600 text-xs my-2">
                                Quý khách vui lòng có mặt tại Bến xe/VP BX Miền Tây trước 08:46 02/05/2025 để được trung chuyển hoặc kiểm tra thông tin trước khi lên xe!
                            </p>
                            <div className="flex justify-between mb-2">
                                <strong className="text-gray-500">Điểm xuống xe:</strong>
                                <p className="text-right w-[70%]">
                                    68 Trần Chiên, Lê Bình, Cái Răng, Cần Thơ, Vietnam
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    );
}

export default BookingDetail;
