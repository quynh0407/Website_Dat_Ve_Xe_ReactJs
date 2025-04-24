import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";
import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "../../../../Constants";
import { toast } from "react-toastify";
import axiosAdmin from '../../../../apiRoutes/axiosAdmin.js';

const BlogCategoryGetAll = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [blogData, setData] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        try {
            const res = await axiosAdmin.get(`${Constants.DOMAIN_API}/admin/blog-category/list`);
            console.log(res.data.data);
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBlog = async () => {
        if (!selectedBlog) return;
        try {
            const res = await axiosAdmin.delete(`${Constants.DOMAIN_API}/admin/blog-category/delete/${selectedBlog.id}`);
            setSelectedBlog(null);
            toast.success(res.data.message);
            getAll();
        } catch (err) {
            if (err.response) {
                const errorMessage = err.response.data.message;
                toast.error(errorMessage);
            } else {
                toast.error("Lỗi kết nối đến server!");
            }
        }
    };

    const renderBlog = (blog, index) => {
        return (
            <tr key={blog.id} className="border-b">
                <td className="p-2 border max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">{blog.name}</td>
                <td className="p-2 border">
                    <img className="w-[50px] h-[50px]" src={`${Constants.DOMAIN_API}/public/images/${blog.image}`} alt="blog" />
                </td>
                <td className="p-2 border max-w-[200px]">
                    <div className="p-4">
                        <div className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[300px]">
                            {blog.description}
                        </div>
                    </div>
                </td>

                <td className="p-2 border text-nowrap">
                    <span
                        className={`px-2 py-1 rounded-full text-xs ${blog.status == 1 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                        {blog.status == 1 ? "Hiển thị" : "Ẩn"}
                    </span>
                </td>
                <td className="p-2  flex gap-2">
                    <Link
                        to={`/admin/blog/editCategory?id=${blog.id}`}
                        className="bg-yellow-500 text-white py-2 px-3 rounded"
                    >
                        <i className="fa-solid fa-pen-to-square text-md"></i>
                    </Link>
                    <button onClick={() => setSelectedBlog(blog)} className="bg-red-500 text-white py-2 px-3 rounded">
                        <i className="fa-solid fa-trash text-md"></i>
                    </button>
                </td>

            </tr>
        )
    };

    return (

        <>
            <div className="container mx-auto p-2">
                <div className="bg-white p-4 shadow rounded-md">
                    <Link
                        to="/admin/blog/createCategory"
                        className=" inline-block bg-[#073272] text-white px-4 py-2 rounded"
                    >
                        Thêm danh mục bài viết
                    </Link>
                    <table className="w-full border-collapse border border-gray-300 mt-4">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 border">Tên Danh mục</th>
                                <th className="p-2 border">Hình ảnh</th>
                                <th className="p-2 border">Mô tả</th>
                                <th className="p-2 border">Trạng thái</th>
                                <th className="p-2 border">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogData.map(renderBlog)}
                        </tbody>
                    </table>
                    <FormDelete
                        isOpen={selectedBlog !== null}
                        onClose={() => setSelectedBlog(null)}
                        onConfirm={deleteBlog}
                        message={`Bạn có chắc chắn muốn xóa không?`}
                    />
                </div>
            </div >
        </>
    )
}
export default BlogCategoryGetAll;