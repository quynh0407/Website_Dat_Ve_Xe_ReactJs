import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const blogData = [
    {
        id: "1",
        title: "Top 5 tuyến xe khách chất lượng cao dịp lễ",
        content: `Khám phá ngay 5 tuyến xe khách chất lượng, an toàn và tiện nghi nhất dành cho hành 
        khách dịp lễ 30/4 - 1/5 năm nay.Khám phá ngay 5 tuyến xe khách chất lượng, an toàn và tiện 
        nghi nhất dành cho hành khách dịp lễ 30/4 - 1/5 năm nay.Khám phá ngay 5 tuyến xe khách chất 
        lượng, an toàn và tiện nghi nhất dành cho hành khách dịp lễ 30/4 - 1/5 năm nay.Khám phá ngay
        5 tuyến xe khách chất lượng, an toàn và tiện nghi nhất dành cho hành khách dịp lễ 30/4 - 
        1/5 năm nay.Khám phá ngay 5 tuyến xe khách chất lượng, an toàn và tiện nghi nhất dành cho 
        hành khách dịp lễ 30/4 - 1/5 năm nay.Khám phá ngay 5 tuyến xe khách chất lượng, an toàn và 
        tiện nghi nhất dành cho hành khách dịp lễ 30/4 - 1/5 năm nay.Khám phá ngay 5 tuyến xe khách 
        chất lượng, an toàn và tiện nghi nhất dành cho hành khách dịp lễ 30/4 - 1/5 năm nay.
        Khám phá ngay 5 tuyến xe khách chất lượng, an toàn và tiện nghi nhất dành cho hành khách 
        dịp lễ 30/4 - 1/5 năm nay.`,
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


function BlogEdit() {
    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    });

    const { id } = useParams();
    const [formData, setFormData] = useState({ title: "", content: "", image: "" });
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        const blogToEdit = blogData.find(blog => blog.id === id);
        if (blogToEdit) {
            setFormData(blogToEdit);
            setValue("title", blogToEdit.title);
            setValue("content", blogToEdit.content);
            setValue("image", blogToEdit.image);
            setPreviewImage(blogToEdit.image);
        }
    }, [id, setValue]);

    const onSubmit = (data) => console.log("Cập nhật dữ liệu", data);

    const handleChange = async (fieldName) => {
        await trigger(fieldName);

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };


    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-full mx-auto">
                <h3 className="text-2xl font-bold mb-2">Chi tiết bài viết</h3>
                <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Tiêu đề bài viết</label>
                        <input
                            type="text"
                            className={`w-full p-2 border rounded ${errors.title ? '!border-red-500' : 'border-gray-300'}`}
                            {...register("title", { required: "Vui lòng nhập tiêu đề bài viết" })}
                            placeholder="Vui lòng nhập tiêu đề bài viết"
                            onChange={(e) => {
                                setValue("title", e.target.value);
                                handleChange("title");
                            }}
                        />
                        {errors.title && <p className="text-red-700">{errors.title.message}</p>}
                    </div>
                    <div className="">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Nội dung</label>
                            <textarea
                                rows={10}
                                className={`w-full p-2 border rounded ${errors.content ? '!border-red-500' : 'border-gray-300'}`}
                                {...register("content", {required: "Vui lòng nhập nội dung bài viết" })}
                                placeholder="Vui lòng nhập nội dung bài viết"
                                onChange={(e) => {
                                    setValue("content", e.target.value);
                                    handleChange("content");
                                }}
                            />
                            {errors.content && <p className="text-red-700">{errors.content.message}</p>}
                        </div>
                        

                        {previewImage && (
                            <div className="mb-4">
                                <img src={previewImage} alt="preview" className="w-[300px] rounded shadow" />
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Hình ảnh</label>
                        <input
                            name="image"
                            type="file"
                            onChange={handleFileChange} // xử lý ảnh mới
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">
                        Cập nhật bài viết
                    </button>
                </form>
            </div>
        </div>
    );
}
export default BlogEdit;