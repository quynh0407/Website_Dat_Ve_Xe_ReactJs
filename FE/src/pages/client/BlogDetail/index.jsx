import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Constants from "../../../Constants";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogDetail();
    }, [id]);

    const fetchBlogDetail = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${Constants.DOMAIN_API}/blog/getById/${id}`);
            setBlog(response.data.data);
        } catch (error) {
            console.error("Error fetching blog detail:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <main className="mx-auto w-full md:w-[80%] px-4 mt-[11%]">
                <div className="bg-white rounded-lg p-3 mb-3">
                    <div className="flex justify-center py-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                </div>
            </main>
        );
    }

    if (!blog) {
        return (
            <div className="text-center py-10 text-gray-500">
                Không tìm thấy bài viết
            </div>
        );
    }

    return (
        <main className="mx-auto w-full md:w-[80%] px-4 mt-[11%] mb-10">
            <div className="bg-white rounded-lg p-5 shadow-md">
                <h1 className="text-3xl font-bold text-orange-500 mb-3">{blog.title}</h1>
                <div className="text-sm text-gray-500 mb-3">
                    Ngày đăng: {new Date(blog.createAt).toLocaleDateString('vi-VN')} 
                    {blog.blogCategory && (
                        <span className="ml-4">Danh mục: {blog.blogCategory.name}</span>
                    )}
                </div>
                <img
                    src={`${Constants.DOMAIN_API}/public/images/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-auto object-cover rounded mb-5"
                />
                <div
                    className="prose max-w-full"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                ></div>
            </div>
        </main>
    );
};

export default BlogDetail;
