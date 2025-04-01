import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const routesData = [
    { id: "1", start: "Hà Nội", end: "Hải Phòng", distance: "120" },
    { id: "2", start: "TP. HCM", end: "Vũng Tàu", distance: "96" },
];

function RoutesEdit() {
    const { id } = useParams();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        const routeToEdit = routesData.find(route => route.id === id);
        if (routeToEdit) {
            Object.keys(routeToEdit).forEach((key) => setValue(key, routeToEdit[key]));
        }
    }, [id, setValue]);

    const onSubmit = (data) => console.log(data);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Chỉnh sửa tuyến đường</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Điểm bắt đầu</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        {...register("start", { required: "Điểm bắt đầu không được để trống" })}
                    />
                    {errors.start && <span className="text-red-500">{errors.start.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Điểm kết thúc</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        {...register("end", { required: "Điểm kết thúc không được để trống" })}
                    />
                    {errors.end && <span className="text-red-500">{errors.end.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Khoảng cách (km)</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded"
                        {...register("distance", { required: "Khoảng cách không được để trống" })}
                    />
                    {errors.distance && <span className="text-red-500">{errors.distance.message}</span>}
                </div>
                <button type="submit" onClick={handleSubmit(onSubmit)} className="px-4 py-2 bg-[#073272] text-white rounded">Cập nhật tuyến đường</button>
            </div>
        </div>
    );
}

export default RoutesEdit;
