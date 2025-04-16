import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Constants from '../../../Constants';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { toast } from 'react-toastify';

function BookingTickets() {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    const formatCurrency = (amount) => {
        return amount.toLocaleString('vi-VN') + " VND";
      };

    const { tripId } = useParams();
    const [tripData, setTripData] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [emailUser, setEmailUser] = useState('');

    console.log(tripData);

    const seats = tripData?.data?.buses?.seats || [];

    useEffect(() => {
        if (tripId) {
            axios.get(`${Constants.DOMAIN_API}/admin/trips/getById/${tripId}`)
                .then(response => {
                    setTripData(response.data);
                })
                .catch(error => {
                    console.error('Lỗi khi lấy dữ liệu chuyến xe:', error);
                });
        }
    }, [tripId]);

    const handleSeatSelection = (seat) => {
        const exists = selectedSeats.find((s) => s.id === seat.id);
        if (exists) {
            setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id));
        } else {
            setSelectedSeats([...selectedSeats, { id: seat.id, number: seat.seatNumber }]);
        }
    };
    

    if (!tripData) {
        return <div>Lỗi khi lấy dữ liệu chuyến xe...</div>;
    }

    const handleCreateBooking = async () => {
        if (!userName || !phone || !emailUser || selectedSeats.length === 0) {
            toast.error("Vui lòng nhập đầy đủ thông tin và chọn ít nhất 1 ghế!");
            return;
        }
    
        const seatIds = selectedSeats.map(s => s.id);
        const trip = tripData.data;
        const busId = trip.buses?.id;
        const tripId = trip.id;
        const pricePerTicket = trip.price;
        const totalPrice = pricePerTicket * seatIds.length;
    
        try {
            for (let seatId of seatIds) {
                await axios.post(`${Constants.DOMAIN_API}/booking/add`, {
                    userName,
                    phone,
                    emailUser,
                    seatIds,
                    tripId,
                    status: "confirmed",
                    finalPrice: pricePerTicket,
                    busId,
                });
            }
    
            toast.success("Đặt vé thành công!");
            setSelectedSeats([]);
            setUserName('');
            setPhone('');
            setEmailUser('');
        } catch (error) {
            console.error("Lỗi khi tạo đơn vé:", error);
            toast.error("Có lỗi xảy ra khi đặt vé. Vui lòng thử lại.");
        }
    };
    

    return (
        <main className="mx-auto w-full md:w-[80%] flex pb-3" id="booktickets">
            <div className="w-[60%]">
                <div
                    className="w-full bg-white p-4 rounded-t-lg rounded-b-none shadow-md flex gap-2">
                    <div className="flex-1 p-[50px]">
                        <h3 className="text-xl font-semibold mb-4 text-center">Sơ đồ ghế</h3>

                        <div className="flex flex-wrap">
                            {seats.map((seat) => {
                                const isSelected = selectedSeats.some((s) => s.id === seat.id);

                                return (
                                    <div key={seat.id} className="w-1/4 p-1">
                                        <label
                                            className={`max-w-[50px] flex justify-center cursor-pointer 
              px-3 py-2 text-sm border
              ${seat.status === 'sold' ? 'bg-gray-200 border-gray-600 cursor-not-allowed' : ''}
              ${seat.status === 'empty' ? 'bg-sky-100 border-sky-600' : ''}
              ${seat.status === 'maintenance' ? 'bg-orange-100 border-orange-600 cursor-not-allowed' : ''}
              ${isSelected ? 'bg-green-100 text-green-700 border-green-600' : ''}
              rounded-md hover:bg-yellow-100 hover:border-yellow-600 
              transition-all duration-200 block text-center`}
                                        >
                                            <input
                                                value={seat.id}
                                                onChange={() => handleSeatSelection(seat)} 
                                                type="checkbox"
                                                className="sr-only"
                                                disabled={seat.status === 'sold' || seat.status === 'maintenance'}
                                            />
                                            <span>{seat.seatNumber}</span>
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-[5rem]">
                        <div className="flex">
                            <div
                                className="w-[20px] h-[20px] bg-gray-200 mr-2 mt-1 border border-gray-600 rounded-[4px]"></div>
                            <span>Đã bán</span>
                        </div>
                        <div className="flex">
                            <div
                                className="w-[20px] h-[20px] bg-sky-100 mr-2 mt-1 border border-sky-600 rounded-[4px]"></div>
                            <span>Còn trống</span>
                        </div>
                        <div className="flex">
                            <div
                                className="w-[20px] h-[20px] bg-orange-100 mr-2 mt-1 border border-orange-600 rounded-[4px]"></div>
                            <span>Đang bảo trì</span>
                        </div>
                        <div className="flex">
                            <div
                                className="w-[20px] h-[20px] bg-green-100 mr-2 mt-1 border-green-600 rounded-[4px]"></div>
                            <span>Đang chọn</span>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full bg-white p-4 rounded-t-none rounded-b-lg shadow-md flex gap-2 mt-4 pb-[2rem]">
                    <div className="w-[50%]">
                        <h1 className="text-[25px] font-semibold pt-4">Thông tin khách
                            hàng</h1>
                        <div className="grid grid-cols-1 mt-4">
                            <div className="flex">
                                <label className="text-[17px] font-semibold">Họ và tên</label>
                                <span className="text-red-500 ml-1">*</span>
                            </div>
                            <input type="text" placeholder="Nhập họ và tên"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-lg mt-2
                                focus:border-orange-300 focus:ring-1 focus:ring-orange-100 outline-none transition"/>
                        </div>
                        <div className="grid grid-cols-1 mt-4">
                            <div className="flex">
                                <label className="text-[17px] font-semibold">Số điện thoại</label>
                                <span className="text-red-500 ml-1">*</span>
                            </div>
                            <input type="text" placeholder="Nhập số điện thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-lg mt-2
                                focus:border-orange-300 focus:ring-1 focus:ring-orange-100 outline-none transition"/>
                        </div>
                        <div className="grid grid-cols-1 mt-4">
                            <div className="flex">
                                <label className="text-[17px] font-semibold">Email</label>
                                <span className="text-red-500 ml-1">*</span>
                            </div>
                            <input type="text" placeholder="Nhập email của bạn"
                                value={emailUser}
                                onChange={(e) => setEmailUser(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-lg mt-2
                                focus:border-orange-300 focus:ring-1 focus:ring-orange-100 outline-none transition"/>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <h1 className="text-center text-[25px] font-semibold p-4 text-orange-600">ĐIỀU KHOẢN & LƯU Ý</h1>
                        <span className="pl-4 pr-4 block text-justify text-[14px] font-semibold">
                            (*) Quý khách vui lòng có mặt tại bến xuất phát
                            của xe trước ít nhất 30 phút giờ xe khởi hành, mang
                            theo thông báo đã thanh toán vé thành công có chứa
                            mã vé được gửi từ hệ thống FUTA BUS LINES. Vui lòng
                            liên hệ Trung tâm tổng đài 1900 6067 để được hỗ trợ.
                            <br /><br />
                            (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng
                            liên hệ Tổng đài trung chuyển 1900 6918 trước khi
                            đặt vé. Chúng tôi không đón/trung chuyển tại những
                            điểm xe trung chuyển không thể tới được.</span>
                    </div>
                </div>
            </div>
            <div className="w-[40%] pl-4">
                <div className="w-full bg-white p-4 rounded-lg shadow-md">
                    <h1 className="text-[25px] font-bold pt-4 pb-2">Thông tin vé xe </h1>
                    <div className="flex justify-between pt-2">
                        <h1
                            className="text-gray-500 font-semibold text-[17px]">Điểm xuất phát:</h1>
                        <span className="font-semibold">{tripData.data.routes.startPoint}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                        <h1
                            className="text-gray-500 font-semibold text-[17px]">Điểm đến:</h1>
                        <span className="font-semibold">{tripData.data.routes.endPoint}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                        <h1 className="text-gray-500 font-semibold text-[17px]">Thời gian khởi hàng: </h1>
                        <div className="flex text-[17px]">
                            <span className="mr-2 font-semibold text-green-900">
                            {dayjs.utc(tripData.data.departureTime).tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY HH:mm")}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between pt-2 text-[17px]">
                        <h1 className="text-gray-500 font-semibold">Số lượng
                            ghế</h1>
                        <span className="font-semibold text-green-900"> {selectedSeats.length}</span>
                    </div>
                    <div className="flex justify-between pt-2 text-[17px]">
                        <h1 className="text-gray-500 font-semibold">Số ghế</h1>
                        <span className="font-semibold text-green-900">
                            {selectedSeats.map((s) => s.number).join(', ')}
                        </span>
                    </div>

                    <div className="flex justify-between pt-2 text-[17px]">
                        <h1 className="text-gray-500 font-semibold">Giá vé</h1>
                        <span
                            className="font-semibold text-green-900">{formatCurrency(tripData.data.price)}</span>
                    </div>
                    <hr className="mt-2 mb-2 border-gray-300" />
                    <div className="flex justify-between pt-2 text-[17px]">
                        <h1 className="font-semibold text-[22px] text-orange-600">{formatCurrency(tripData.data.price * selectedSeats.length)}</h1>
                        <button onClick={handleCreateBooking} className="p-2 pl-4 pr-4 rounded-[30px] bg-orange-500 text-white">Thêm đơn vé</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default BookingTickets;