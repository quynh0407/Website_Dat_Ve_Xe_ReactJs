import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const billData = [
    { id: "1", name: "Võ Ngọc A", trip: "201", seat: "5", bookingTime: "2025-03-26 10:00:00", status: "Chưa giải quyết", price: "150.00" },
    { id: "2", name: "Võ Ngọc B", trip: "202", seat: "10", bookingTime: "2025-03-26 11:00:00", status: "Đã xác nhận", price: "100.00" },
    { id: "3", name: "Võ Ngọc C", trip: "203", seat: "15", bookingTime: "2025-03-26 12:00:00", status: "Đã hủy bỏ", price: "50.00" },
    { id: "4", name: "Võ Ngọc D", trip: "204", seat: "20", bookingTime: "2025-03-26 13:00:00", status: "Đã xác nhận", price: "200.00" },
    { id: "5", name: "Võ Ngọc E", trip: "205", seat: "25", bookingTime: "2025-03-26 14:00:00", status: "Chưa giải quyết", price: "120.00" },
];

function HistoryBillEdit() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        trip: "",
        seat: "",
        bookingTime: "",
        status: "Chưa giải quyết",
        price: "",
    });

    useEffect(() => {
        const billToEdit = billData.find((bill) => bill.id === id);
        if (billToEdit) {
            setFormData(billToEdit);
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Sửa Hóa Đơn</h3>
                <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">ID</label>
                        <input
                            type="text"
                            value={id}
                            disabled
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tên</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Chuyến đi</label>
                        <input
                            type="text"
                            name="trip"
                            value={formData.trip}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Chỗ ngồi</label>
                        <input
                            type="text"
                            name="seat"
                            value={formData.seat}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Thời gian đặt</label>
                        <input
                            type="datetime-local"
                            name="bookingTime"
                            value={formData.bookingTime}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Trạng thái</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        >
                            <option value="Chưa giải quyết">Chưa giải quyết</option>
                            <option value="Đã xác nhận">Đã xác nhận</option>
                            <option value="Đã hủy bỏ">Đã hủy bỏ</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Giá</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#073272] text-white rounded"
                    >
                        Cập nhật hóa đơn
                    </button>
                </form>
            </div>
        </div>
    );
}

export default HistoryBillEdit;