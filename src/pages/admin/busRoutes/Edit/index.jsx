import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const busRouteData = [
    { id: "1", route: "route1", startTime: "2023-10-10T13:30", endTime: "2023-10-10T23:30", ticketPrice: "120000" },
    { id: "2", route: "route2", startTime: "2023-10-10T13:30", endTime: "2023-10-10T23:30", ticketPrice: "1800000" },
];

function BusRoutesEdit() {
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
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const busRouteToEdit = busRouteData.find(busRoute => busRoute.id === id);
        if (busRouteToEdit) {
            setFormData(busRouteToEdit);
            Object.keys(busRouteToEdit).forEach(key => setValue(key, busRouteToEdit[key]));
        }
    }, [id, setValue]);

    const onSubmit = (data) => console.log("dulieu cap naht", data);

    const handleChange = async (fieldName) => {
        await trigger(fieldName); 
    
    };

 

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-2">Chỉnh sửa tuyến xe</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Tuyến đường</label>
                        <select
                            className={`w-full p-2 border rounded ${errors.route ? '!border-red-500' : 'border-gray-300'}`}
                            {...register("route", { required: "Vui lòng chọn tuyến đường" })}
                            onChange={() => handleChange("route")}
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
                            onChange={(e) => {
                                setValue("startTime", e.target.value);
                                handleChange("startTime");
                            }}
                        />
                        {errors.startTime && <p className="text-red-700">{errors.startTime.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Giờ kết thúc</label>
                        <input
                            type="datetime-local"
                            className={`w-full p-2 border rounded ${errors.endTime ? '!border-red-500' : 'border-gray-300'}`}
                            {...register("endTime", { required: "Vui lòng nhập giờ kết thúc" })}
                            onChange={(e) => {
                                setValue("endTime", e.target.value);
                                handleChange("endTime");
                            }}
                        />
                        {errors.endTime && <p className="text-red-700">{errors.endTime.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Giá vé (vnd)</label>
                        <input
                            type="number"
                            className={`w-full p-2 border rounded ${errors.ticketPrice ? '!border-red-500' : 'border-gray-300'}`}
                            {...register("ticketPrice", {
                                required: "Vui lòng nhập giá vé",
                                min: { value: 0, message: "Giá vé không được âm" },
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Vui lòng nhập số hợp lệ"
                                }
                            })}
                            onChange={(e) => {
                                setValue("ticketPrice", e.target.value);
                                handleChange("ticketPrice");
                            }}
                        />
                        {errors.ticketPrice && <p className="text-red-700">{errors.ticketPrice.message}</p>}
                    </div>

                    <button 
                        type="submit" 
                        className="px-4 py-2 bg-[#073272] text-white rounded"
                        disabled={Object.keys(errors).length > 0} 
                    >
                        Cập nhật tuyến xe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BusRoutesEdit;