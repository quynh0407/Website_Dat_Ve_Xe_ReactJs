import { Link } from "react-router-dom";
function HistoryBillGetAll(){
    return(
        <main className="p-10 bg-gray-100">
  <div className="container mx-auto mt-5">
    <h2 className="text-xl font-bold mb-3">Quản lý Hóa Đơn</h2>
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Tên</th>
          <th>Chuyến đi</th>
          <th>Chỗ ngồi</th>
          <th>Thời gian đặt</th>
          <th>Trạng thái</th>
          <th>Giá</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Võ Ngọc A</td>
          <td>201</td>
          <td>5</td>
          <td>2025-03-26 10:00:00</td>
          <td>Chưa giải quyết</td>
          <td>150.00</td>
          <td>
            <Link to="/admin/historyBill/edit/1" className="btn btn-primary btn-sm mr-2">Sửa</Link>
            <button className="btn btn-danger btn-sm">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Võ Ngọc B</td>
          <td>202</td>
          <td>10</td>
          <td>2025-03-26 11:00:00</td>
          <td>Đã xác nhận</td>
          <td>100.00</td>
          <td>
            <Link to="/admin/historyBill/edit/2" className="btn btn-primary btn-sm mr-2">Sửa</Link>
            <button className="btn btn-danger btn-sm">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Võ Ngọc C</td>
          <td>203</td>
          <td>15</td>
          <td>2025-03-26 12:00:00</td>
          <td>Đã hủy bỏ</td>
          <td>50.00</td>
          <td>
            <Link to="/admin/historyBill/edit/3" className="btn btn-primary btn-sm mr-2">Sửa</Link>
            <button className="btn btn-danger btn-sm">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Võ Ngọc D</td>
          <td>204</td>
          <td>20</td>
          <td>2025-03-26 13:00:00</td>
          <td>Đã xác nhận</td>
          <td>200.00</td>
          <td>
            <Link to="/admin/historyBill/edit/4" className="btn btn-primary btn-sm mr-2">Sửa</Link>
            <button className="btn btn-danger btn-sm">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Võ Ngọc E</td>
          <td>205</td>
          <td>25</td>
          <td>2025-03-26 14:00:00</td>
          <td>Chưa giải quyết</td>
          <td>120.00</td>
          <td>
            <Link to="/admin/historyBill/edit/5" className="btn btn-primary btn-sm mr-2">Sửa</Link>
            <button className="btn btn-danger btn-sm">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
    )
}
export default HistoryBillGetAll;