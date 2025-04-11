import { useState } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";

const historyBillData = [
  { id: "1", name: "Võ Ngọc A", trip: "201", seat: "5", bookingTime: "2025-03-26 10:00:00", status: "Chưa giải quyết", price: "150.00" },
  { id: "2", name: "Võ Ngọc B", trip: "202", seat: "10", bookingTime: "2025-03-26 11:00:00", status: "Đã xác nhận", price: "100.00" },
  { id: "3", name: "Võ Ngọc C", trip: "203", seat: "15", bookingTime: "2025-03-26 12:00:00", status: "Đã hủy bỏ", price: "50.00" },
  { id: "4", name: "Võ Ngọc D", trip: "204", seat: "20", bookingTime: "2025-03-26 13:00:00", status: "Đã xác nhận", price: "200.00" },
  { id: "5", name: "Võ Ngọc E", trip: "205", seat: "25", bookingTime: "2025-03-26 14:00:00", status: "Chưa giải quyết", price: "120.00" },
];

function HistoryBillGetAll() {
  const [selectedBill, setSelectedBill] = useState(null);

  return (
    <div className="container mx-auto p-2">
      <div className="bg-white p-4 shadow rounded-md">
        <h2 className="text-xl font-bold mb-3">Quản lý Hóa Đơn</h2>
        <table className="w-full border-collapse border border-gray-300 mt-3">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Tên</th>
              <th className="p-2 border">Chuyến đi</th>
              <th className="p-2 border">Chỗ ngồi</th>
              <th className="p-2 border">Thời gian đặt</th>
              <th className="p-2 border">Trạng thái</th>
              <th className="p-2 border">Giá</th>
              <th className="p-2 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {historyBillData.map((bill) => (
              <tr key={bill.id} className="border-b">
                <td className="p-2 border">{bill.id}</td>
                <td className="p-2 border">{bill.name}</td>
                <td className="p-2 border">{bill.trip}</td>
                <td className="p-2 border">{bill.seat}</td>
                <td className="p-2 border">{bill.bookingTime}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      bill.status === "Đã xác nhận"
                        ? "bg-green-100 text-green-800"
                        : bill.status === "Chưa giải quyết"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {bill.status}
                  </span>
                </td>
                <td className="p-2 border">{bill.price}</td>
                <td className="p-2 border flex gap-2">
                  <Link
                    to={`/admin/historyBill/edit/${bill.id}`}
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
            ))}
          </tbody>
        </table>
      </div>

      <FormDelete
        isOpen={!!selectedBill}
        onClose={() => setSelectedBill(null)}
        onConfirm={() => {setSelectedBill(null);}}
        Id={selectedBill?.id}
        action={`/admin/bus/delete/${selectedBill?.id}`}
        message={`Bạn có chắc chắn muốn xóa hóa đơn của "${selectedBill?.name}" không?`}
      />
    </div>
  );
}

export default HistoryBillGetAll;