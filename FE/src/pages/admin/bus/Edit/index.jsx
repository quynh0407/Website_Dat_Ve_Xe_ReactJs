import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import Constants from "../../../../Constants";



function BusEdit() {
    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    });

    const [busTypes, setBusTypes] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [statuses, setStatuses] = useState([
        { value: "active", label: "Hoạt động" },
        { value: "inactive", label: "Không hoạt động" },
    ]);

    const getBusTypes = async () => {
        try {
            const res = await axios.get(`${Constants.DOMAIN_API}/admin/busType/list`);
            setBusTypes(res.data.data);
        } catch (e) {
            console.log("Lỗi khi load loại xe:", e);
        }
    };

    const getDrivers = async () => {
        try {
            const res = await axios.get(`${Constants.DOMAIN_API}/admin/driver/list`);
            setDrivers(res.data.data);
        } catch (e) {
            console.log("Lỗi khi load tài xế:", e);
        }
    };
    const handleChange = (field) => {
        trigger(field);
    };


    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getUserInfo(id);
        }
        getBusTypes();
        getDrivers();
    }, [id]);


    const getUserInfo = async (id) => {
        try {
            const res = await axios.get(`${Constants.DOMAIN_API}/admin/bus/getId/${id}`);
            setValue("plateNumber", res.data.data.plateNumber);
            setValue("status", res.data.data.status);
            setValue("busTypeId", res.data.data.busTypeId);
            setValue("driverId", res.data.data.driverId);
            setValue("totalSeats", res.data.data.totalSeats);
        } catch (e) {
            console.log(e);
        }
    };


    const handleRegister = async (props) => {
        try {
            if (id) {
                await axios.patch(`${Constants.DOMAIN_API}/admin/bus/update/${id}`, {
                    plateNumber: props.plateNumber,
                    busTypeId: `${props.busTypeId}`,
                    driverId: `${props.driverId}`,
                    status: props.status,
                    totalSeats: props.totalSeats,
                });

                navigate('/admin/bus/getAll');
                alert("Cập nhật thành công");
                return;
            }
        } catch (e) {
            console.log("Error", e);
        }
    };


    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Sửa xe khách</h3>
                <form onSubmit={handleSubmit(handleRegister)} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Biển số</label>
                        <input type="text" className="w-full p-2 border rounded"
                            {...register("plateNumber", { required: "Biển số không được để trống" })}
                            onChange={(e) => {
                                setValue("plateNumber", e.target.value);
                                handleChange("plateNumber");
                            }} />
                        {errors.plateNumber && <span className="text-red-500">{errors.plateNumber.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Loại xe</label>
                        <select
                            className="w-full p-2 border rounded"
                            {...register("busTypeId", { required: "Loại xe không được để trống" })}
                            onChange={(e) => {
                                setValue("busTypeId", e.target.value);
                                handleChange("busTypeId");
                            }}
                        >
                            <option value="">Chọn loại xe</option>
                            {busTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.typeName}
                                </option>
                            ))}
                        </select>
                        {errors.busTypeId && <span className="text-red-500">{errors.busTypeId.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tài xế</label>
                        <select
                            className="w-full p-2 border rounded"
                            {...register("driverId", { required: "Tài xế không được để trống" })}
                            onChange={(e) => {
                                setValue("driverId", e.target.value);
                                handleChange("driverId");
                            }}
                        >
                            <option value="">Chọn tài xế</option>
                            {drivers.map((driver) => (
                                <option key={driver.id} value={driver.id}>
                                    {driver.fullName}
                                </option>
                            ))}
                        </select>
                        {errors.driverId && <span className="text-red-500">{errors.driverId.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Trạng thái</label>
                        <select
                            className="w-full p-2 border rounded"
                            {...register("status", { required: "Trạng thái không được để trống" })}
                            onChange={(e) => {
                                setValue("status", e.target.value);
                                handleChange("status");
                            }}
                        >
                            <option value="">Chọn trạng thái</option>
                            {statuses.map((status) => (
                                <option key={status.value} value={status.value}>
                                    {status.label}
                                </option>
                            ))}
                        </select>
                        {errors.status && <span className="text-red-500">{errors.status.message}</span>}
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
                            onChange={(e) => {
                                setValue("totalSeats", e.target.value);
                                handleChange("totalSeats");
                            }}
                        />
                        {errors.totalSeats && <span className="text-danger">{errors.totalSeats.message}</span>}
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Cập nhật xe</button>
                </form>
            </div>
        </div>
    );
}

export default BusEdit;
