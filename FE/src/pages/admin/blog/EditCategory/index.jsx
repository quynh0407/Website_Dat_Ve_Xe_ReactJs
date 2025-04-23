import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Constants from "../../../../Constants";
import { toast } from "react-toastify";

const BlogCategoryEdit = () => {
    const [queryParams] = useSearchParams();
    const navigate = useNavigate();
    const [previewImage, setPreviewImage] = useState(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (queryParams.get("id")) {
            getBlogCategoryInfo();
        }
    }, [queryParams]);

    const getBlogCategoryInfo = async () => {
        try {
            const res = await axios.get(`${Constants.DOMAIN_API}/admin/blog-category/${queryParams.get("id")}`);
            const data = res.data.data;
            setValue("name", data.name); 
            setValue("description", data.description);
            setValue("status", data.status);
            if (data.image) {
                setPreviewImage(data.image);  
            }
        } catch (error) {
            toast.error("Lỗi khi tải thông tin danh mục!");
            console.error("Error fetching category info: ", error);
        }
    };

    const validateImage = (fileList) => {
        const file = fileList[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (file && !allowedTypes.includes(file.type)) return "Ảnh phải có định dạng jpeg, png hoặc jpg";
        if (file && file.size > 5 * 1024 * 1024) return "Ảnh không được vượt quá 5MB";
        return true;
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("status", data.status);

            if (data.image && data.image.length > 0) {
                formData.append("image", data.image[0]);
            } else if (!data.image && previewImage) {
                formData.append("image", previewImage);
            }

            const res = await axios.patch(`${Constants.DOMAIN_API}/admin/blog-category/update/${queryParams.get("id")}`, formData);
            toast.success(res.data.message); 
            navigate("/admin/blog/getCategoryAll");
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
                <h3 className="text-2xl font-bold mb-4">Chỉnh sửa danh mục bài viết</h3>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Tên danh mục</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            {...register("name", { required: "Tên danh mục không được để trống" })}
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Mô tả</label>
                        <textarea
                            className="w-full p-2 border rounded"
                            rows="4"
                            {...register("description", { required: "Mô tả không được để trống" })}
                        />
                        {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Ảnh</label>
                        <input
                            type="file"
                            className="w-full p-2 border rounded"
                            {...register("image", { validate: validateImage })}
                        />
                        
                        {previewImage && (
                            <div className="mt-2">
                                <img
                                    src={`${Constants.DOMAIN_API}/public/images/${previewImage}`}
                                    alt="Ảnh hiện tại"
                                    className="w-[100px] h-[100px] object-cover rounded"
                                />
                            </div>
                        )}
                        {errors.image && <span className="text-red-500">{errors.image.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Trạng thái</label>
                        <select
                            className="w-full p-2 border rounded"
                            {...register("status", { required: "Trạng thái là bắt buộc" })}
                        >
                            <option value="" disabled>-- Chọn trạng thái --</option>
                            <option value="1">Hoạt động</option>
                            <option value="0">Không hoạt động</option>
                        </select>
                        {errors.status && <span className="text-red-500">{errors.status.message}</span>}
                    </div>

                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">
                        Lưu chỉnh sửa
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogCategoryEdit;
