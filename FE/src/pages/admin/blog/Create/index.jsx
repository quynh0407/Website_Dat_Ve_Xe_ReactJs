import { useForm } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axiosAdmin from '../../../../apiRoutes/axiosAdmin.js';
import Constants from "../../../../Constants";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const BlogCreate = () => {
    const navigate = useNavigate();
    const editorRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [categories, setCategories] = useState([]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${Constants.DOMAIN_API}/admin/blog-category/active`);
                setCategories(res.data.data || []);
            } catch (err) {
                toast.error("Không thể tải danh mục");
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded && decoded.id) {
                    setValue("userId", decoded.id); //  Set userId từ token
                }
            } catch (err) {
                console.error("Lỗi giải mã token:", err);
            }
        }
    }, [setValue]);

    const validateImage = (fileList) => {
        if (fileList.length === 0) return "Ảnh là bắt buộc";
        const file = fileList[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedTypes.includes(file.type)) return "Ảnh phải có định dạng jpeg, png hoặc jpg";
        if (file.size > 5 * 1024 * 1024) return "Ảnh không được vượt quá 5MB";
        return true;
    };

    const onSubmit = async (data) => {
        try {
            const content = editorRef.current?.getContent();
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("content", content);
            formData.append("image", data.image[0]);
            formData.append("status", data.status);
            formData.append("categoryId", data.blogCategoryId);
            formData.append("userId", data.userId); //  Gửi userId

            const res = await axios.post(`${Constants.DOMAIN_API}/admin/blog/add`, formData);
            toast.success(res.data.message);
            navigate("/admin/blog/getAll");
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            } else {
                toast.error("Lỗi kết nối đến server!");
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-full mx-auto">
                <h3 className="text-2xl font-bold mb-4">Thêm bài viết</h3>

                {errorMessage && (
                    <div className="text-red-500 mb-4 font-semibold">{errorMessage}</div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="p-4 border rounded-md shadow-lg">
                    <input type="hidden" {...register("userId")} /> {/*  Hidden userId */}

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Tiêu đề bài viết</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            {...register("title", { required: "Tiêu đề không được để trống" })}
                        />
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Nội dung</label>
                        <Editor
                            apiKey="hxo8p07686juzc8t31sz6h654xhecoydtwwa89l3dcx3plg2"
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                                height: 400,
                                menubar: false,
                                plugins: ['table', 'link', 'image', 'code', 'lists'],
                                toolbar:
                                    'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify | ' +
                                    'bullist numlist outdent indent | link image | table | code',
                            }}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Hình ảnh</label>
                        <input
                            type="file"
                            className="w-full p-2 border rounded"
                            {...register("image", { validate: validateImage })}
                        />
                        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Danh mục</label>
                        <select
                            className="w-full p-2 border rounded"
                            {...register("blogCategoryId", { required: "Vui lòng chọn danh mục" })}
                        >
                            <option value="">-- Chọn danh mục --</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        {errors.blogCategoryId && <p className="text-red-500">{errors.blogCategoryId.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Trạng thái</label>
                        <select
                            className="w-full p-2 border rounded"
                            {...register("status", { required: "Vui lòng chọn trạng thái" })}
                        >
                            <option value="">-- Chọn trạng thái --</option>
                            <option value="1">Hiển thị</option>
                            <option value="0">Ẩn</option>
                        </select>
                        {errors.status && <p className="text-red-500">{errors.status.message}</p>}
                    </div>

                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded hover:bg-blue-900">
                        Thêm bài viết
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogCreate;
