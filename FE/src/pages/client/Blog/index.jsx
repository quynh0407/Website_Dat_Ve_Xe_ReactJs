import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "../../../Constants";
import { toast } from "react-toastify";

function Blog() {
    const [categories, setCategories] = useState([]);
    const [blogData, setData] = useState([]);
    const [latestBlogs, setLatestBlogs] = useState([]);
    const { categoryId } = useParams(); 

    useEffect(() => {
        getAll(categoryId);
        getCategories();
        getLatestBlogs();
    }, [categoryId]);

    const getAll = async (categoryId = null) => {
        try {
            const res = await axios.get(`${Constants.DOMAIN_API}/blog/list`, {
                params: { categoryId }
            });
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getLatestBlogs = async () => {
        try {
            const res = await axios.get(`${Constants.DOMAIN_API}/blog/latest`);
            setLatestBlogs(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getCategories = async () => {
        try {
            const res = await axios.get(`${Constants.DOMAIN_API}/blog-category/list`);
            setCategories(res.data.data);
        } catch (error) {
            console.log(error);
            toast.error("Không lấy được danh mục tin tức");
        }
    };

    const renderBlog = (blog, index) => {
        return (
            <div key={blog.id} className="flex items-center space-x-4">
                <Link to={`/blog/${blog.id}`}>
                    <img
                        src={`${Constants.DOMAIN_API}/public/images/${blog.image}`}
                        alt={blog.title}
                        className="w-60 h-32 object-cover rounded" width="350"
                    />
                </Link>
                <div>
                    <h3 className="text-base font-semibold line-clamp-3">
                        {blog.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                        {blog.content ? blog.content.replace(/<[^>]*>/g, '').slice(0, 150) + '...' : 'No content available'}
                    </p>
                    <span className="text-sm text-gray-500">
                        Ngày đăng: {new Date(blog.createAt).toLocaleDateString('vi-VN')}
                    </span>
                </div>
            </div>
        );
    };

    const renderBlogLimit = (blog, index) => {
        return (
            <li key={blog.id} className="flex items-center">
                <Link to={`/blog/${blog.id}`} className="flex items-center text-gray-800 hover:text-blue-600">
                    <img
                        src={`${Constants.DOMAIN_API}/public/images/${blog.image}`}
                        alt={blog.title}
                        className="w-12 h-12 object-cover rounded mr-3"
                        width="40"
                    />
                    <span className="ml-2 line-clamp-2">{blog.title}</span>
                </Link>
            </li>
        );
    };

    const renderCategory = (cat, index) => {
        return (
            <li key={cat.id} className="flex items-center">
                <Link
                    to={`/blog/category/${cat.id}`}
                    className="flex items-center text-gray-800 hover:text-blue-600"
                    onClick={() => getAll(cat.id)} 
                >
                    <img
                        src={`${Constants.DOMAIN_API}/public/images/${cat.image}`}
                        alt={cat.name}
                        className="w-12 h-12 object-cover rounded mr-3"
                    />
                    <span className="ml-2 line-clamp-2">{cat.name.replace(/<[^>]*>/g, '').slice(0, 24) + '...'}</span>
                </Link>
            </li>
        );
    };

    const resetFilter = () => {
        getAll(); 
    };

    return (
        <main className="home mx-auto w-full md:w-[80%] mb-5 px-4 mt-[11%]">
            <div className="bg-white rounded-lg p-3 mb-3">
                <div className="flex flex-col md:flex-row">
                    <aside className="w-full md:w-1/4 p-4 bg-gray-100 mr-5 mt-2">
                        <h4 className="text-xl font-bold text-orange-500 border-b-4 border-orange-500 inline-block pb-1 mb-3">
                            Tin Tức Mới Nhất
                        </h4>
                        <ul className="space-y-3">
                            
                            {latestBlogs.map(renderBlogLimit)}
                        </ul>

                        <h5
                            className="text-xl font-bold text-orange-500 border-b-4 border-orange-500 inline-block pb-1 mb-1 mt-3">
                            Danh Mục Tin Tức</h5>
                            <button
                            onClick={resetFilter}
                            className="my-2 text-orange-500 rounded-md "
                        >
                            Tất Cả Bài Viết
                        </button>
                        <ul className="space-y-3">
                            {categories.map(renderCategory)}
                        </ul>
                       
                    </aside>

                    <section className="w-full md:w-3/4 p-4">
                        <h2 className="text-3xl font-bold text-orange-500 border-b-4 border-orange-500 inline-block pb-1 mb-3">
                            Tất cả tin Tức
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {blogData.map(renderBlog)}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Blog;
