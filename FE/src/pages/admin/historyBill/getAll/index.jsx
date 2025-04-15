import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";
import axios from "axios";
import Constants from "../../../../Constants";

const HistoryBillGetAll = () => {
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    getAllBills();
  }, []);

  const getAllBills = async () => {
    try {
      const res = await axios.get(`${Constants.DOMAIN_API}/admin/booking/list`);
      setBills(res.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách hóa đơn:", error);
    }
  };

  const deleteBill = async () => {
    if (!selectedBill) return;
    try {
      await axios.delete(`${Constants.DOMAIN_API}/admin/booking/${selectedBill.id}`);
      setSelectedBill(null);
      getAllBills();
    } catch (error) {
      console.error("Lỗi khi xóa hóa đơn:", error);
    }
  };

  const renderBill = (bill, index) => {
    return (
      <tr key={bill.id} className="border-b">
        <td className="p-2 border">{index + 1}</td>
        <td className="p-2 border">{bill.userName}</td>
        <td className="p-2 border">{bill.Trip?.id || bill.tripId}</td>
        <td className="p-2 border">{bill.Seat?.seatNumber || bill.seatId}</td>
        <td className="p-2 border">{new Date(bill.createdAt).toLocaleString("vi-VN")}</td>
        <td className="p-2 border">
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              bill.status === "confirmed"
                ? "bg-green-100 text-green-800"
                : bill.status === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {bill.status}
          </span>
        </td>
        <td className="p-2 border">{bill.finalPrice?.toLocaleString("vi-VN")} ₫</td>
        <td className="p-2 border flex gap-2 justify-center">
          <Link
            to={`/admin/historyBill/edit?id=${bill.id}`}
            className="bg-yellow-500 text-white py-2 px-3 rounded"
          >
            <i className="fa-solid fa-pen-to-square text-md"></i>
          </Link>
          <button
            onClick={() => setSelectedBill(bill)}
            className="bg-red-500 text-white py-2 px-3 rounded"
          >
            <i className="fa-solid fa-trash text-md"></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-white p-4 shadow rounded-md">
        <h2 className="text-xl font-bold mb-3">Quản lý Hóa Đơn</h2>
        <table className="w-full border-collapse border border-gray-300 mt-3">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Tên khách</th>
              <th className="p-2 border">Chuyến đi</th>
              <th className="p-2 border">Chỗ ngồi</th>
              <th className="p-2 border">Thời gian đặt</th>
              <th className="p-2 border">Trạng thái</th>
              <th className="p-2 border">Giá</th>
              <th className="p-2 border">Hành động</th>
            </tr>
          </thead>
          <tbody>{bills.map(renderBill)}</tbody>
        </table>
      </div>

      <FormDelete
        isOpen={!!selectedBill}
        onClose={() => setSelectedBill(null)}
        onConfirm={deleteBill}
        Id={selectedBill?.id}
        action={`${Constants.DOMAIN_API}/admin/booking/${selectedBill?.id}`}
        message={`Bạn có chắc chắn muốn xóa hóa đơn của "${selectedBill?.User?.fullName || selectedBill?.userName}" không?`}
      />
    </div>
  );
};

export default HistoryBillGetAll;
