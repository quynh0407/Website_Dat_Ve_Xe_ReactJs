import { Link } from "react-router-dom";
function BusGetAll() {
    return (
        <main className="p-10 bg-gray-100">
            <div className="container mx-auto mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-xl font-bold mb-3">Quản lý xe khách</h2>
                    <Link to="/admin/bus/create" className="btn btn-primary mb-3">
                        + Thêm xe mới
                    </Link>
                </div>
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Biển số</th>
                            <th>Loại xe</th>
                            <th>Tài xế</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>51A-12345</td>
                            <td>Giường nằm</td>
                            <td>Nguyễn Văn A</td>
                            <td><span className="badge bg-success">Hoạt động</span></td>
                            <td>
                                <Link to="/admin/bus/edit/1" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>51B-67890</td>
                            <td>Ghế ngồi</td>
                            <td>Trần Văn B</td>
                            <td><span className="badge bg-danger">Bảo trì</span></td>
                            <td>
                                <Link to="/admin/bus/edit/1" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>79C-11223</td>
                            <td>Giường nằm</td>
                            <td>Phạm Văn C</td>
                            <td><span className="badge bg-success">Hoạt động</span></td>
                            <td>
                                <Link to="/admin/bus/edit/1" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>30D-44556</td>
                            <td>Giường nằm</td>
                            <td>Lê Văn D</td>
                            <td><span className="badge bg-warning">Đang sửa chữa</span></td>
                            <td>
                                <Link to="/admin/bus/edit/1" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>60E-77889</td>
                            <td>Ghế ngồi</td>
                            <td>Đặng Văn E</td>
                            <td><span className="badge bg-success">Hoạt động</span></td>
                            <td>
                                <Link to="/admin/bus/edit/1" className="btn btn-primary btn-sm mr-2">Sửa</Link>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
export default BusGetAll;