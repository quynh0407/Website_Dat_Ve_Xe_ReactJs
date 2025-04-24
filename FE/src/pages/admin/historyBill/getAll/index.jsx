import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";
import axios from "axios";
import Constants from "../../../../Constants";
import { toast } from "react-toastify";
import axiosAdmin from '../../../../apiRoutes/axiosAdmin.js';

const HistoryBillGetAll = () => {
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedBillDetail, setSelectedBillDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    status: "",
    userName: ""
  });


  const fetchBills = async (customFilters = filters) => {
    setLoading(true);
    try {
      const params = {};
      if (customFilters.status) params.status = customFilters.status;
      if (customFilters.userName) params.userName = customFilters.userName;

      const queryString = new URLSearchParams(params).toString();
      const res = await axiosAdmin.get(`${Constants.DOMAIN_API}/admin/booking/list?${queryString}`);

      const formattedBills = res.data.data.map(bill => ({
        ...bill,
        route: bill.Trip?.Route
          ? `${getProvince(bill.Trip.Route.startPoint)} → ${getProvince(bill.Trip.Route.endPoint)}`
          : 'Không xác định'
      }));

      setBills(formattedBills);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách hóa đơn:", error);
      alert("Không thể tải danh sách hóa đơn. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };


  // Load danh sách ban đầu
  useEffect(() => {
    fetchBills();
  }, []);

  // Xử lý thay đổi bộ lọc
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Submit bộ lọc
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchBills();
  };

  // Xóa hóa đơn
  const deleteBill = async () => {
    if (!selectedBill) return;
    try {
      const res = await axiosAdmin.delete(`${Constants.DOMAIN_API}/admin/booking-detail/${selectedBill.id}`);
      setSelectedBill(null);
      toast.success(res.data.message);
      fetchBills();
    } catch (error) {
      console.error("Lỗi khi xóa hóa đơn:", error);
    }
  };

  // Hiển thị trạng thái 
  const getStatusText = (status) => {
    switch (status) {
      case "confirmed": return "Đã xác nhận";
      case "pending": return "Chờ xử lý";
      case "canceled": return "Đã hủy";
      default: return "Không xác định";
    }
  };

  // Lấy tỉnh từ thông tin location
  const getProvince = (location) => location?.split(",")[0] || "?";

  // Xem chi tiết hóa đơn
  const handleShowDetail = async (bill) => {
    setShowDetail(true);
    setDetailLoading(true);
    try {
      const res = await axiosAdmin.get(`${Constants.DOMAIN_API}/admin/booking-detail/by-booking/${bill.id}`);
      setSelectedBillDetail({
        info: bill,
        detail: res.data.data,
      });
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết:", error);
      alert("Không thể tải chi tiết hóa đơn!");
    }
    setDetailLoading(false);
  };

  // Render danh sách hóa đơn
  const renderBill = (bill, index) => (
    <tr key={bill.id} className="border-b">
      <td className="p-2 border">{index + 1}</td>
      <td className="p-2 border">{bill.userName}</td>
      <td className="p-2 border">{bill.route}</td>
      <td className="p-2 border">{new Date(bill.createdAt).toLocaleString("vi-VN")}</td>
      <td className="p-2 border">
        <span className={`px-2 py-1 rounded-full text-xs ${bill.status === "confirmed" ? "bg-green-100 text-green-800" :
          bill.status === "pending" ? "bg-yellow-100 text-yellow-800" :
            bill.status === "canceled" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"
          }`}>
          {getStatusText(bill.status)}
        </span>
      </td>

      <td className="p-2 border">{bill.finalPrice?.toLocaleString("vi-VN")} ₫</td>
      <td className="p-2 flex gap-2 justify-center">
        <Link
          to={`/admin/historyBill/edit?id=${bill.id}`}
          className="bg-yellow-500 text-white py-2 px-3 rounded"
          title="Chỉnh sửa"
        >
          <i className="fa-solid fa-pen-to-square text-md"></i>
        </Link>
        <button
          onClick={() => handleShowDetail(bill)}
          className="bg-blue-500 text-white py-2 px-3 rounded"
          title="Xem chi tiết"
        >
          <i className="fa-solid fa-eye text-md"></i>
        </button>
        <button
          onClick={() => setSelectedBill(bill)}
          className="bg-red-500 text-white py-2 px-3 rounded"
          title="Xóa hóa đơn"
        >
          <i className="fa-solid fa-trash text-md"></i>
        </button>
      </td>
    </tr>
  );

  return (
    <div className="container mx-auto p-2">
      <div className="bg-white p-4 shadow rounded-md">
        <h2 className="text-xl font-bold mb-3">Quản lý Hóa Đơn</h2>

        {/* Form lọc */}
        <form onSubmit={handleFilterSubmit} className="mb-4 grid grid-cols-2 gap-4">
          {/* Tên khách */}
          <div>
            <label className="block mb-1 text-sm">Tên khách</label>
            <input
              type="text"
              name="userName"
              placeholder="Nhập tên khách"
              value={filters.userName}
              onChange={handleFilterChange}
              className="p-2 border rounded w-full text-sm"
            />
          </div>

          {/* Trạng thái */}
          <div>
            <label className="block mb-1 text-sm">Trạng thái</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="p-2 border rounded w-full text-sm"
            >
              <option value="">Tất cả</option>
              <option value="confirmed">Đã xác nhận</option>
              <option value="pending">Chờ xử lý</option>
              <option value="cancelled">Đã hủy</option>
            </select>
          </div>

          {/* Nút lọc */}
          <div className="col-span-2 flex justify-end gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm"
              disabled={loading}
            >
              {loading ? 'Đang tải...' : 'Lọc'}
            </button>
            <button
              type="button"
              onClick={() => {
                const reset = { status: "", userName: "" };
                setFilters(reset);
                fetchBills(reset);
              }}
              className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded text-sm"
              disabled={loading}
            >
              Bỏ lọc
            </button>

          </div>

        </form>

        {/* Bảng danh sách */}
        {loading ? (
          <div className="text-center py-4">Đang tải dữ liệu...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border text-sm">STT</th>
                  <th className="p-2 border text-sm">Tên khách</th>
                  <th className="p-2 border text-sm">Chuyến đi</th>
                  <th className="p-2 border text-sm">Thời gian đặt</th>
                  <th className="p-2 border text-sm">Trạng thái</th>
                  <th className="p-2 border text-sm">Tổng tiền</th>
                  <th className="p-2 border text-sm">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {bills.length > 0 ? (
                  bills.map(renderBill)
                ) : (
                  <tr>
                    <td colSpan="7" className="p-4 text-center text-gray-500">
                      Không có dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal chi tiết */}
      {showDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-3">Chi tiết hóa đơn</h3>
            {detailLoading ? (
              <p>Đang tải...</p>
            ) : selectedBillDetail ? (
              <>
                <div className="space-y-2">
                  <p><strong>Khách hàng:</strong> {selectedBillDetail.info.userName}</p>
                  <p><strong>SĐT:</strong> {selectedBillDetail.info.phone}</p>
                  <p><strong>Email:</strong> {selectedBillDetail.info.emailUser}</p>
                  <p><strong>Chuyến đi:</strong> {selectedBillDetail.info.Trip?.Route?.startPoint} → {selectedBillDetail.info.Trip?.Route?.endPoint}</p>
                  <p><strong>Loại xe:</strong> {selectedBillDetail.detail[0]?.booking?.trips?.buses?.busType?.typeName || "Không rõ"}</p>
                  <p><strong>Biển số:</strong> {selectedBillDetail.detail[0]?.seatDetail?.bus?.plateNumber || "Không có"}</p>
                  <p><strong>Tên tài xế:</strong> {selectedBillDetail.info.Trip?.drivers?.fullName}</p>
                  <p><strong>Trạng thái:</strong> {getStatusText(selectedBillDetail.info.status)}</p>
                  <p><strong>Ngày đặt:</strong> {new Date(selectedBillDetail.info.createdAt).toLocaleString("vi-VN")}</p>
                  <p><strong>Tổng tiền:</strong> {selectedBillDetail.info.finalPrice?.toLocaleString("vi-VN")}₫</p>
                </div>
                <hr className="my-3" />
                <p className="font-semibold">Danh sách ghế:</p>
                <ul className="list-disc list-inside pl-4">
                  {selectedBillDetail.detail.map((item, idx) => (
                    <li key={idx}>
                      Ghế {item.seatDetail?.seatNumber}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowDetail(false)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Đóng
                </button>
              </>
            ) : (
              <p>Không có dữ liệu chi tiết</p>
            )}
          </div>
        </div>
      )}

      {/* Modal xóa */}
      <FormDelete
        isOpen={!!selectedBill && !showDetail}
        onClose={() => setSelectedBill(null)}
        onConfirm={deleteBill}
        Id={selectedBill?.id}
        action={`${Constants.DOMAIN_API}/admin/booking-detail/${selectedBill?.id}`}
        message={`Bạn có chắc chắn muốn xóa hóa đơn của "${selectedBill?.User?.fullName || selectedBill?.userName}" không?`}
      />
    </div>
  );
};

export default HistoryBillGetAll;