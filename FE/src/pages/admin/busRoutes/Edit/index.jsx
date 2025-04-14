import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Constants from "../../../../Constants.jsx";
import { toast } from "react-toastify";

function BusRoutesEdit() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors }
  } = useForm({ mode: "onChange" });

  const { id } = useParams();
  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
  const [buses, setBuses] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${Constants.DOMAIN_API}/admin/trips/getById/${id}`);
        const trip = res.data.data;

        setValue("routeId", trip.routeId);
        setValue("busID", trip.busID);
        setValue("driverId", trip.driverId);
        setValue("departureTime", trip.departureTime.slice(0, 16));
        setValue("arrivalTime", trip.arrivalTime.slice(0, 16));
        setValue("price", trip.price);
      } catch (e) {
        console.log("Fetch trip error:", e);
        toast.error("Không thể tải dữ liệu chuyến xe");
      }
    };

    const fetchDropdownData = async () => {
      try {
        const [routeRes, busRes, driverRes] = await Promise.all([
          axios.get(`${Constants.DOMAIN_API}/admin/routes/list`),
          axios.get(`${Constants.DOMAIN_API}/admin/bus/list`),
          axios.get(`${Constants.DOMAIN_API}/admin/drivers/list`)
        ]);
        setRoutes(routeRes.data.data);
        setBuses(busRes.data.data);
        setDrivers(driverRes.data.data);
      } catch (e) {
        console.error("Fetch list error", e);
      }
    };

    fetchData();
    fetchDropdownData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await axios.patch(`${Constants.DOMAIN_API}/admin/trips/update/${id}`, data);
      toast.success("Cập nhật chuyến xe thành công!");
      navigate("/admin/busRoutes/getAll");
    } catch (e) {
      console.log("Update error", e);
      toast.error("Cập nhật thất bại!");
    }
  };

  const handleChange = async (fieldName) => {
    await trigger(fieldName);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">Chỉnh sửa chuyến xe</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md shadow-lg">
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Tuyến đường</label>
            <select
              className={`w-full p-2 border rounded ${errors.routeId ? '!border-red-500' : 'border-gray-300'}`}
              {...register("routeId", { required: "Vui lòng chọn tuyến đường" })}
              onChange={() => handleChange("routeId")}
            >
              <option value="">Chọn tuyến đường</option>
              {routes.map(route => (
                <option key={route.id} value={route.id}>
                  {route.startPoint} → {route.endPoint}
                </option>
              ))}
            </select>
            {errors.routeId && <p className="text-red-700">{errors.routeId.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Xe</label>
            <select
              className={`w-full p-2 border rounded ${errors.busID ? '!border-red-500' : 'border-gray-300'}`}
              {...register("busID", { required: "Vui lòng chọn xe" })}
              onChange={() => handleChange("busID")}
            >
              <option value="">Chọn xe</option>
              {buses.map(bus => (
                <option key={bus.id} value={bus.id}>
                  {bus.plateNumber} ({bus.totalSeats} chỗ)
                </option>
              ))}
            </select>
            {errors.busID && <p className="text-red-700">{errors.busID.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Tài xế</label>
            <select
              className={`w-full p-2 border rounded ${errors.driverId ? '!border-red-500' : 'border-gray-300'}`}
              {...register("driverId", { required: "Vui lòng chọn tài xế" })}
              onChange={() => handleChange("driverId")}
            >
              <option value="">Chọn tài xế</option>
              {drivers.map(driver => (
                <option key={driver.id} value={driver.id}>
                  {driver.fullName} - {driver.phone}
                </option>
              ))}
            </select>
            {errors.driverId && <p className="text-red-700">{errors.driverId.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Giờ bắt đầu</label>
            <input
              type="datetime-local"
              className={`w-full p-2 border rounded ${errors.departureTime ? '!border-red-500' : 'border-gray-300'}`}
              {...register("departureTime", { required: "Vui lòng nhập giờ bắt đầu" })}
            />
            {errors.departureTime && <p className="text-red-700">{errors.departureTime.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Giờ kết thúc</label>
            <input
              type="datetime-local"
              className={`w-full p-2 border rounded ${errors.arrivalTime ? '!border-red-500' : 'border-gray-300'}`}
              {...register("arrivalTime", { required: "Vui lòng nhập giờ kết thúc" })}
            />
            {errors.arrivalTime && <p className="text-red-700">{errors.arrivalTime.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Giá vé</label>
            <input
              type="number"
              className={`w-full p-2 border rounded ${errors.price ? '!border-red-500' : 'border-gray-300'}`}
              {...register("price", {
                required: "Vui lòng nhập giá vé",
                min: { value: 1000, message: "Giá vé phải lớn hơn 1000" }
              })}
            />
            {errors.price && <p className="text-red-700">{errors.price.message}</p>}
          </div>

          <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">
            Cập nhật chuyến xe
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusRoutesEdit;
