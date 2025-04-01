import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
const contactData = [
    { id: "1", name: "Nguyễn Văn A", email: "a@gmail.com", phone: "0901234567", content: "Tôi muốn đặt câu hỏi về sản phẩm của bạn.", status: "Đang chờ" },
    { id: "2", name: "Trần Thị B", email: "b@gmail.com", phone: "0912345678", content: "Tôi muốn báo cáo một vấn đề với đơn hàng của mình.", status: "Đã xử lý" },
    { id: "3", name: "Lê Văn C", email: "c@gmail.com", phone: "0923456789", content: "Tôi muốn gửi lời khen ngợi về dịch vụ của bạn.", status: "Đã phản hồi" },
    { id: "4", name: "Phạm Thị D", email: "d@gmaile.com", phone: "0934567890", content: "Tôi muốn biết thêm thông tin về các chương trình khuyến mãi.", status: "Đang chờ" },
    { id: "5", name: "Hoàng Văn E", email: "e@gmail.com", phone: "0945678901", content: "Tôi muốn đặt hàng một số sản phẩm của bạn.", status: "Đã xử lý" },
];

function ContactEdit() {
    const { id } = useParams();
    const contactToEdit = contactData.find((contact) => contact.id === id);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: contactToEdit || { name: "", email: "", phone: "", content: "", status: "Đang chờ" }
    });

    useEffect(() => {
        if (contactToEdit) {
            Object.keys(contactToEdit).forEach((key) => {
                setValue(key, contactToEdit[key]);
            });
        }
    }, [contactToEdit, setValue]);

    const onSubmit = (data) => console.log("Dữ liệu cập nhật:", data);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold">Sửa Liên Hệ</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">ID</label>
                        <input type="text" value={id} disabled className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tên</label>
                        <input
                            type="text"
                            {...register("name", { required: "Tên không được để trống" })}
                            className="w-full p-2 border rounded"
                        />
                        {errors.name && <small className="text-red-500">{errors.name.message}</small>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email không được để trống",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email không hợp lệ",
                                },
                            })}
                            className="w-full p-2 border rounded"
                        />
                        {errors.email && <small className="text-red-500">{errors.email.message}</small>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Số điện thoại</label>
                        <input
                            type="tel"
                            {...register("phone", {
                                required: "Số điện thoại không được để trống",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Số điện thoại không hợp lệ, chỉ được nhập 10 chữ số",
                                },
                            })}
                            className="w-full p-2 border rounded"
                        />
                        {errors.phone && <small className="text-red-500">{errors.phone.message}</small>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nội dung</label>
                        <textarea
                            {...register("content", { required: "Nội dung không được để trống" })}
                            className="w-full p-2 border rounded"
                        />
                        {errors.content && <small className="text-red-500">{errors.content.message}</small>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Trạng thái</label>
                        <select
                            {...register("status")}
                            className="w-full p-2 border rounded"
                        >
                            <option value="Đang chờ">Đang chờ</option>
                            <option value="Đã xử lý">Đã xử lý</option>
                            <option value="Đã phản hồi">Đã phản hồi</option>
                        </select>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">
                        Cập nhật liên hệ
                    </button>
                </form>
            </div>
        </div>
    );
}


export default ContactEdit;