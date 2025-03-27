function ContactGetAll() {
    return (
        <main className="p-10 bg-gray-100">
            <div className="container mx-auto mt-5">
                <h2 className="text-xl font-bold mb-3">Quản lý Liên Hệ</h2>
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Nội dung</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Văn A</td>
                            <td>a@gmail.com</td>
                            <td>0901234567</td>
                            <td className="max-w-[100px] truncate whitespace-nowrap overflow-hidden">
                                Tôi muốn đặt câu hỏi về sản phẩm của bạn.
                            </td>
                            <td>Đang chờ</td>
                            <td>
                                <a href="/admin/contact/edit/1" className="btn btn-primary btn-sm mr-2">
                                    Sửa
                                </a>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Trần Thị B</td>
                            <td>b@gmail.com</td>
                            <td>0912345678</td>
                            <td className="max-w-[100px] truncate whitespace-nowrap overflow-hidden">
                                Tôi muốn báo cáo một vấn đề với đơn hàng của mình.
                            </td>
                            <td>Đã xử lý</td>
                            <td>
                                <a href="/admin/contact/edit/2" className="btn btn-primary btn-sm mr-2">
                                    Sửa
                                </a>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Lê Văn C</td>
                            <td>c@gmail.com</td>
                            <td>0923456789</td>
                            <td className="max-w-[100px] truncate whitespace-nowrap overflow-hidden">
                                Tôi muốn gửi lời khen ngợi về dịch vụ của bạn.
                            </td>
                            <td>Đã phản hồi</td>
                            <td>
                                <a href="/admin/contact/edit/3" className="btn btn-primary btn-sm mr-2">
                                    Sửa
                                </a>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Phạm Thị D</td>
                            <td>d@gmaile.com</td>
                            <td>0934567890</td>
                            <td className="max-w-[100px] truncate whitespace-nowrap overflow-hidden">
                                Tôi muốn biết thêm thông tin về các chương trình khuyến mãi.
                            </td>
                            <td>Đang chờ</td>
                            <td>
                                <a href="/admin/contact/edit/4" className="btn btn-primary btn-sm mr-2">
                                    Sửa
                                </a>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Hoàng Văn E</td>
                            <td>e@gmail.com</td>
                            <td>0945678901</td>
                            <td className="max-w-[100px] truncate whitespace-nowrap overflow-hidden">
                                Tôi muốn đặt hàng một số sản phẩm của bạn.
                            </td>
                            <td>Đã xử lý</td>
                            <td>
                                <a href="/admin/contact/edit/5" className="btn btn-primary btn-sm mr-2">
                                    Sửa
                                </a>
                                <button className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
export default ContactGetAll;