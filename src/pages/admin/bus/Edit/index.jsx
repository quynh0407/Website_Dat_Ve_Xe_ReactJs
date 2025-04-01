import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const busData = [
    { id: "1", licensePlate: "51A-12345", busType: "Xe giường nằm", driver: "Nguyễn Văn A", status: "Hoạt động" },
    { id: "2", licensePlate: "51B-67890", busType: "Xe ghế ngồi", driver: "Trần Văn B", status: "Bảo trì" },
    { id: "3", licensePlate: "79C-11223", busType: "Xe giường nằm", driver: "Phạm Văn C", status: "Hoạt động" },
    { id: "4", licensePlate: "30D-44556", busType: "Xe limousine", driver: "Lê Văn D", status: "Đang sửa chữa" },
    { id: "5", licensePlate: "60E-77889", busType: "Xe ghế ngồi", driver: "Đặng Văn E", status: "Hoạt động" },
];

function BusEdit() {
    const { id } = useParams();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        const busToEdit = busData.find((bus) => bus.id === id);
        if (busToEdit) {
            Object.keys(busToEdit).forEach((key) => setValue(key, busToEdit[key]));
        }
    }, [id, setValue]);

    const onSubmit = (data) => console.log(data);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Sửa xe khách</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Biển số</label>
                        <input type="text" className="w-full p-2 border rounded"
                            {...register("licensePlate", { required: "Biển số không được để trống" })} />
                        {errors.licensePlate && <span className="text-red-500">{errors.licensePlate.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Loại xe</label>
                        <select className="w-full p-2 border rounded"
                            {...register("busType", { required: "Loại xe không được để trống" })}>
                            <option value="">Chọn loại xe</option>
                            <option value="Xe giường nằm">Giường nằm</option>
                            <option value="Xe ghế ngồi">Ghế ngồi</option>
                            <option value="Xe limousine">Limousine</option>
                        </select>
                        {errors.busType && <span className="text-red-500">{errors.busType.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tài xế</label>
                        <input type="text" className="w-full p-2 border rounded"
                            {...register("driver", { required: "Tài xế không được để trống" })} />
                        {errors.driver && <span className="text-red-500">{errors.driver.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Trạng thái</label>
                        <select className="w-full p-2 border rounded"
                            {...register("status", { required: "Trạng thái không được để trống" })}>
                            <option value="">Chọn trạng thái</option>
                            <option value="Hoạt động">Hoạt động</option>
                            <option value="Bảo trì">Bảo trì</option>
                            <option value="Đang sửa chữa">Đang sửa chữa</option>
                        </select>
                        {errors.status && <span className="text-red-500">{errors.status.message}</span>}
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Cập nhật xe</button>
                </form>
            </div>
        </div>
    );
}

export default BusEdit;
