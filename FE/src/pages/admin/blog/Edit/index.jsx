import { useForm, Controller } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import axiosAdmin from '../../../../apiRoutes/axiosAdmin.js';

import Constants from "../../../../Constants";
import { toast } from "react-toastify";

const BlogEdit = () => {
    const [queryParams] = useSearchParams();
    const navigate = useNavigate();
    const [initialContent, setInitialContent] = useState("");
    const [previewImage, setPreviewImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fetchCategories();
        if (queryParams.get("id")) {
            getBlogInfo();
        }
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await axios.get(`${Constants.DOMAIN_API}/admin/blog-category/active`);
            setCategories(res.data.data);
        } catch (error) {
            console.log("Lỗi lấy danh mục:", error);
        }
    };

    const getBlogInfo = async () => {
        try {
            const res = await axiosAdmin.get(`${Constants.DOMAIN_API}/admin/blog/getById/${queryParams.get("id")}`);
            const data = res.data.data;
            setValue("title", data.title);
            setValue("content", data.content);
            setValue("status", data.status ? "1" : "0");
            setValue("categoryId", data.categoryId?.toString());
            if (data.image) {
                setPreviewImage(data.image);
            }
        } catch (error) {
            console.log("Lỗi lấy thông tin bài viết:", error);
        }
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("content", data.content);
            formData.append("status", Number(data.status)); 
            formData.append("categoryId", data.categoryId);
            if (data.image && data.image.length > 0) {
                formData.append("image", data.image[0]);
            }

            const res = await axios.patch(`${Constants.DOMAIN_API}/admin/blog/update/${queryParams.get("id")}`, formData);
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
                <h3 className="text-2xl font-bold mb-4">Chỉnh sửa bài viết</h3>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Tiêu đề</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            {...register("title", { required: "Tiêu đề không được để trống" })}
                        />
                        {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Nội dung</label>
                        <Controller
                            name="content"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Editor
                                    apiKey="hxo8p07686juzc8t31sz6h654xhecoydtwwa89l3dcx3plg2"
                                    value={value}
                                    onEditorChange={(content) => onChange(content)}
                                    init={{
                                        height: 400,
                                        menubar: false,
                                        plugins: ["table", "link", "image", "code", "lists"],
                                        toolbar:
                                            'undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image code',
                                    }}
                                />
                            )}
                        />
                        {errors.content && <span className="text-red-500">{errors.content.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Danh mục</label>
                        <select className="w-full p-2 border rounded" {...register("categoryId", { required: "Vui lòng chọn danh mục" })}>
                            <option value="">-- Chọn danh mục --</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        {errors.blogCategoryId && <p className="text-red-500">{errors.blogCategoryId.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Trạng thái</label>
                        <select className="w-full p-2 border rounded" {...register("status", { required: "Trạng thái là bắt buộc" })}>
                            <option value="">-- Chọn trạng thái --</option>
                            <option value="1">Hiển thị</option>
                            <option value="0">Ẩn</option>
                        </select>
                        {errors.status && <p className="text-red-500">{errors.status.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Ảnh</label>
                        <input
                            type="file"
                            className="w-full p-2 border rounded"
                            {...register("image")}
                        />
                        {previewImage && (
                            <img
                                src={`${Constants.DOMAIN_API}/public/images/${previewImage}`}
                                alt="Ảnh hiện tại"
                                className="mt-2 w-[100px] h-[100px] object-cover rounded"
                            />
                        )}
                    </div>

                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">
                        Lưu chỉnh sửa
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogEdit;
