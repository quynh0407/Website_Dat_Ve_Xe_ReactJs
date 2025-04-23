import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Constants from "../../../../Constants";
import { toast } from "react-toastify";

const BlogCategoryCreate = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("image", data.image[0]);
            formData.append("status", data.status);

            const res = await axios.post(`${Constants.DOMAIN_API}/admin/blog-category/add`, formData);
            toast.success(res.data.message);
            navigate("/admin/blog/getCategoryAll");
        } catch (err) {
            if (err.response) {
                const errorMessage = err.response.data.message;
                toast.error(errorMessage);
            } else {
                toast.error("Lỗi kết nối đến server!");
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-full mx-auto">
                <h3 className="text-2xl font-bold mb-4">Thêm danh mục bài viết</h3>

                {errorMessage && (
                    <div className="text-red-500 mb-4 font-semibold">{errorMessage}</div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Tên danh mục</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            {...register("name", { required: "Tên danh mục không được để trống" })}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Mô tả</label>
                        <textarea
                            className="w-full p-2 border rounded"
                            rows="4"
                            {...register("description", { required: "Mô tả không được để trống" })}
                        />
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
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
                        <label className="block font-medium mb-2">Trạng thái</label>
                        <select
                            className="w-full p-2 border rounded"
                            {...register("status", { required: "Trạng thái là bắt buộc" })}
                            defaultValue=""
                        >
                            <option value="" disabled>-- Chọn trạng thái --</option>
                            <option value="1">Hoạt động</option>
                            <option value="0">Không hoạt động</option>
                        </select>
                        {errors.status && <p className="text-red-500">{errors.status.message}</p>}
                    </div>

                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded hover:bg-blue-900">
                        Thêm danh mục
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogCategoryCreate;
