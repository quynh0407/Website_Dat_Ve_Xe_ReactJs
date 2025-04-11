import { Link } from "react-router";
import { FaSave, FaCamera } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function DriverEditForm() {
    const [imagePreview, setImagePreview] = useState("https://media-public.canva.com/g5u4I/MAGCJZg5u4I/1/t.png");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data)
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 shadow rounded-md">
                <h2 className="text-xl font-bold mb-4">Chỉnh sửa tài xế</h2>
                <div className="relative w-40 h-40 mx-auto">
                    <label className="block mb-1 font-bold text-gray-600 text-center">Ảnh đại diện</label>
                    <img src={imagePreview} className="w-full h-full object-cover border rounded-full" alt="Avatar" />
                    <label className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full cursor-pointer">
                        <FaCamera className="text-white" />
                        <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            id="image"
                            accept="image/*"
                            {...register("image", {
                                required: !imagePreview ? "Ảnh không được để trống" : false
                            })}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setImagePreview(URL.createObjectURL(file));
                                }
                            }}
                        />
                    </label>
                    {errors.image && !imagePreview && <span className="text-red-500">{errors.image.message}</span>}
                </div>


                <div className="grid mt-5 grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1  ">Họ và tên</label>
                        <input type="text" className="w-full p-2 border rounded" defaultValue="Nguyễn Văn A" id="username"
                            {...register("username", {
                                required: "Họ và tên không được để trống",
                            })} />
                        {errors.username && <span className="text-danger">{errors.username.message}</span>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Số điện thoại</label>
                        <input type="text" className="w-full p-2 border rounded" defaultValue="0987654321" id="phone"
                            {...register("phone", {
                                required: "Số điện thoại không được để trống",
                            })} />
                        {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Số GPLX</label>
                        <input type="text" className="w-full p-2 border rounded" defaultValue="79A-12345" id="licenseNumber"
                            {...register("licenseNumber", {
                                required: "Số GPLX không được để trống",
                            })} />
                        {errors.licenseNumber && <span className="text-danger">{errors.licenseNumber.message}</span>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Loại GPLX</label>
                        <select className="w-full p-2 border rounded" defaultValue="B2" id="licenseType"
                            {...register("licenseType", {
                                required: "Loại GPLX không được để trống",
                            })}>
                            <option value="">Vui lòng chọn lại GPLX</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                        {errors.licenseType && <span className="text-danger">{errors.licenseType.message}</span>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Kinh nghiệm (năm)</label>
                        <input type="number" className="w-full p-2 border rounded" defaultValue="5" id="experienceYears"
                            {...register("experienceYears", {
                                required: "Kinh nghiệm (năm) không được để trống",
                            })} />
                        {errors.experienceYears && <span className="text-danger">{errors.experienceYears.message}</span>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Ngày sinh</label>
                        <select className="w-full p-2 border rounded" id="birthDate"
                            {...register("birthDate", {
                                required: "Ngày sinh không được để trống",
                            })}>
                            <option value="">Chọn ngày sinh</option>
                            {Array.from({ length: 100 }, (_, i) => {
                                const year = new Date().getFullYear() - i;
                                return <option key={i} value={year} selected={year === 1990}>{year}</option>;
                            })}
                        </select>
                        {errors.birthDate && <span className="text-danger">{errors.birthDate.message}</span>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Ngày thuê</label>
                        <input type="date" className="w-full p-2 border rounded" defaultValue="2022-05-15" id="hireDate"
                            {...register("hireDate", {
                                required: "Ngày thuê không được để trống",
                            })} />
                        {errors.hireDate && <span className="text-danger">{errors.hireDate.message}</span>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium" >Trạng thái</label>
                        <select className="w-full p-2 border rounded" id="status"
                            {...register("status", {
                                required: "Trạng thái không được để trống",
                            })}>
                            <option value="">Vui lòng chọn trạng thái</option>
                            <option value="active" selected>Đang làm việc</option>
                            <option value="inactive">Tạm nghỉ</option>
                        </select>
                        {errors.status && <span className="text-danger">{errors.status.message}</span>}
                    </div>

                </div>
                <div className="mt-4 flex gap-2 justify-end ">
                    <button type="submit" onClick={handleSubmit(onSubmit)} className="bg-[#073272] hover:bg-blue-950 text-white px-4 py-2 rounded flex justify-center align-items-center"> <FaSave className="mr-2" /> Lưu thay đổi</button>
                    <Link to="/admin/driver/getAll" className="bg-gray-400 text-white px-4 py-2 rounded">Hủy</Link>
                </div>
            </div>
        </div>
    )
}