import { useForm } from "react-hook-form";

function BusCreate() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-2">Thêm xe Khách</h3>
                <form className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Biển số</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Vui lòng nhập biển số" id="plateNumber"
                            required
                            {...register("plateNumber", {
                                required: "Biển số không được để trống",
                            })}
                        />
                        {errors.plateNumber && <span className="text-danger">{errors.plateNumber.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Loại xe</label>
                        <select className="w-full p-2 border rounded" id="busTypeID " required
                            {...register("busTypeID", {
                                required: "Loại xe không được để trống",
                            })}>
                            <option value="">Chọn loại xe</option>
                            <option value="1">Giường nằm</option>
                            <option value="2">Ghế ngồi</option>
                        </select>
                        {errors.busTypeID && <span className="text-danger">{errors.busTypeID.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Tài xế</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Vui lòng nhập tên tài xế" id="driverId"
                            required
                            {...register("driverId", {
                                required: "Tài xế không được để trống",
                            })} />
                        {errors.driverId && <span className="text-danger">{errors.driverId.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Trạng thái</label>
                        <select className="w-full p-2 border rounded" id="status" required
                            {...register("status", {
                                required: "Trạng thái không được để trống",
                            })}>
                            <option value="">Chọn trạng thái</option>
                            <option value="active">Hoạt động</option>
                            <option value="maintenance">Bảo trì</option>
                            <option value="repairing">Đang sửa chữa</option>
                        </select>
                        {errors.status && <span className="text-danger">{errors.status.message}</span>}
                    </div>
                    <button type="submit" onClick={handleSubmit(onSubmit)} className="px-4 py-2 bg-[#073272] text-white rounded">
                        Thêm xe
                    </button>
                </form>
            </div>
        </div>
    );
}
export default BusCreate;