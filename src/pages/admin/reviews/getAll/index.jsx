import { Link } from 'react-router-dom';
function ReviewGetAll(){
    return(
        <main className="p-10 bg-gray-100">
      <div className="container mx-auto mt-5">
        <h2 className="text-xl font-bold mb-3">Quản lý Đánh Giá</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Tên</th>
              <th>Chuyến đi</th>
              <th>Đánh giá</th>
              <th>Bình luận</th>
              <th>Ngày đăng</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nguyễn Văn A</td>
              <td>201</td>
              <td>5⭐</td>
              <td>Tuyệt vời!</td>
              <td>2023-10-26 10:00:00</td>
              <td>Hiển thị</td>
              <td>
                <Link to="/admin/review/edit/1" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                <button className="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nguyễn Văn B</td>
              <td>202</td>
              <td>4⭐</td>
              <td>Tốt.</td>
              <td>2023-10-26 11:00:00</td>
              <td>Hiển thị</td>
              <td>
                <Link to="/admin/review/edit/2" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                <button className="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nguyễn Văn C</td>
              <td>203</td>
              <td>3⭐</td>
              <td>Khá ổn.</td>
              <td>2023-10-26 12:00:00</td>
              <td>Không hiển thị</td>
              <td>
                <Link to="/admin/review/edit/3" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                <button className="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Nguyễn Văn D</td>
              <td>204</td>
              <td>2⭐</td>
              <td>Không tốt.</td>
              <td>2023-10-26 13:00:00</td>
              <td>Hiển thị</td>
              <td>
                <Link to="/admin/review/edit/4" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                <button className="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nguyễn Văn E</td>
              <td>205</td>
              <td>1⭐</td>
              <td>Rất tệ.</td>
              <td>2023-10-26 14:00:00</td>
              <td>Không hiển thị</td>
              <td>
                <Link to="/admin/review/edit/5" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                <button className="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    )
}
export default ReviewGetAll;