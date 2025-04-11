import { useState } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";


const blogData = [
    {
        id: "1",
        title: "Top 5 tuyến xe khách chất lượng cao dịp lễ",
        content: "Khám phá ngay 5 tuyến xe khách chất lượng, an toàn và tiện nghi nhất dành cho hành khách dịp lễ 30/4 - 1/5 năm nay.",
        image: "/assets/images/bus/Saigon.jpg"
    },
    {
        id: "2",
        title: "Kinh nghiệm đặt vé xe trực tuyến dễ dàng",
        content: "Hướng dẫn chi tiết cách đặt vé xe khách trực tuyến nhanh chóng, thanh toán tiện lợi, đảm bảo giữ chỗ thành công.",
        image: "/assets/images/products/s1.jpg"
    },
    {
        id: "3",
        title: "Ưu đãi đặc biệt dành cho khách hàng thân thiết",
        content: "Chương trình tích điểm đổi quà và giảm giá vé dành cho khách hàng đã đồng hành cùng chúng tôi suốt thời gian qua.",
        image: "/assets/images/bus/Ho Chi Minh City, Vietnam.jpg"
    },
    {
        id: "4",
        title: "Điểm danh các bến xe lớn tại TP. HCM",
        content: "Cập nhật thông tin các bến xe lớn tại TP. HCM, thuận tiện cho việc lựa chọn điểm đón/trả và lịch trình đi lại.",
        image: "/assets/images/profile/user-1.jpg"
    },
    {
        id: "5",
        title: "Cẩm nang du lịch miền Tây bằng xe khách",
        content: "Tổng hợp những kinh nghiệm, lịch trình, và điểm đến thú vị khi du lịch miền Tây bằng xe khách.",
        image: "/assets/images/products/s11.jpg"
    }
];

function BlogGetAll() {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (

        <>
            <div className="container mx-auto p-2">
                <div className="bg-white p-4 shadow rounded-md">
                    <Link
                        to="/admin/blog/create"
                        className=" inline-block bg-[#073272] text-white px-4 py-2 rounded"
                    >
                        Thêm bài viết
                    </Link>
                    <table className="w-full border-collapse border border-gray-300 mt-4">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 border">Tiêu đề bài viết</th>
                                <th className="p-2 border">Nội dung</th>
                                <th className="p-2 border">Hình ảnh</th>
                                <th className="p-2 border">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogData.map((blog) => (
                                <tr key={blog.id} className="border-b">
                                    <td className="p-2 border">{blog.title}</td>
                                    <td className="p-2 border max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
                                        {blog.content}</td>
                                    <td className="p-2 border">
                                        <img className="w-[50px] h-[50px]" src={blog.image} alt="blog" />
                                    </td>
                                    <td className="p-2 border flex gap-2">
                                        <Link
                                            to={`/admin/blog/edit/${blog.id}`}
                                            className="bg-yellow-500 text-white py-2 px-3 rounded"
                                        >
                                            <i className="fa-solid fa-pen-to-square text-md"></i>
                                        </Link>
                                        <button onClick={() => setSelectedBlog(blog)} className="bg-red-500 text-white py-2 px-3 rounded">
                                            <i className="fa-solid fa-trash text-md"></i>
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <FormDelete
                        isOpen={!!selectedBlog}
                        onClose={() => setSelectedBlog(null)}
                        onConfirm={() => {
                            setSelectedBlog(null);
                        }}
                        Id={selectedBlog?.id}
                        action={`/admin/Blog/delete/${selectedBlog?.id}`}
                        message={`Bạn có chắc chắn muốn xóa xe "${selectedBlog?.title}" không?`}
                    />
                </div>
            </div >
        </>
    )
}
export default BlogGetAll;