import { useState } from "react";
import { useForm } from "react-hook-form";

function BusRoutesCreate() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-2">Thêm tuyến xe</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Tuyến đường</label>
                        <select
                            className={`w-full p-2 border rounded ${errors.route ? '!border-red-500' : 'border-gray-300'}`}
                            {...register("route", { required: "Vui lòng chọn tuyến đường" })}
                            aria-invalid={errors.route ? "true" : "false"}
                        >
                            <option value="">Chọn tuyến đường</option>
                            <option value="route1">Tuyến A</option>
                            <option value="route2">Tuyến B</option>
                            <option value="route3">Tuyến C</option>
                        </select>
                        {errors.route && <p className="text-red-700">{errors.route.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Giờ bắt đầu</label>
                        <input
                            type="datetime-local"
                            className={`w-full p-2 border rounded ${errors.startTime ? '!border-red-500' : 'border-gray-300'}`}
                            {...register("startTime", { required: "Vui lòng nhập giờ bắt đầu" })}
                            aria-invalid={errors.startTime ? "true" : "false"}
                        />
                        {errors.startTime && <p className="text-red-700">{errors.startTime.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Giờ kết thúc</label>
                        <input
                            type="datetime-local"
                            className={`w-full p-2 border rounded ${errors.endTime ? '!border-red-500' : 'border-gray-300'}`}
                            {...register("endTime", { required: "Vui lòng nhập giờ kết thúc" })}
                            aria-invalid={errors.endTime ? "true" : "false"}
                        />
                        {errors.endTime && <p className="text-red-700">{errors.endTime.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Giá vé</label>
                        <input
                            type="number"
                            className={`w-full p-2 border rounded ${errors.ticketPrice ? '!border-red-500' : 'border-gray-300'
                                }`}
                            {...register("ticketPrice", {
                                required: "Vui lòng nhập giá vé",
                                min: { value: 0, message: "Giá vé phải là lớn hơn 0" }
                            })}
                        />
                        {errors.ticketPrice && <p className="text-red-700">{errors.ticketPrice.message}</p>}
                    </div>

                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Thêm tuyến đường</button>
                </form>
            </div>
        </div>
    );
}

export default BusRoutesCreate;
