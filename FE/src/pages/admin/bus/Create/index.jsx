import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import Constants from "../../../../Constants.jsx";

function BusCreate() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    const [busTypes, setBusTypes] = useState([]);
    const [drivers, setDrivers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const busTypesRes = await axios.get(`${Constants.DOMAIN_API}/admin/busType/list`);
                const driversRes = await axios.get(`${Constants.DOMAIN_API}/admin/driver/list`);

                if (Array.isArray(busTypesRes.data.data)) {
                    setBusTypes(busTypesRes.data.data);
                } else {
                    console.error("Dữ liệu busTypes không phải là mảng");
                }

                if (Array.isArray(driversRes.data.data)) {
                    setDrivers(driversRes.data.data);
                } else {
                    console.error("Dữ liệu drivers không phải là mảng");
                }
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu busTypes hoặc drivers", error);
            }
        };

        fetchData();
    }, []);


    const onSubmit = async (props) => {
        console.log("Dữ liệu nhập vào:", props);

        try {
            let formData = new FormData();
            formData.append("plateNumber", props.plateNumber);
            formData.append("busTypeId ", props.busTypeId);
            formData.append("driverId ", props.driverId);
            formData.append("status", props.status);
            formData.append("totalSeats", props.totalSeats);


            const res = await axios.post(`${Constants.DOMAIN_API}/admin/bus/add`, {
                plateNumber: props.plateNumber,
                busTypeId: `${props.busTypeId}`,
                driverId: `${props.driverId}`,
                status: props.status,
                totalSeats: props.totalSeats,
            });
            console.log("Success", res);

            navigate('/admin/bus/getAll');
            alert("Thêm thành công");
        } catch (e) {
            console.log("Error", e);
        }
    };

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
                        <select className="w-full p-2 border rounded" id="busTypeId" required
                            {...register("busTypeId", {
                                required: "Loại xe không được để trống",
                            })}>
                            <option value="">Chọn loại xe</option>
                            {busTypes.map((busType) => (
                                <option key={busType.id} value={busType.id}>{busType.typeName}</option>
                            ))}
                        </select>
                        {errors.busTypeId && <span className="text-danger">{errors.busTypeId.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Tài xế</label>
                        <select className="w-full p-2 border rounded" id="driverId" required
                            {...register("driverId", {
                                required: "Tài xế không được để trống",
                            })}>
                            <option value="">Chọn tài xế</option>
                            {drivers.map((driver) => (
                                <option key={driver.id} value={driver.id}>{driver.fullName}</option>
                            ))}
                        </select>
                        {errors.driverId && <span className="text-danger">{errors.driverId.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Trạng thái</label>
                        <select className="w-full p-2 border rounded" id="status" required
                            {...register("status", {
                                required: "Trạng thái không được để trống",
                            })}>
                            <option value="">Chọn trạng thái</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Active">Active</option>
                        </select>
                        {errors.status && <span className="text-danger">{errors.status.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Số ghế</label>
                        <input
                            type="number"
                            className="w-full p-2 border rounded"
                            placeholder="Vui lòng nhập số ghế"
                            id="totalSeats"
                            required
                            {...register("totalSeats", {
                                required: "Số ghế không được để trống",
                                min: {
                                    value: 1,
                                    message: "Số ghế phải lớn hơn 0"
                                }
                            })}
                        />
                        {errors.totalSeats && <span className="text-danger">{errors.totalSeats.message}</span>}
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