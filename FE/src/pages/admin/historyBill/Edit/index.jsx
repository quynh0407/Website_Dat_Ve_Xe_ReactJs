import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Constants from "../../../../Constants";

function HistoryBillEdit() {
    const [queryParams] = useSearchParams();
    const navigate = useNavigate();
    const [seatNumber, setSeatNumber] = useState("");
    const [tripInfo, setTripInfo] = useState({});
    const { register, control, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (queryParams.get("id")) {
            fetchBillData();
        }
    }, []);

    const fetchBillData = async () => {
        try {
            const res = await axios.get(
                `${Constants.DOMAIN_API}/admin/booking/getById/${queryParams.get("id")}`
            );
            const data = res.data.data;
            setValue("status", data.status);
            setValue("userName", data.userName);
            setValue("price", data.finalPrice);
            setValue("bookingTime", data.createdAt.slice(0, 16));
            setSeatNumber(data.Seat.seatNumber);
            setTripInfo(data.Trip);
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu hóa đơn:", error);
        }
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("status", data.status);
            formData.append("userName", data.userName);
            formData.append("finalPrice", data.price);

            await axios.patch(
                `${Constants.DOMAIN_API}/admin/booking/update/${queryParams.get("id")}`,
                formData
            );
            navigate("/admin/historyBill/getAll");
        } catch (error) {
            console.error("Lỗi khi cập nhật hóa đơn:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Chỉnh sửa Hóa đơn</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Tên khách */}
                    <div>
                        <label className="block font-medium">Tên khách</label>
                        <input
                            className="w-full p-2 border rounded"
                            {...register("userName")}
                        />
                    </div>

                    {/* Chuyến đi */}
                    <div>
                        <label className="block font-medium">Chuyến đi</label>
                        <input
                            value={`Đi lúc ${new Date(tripInfo.departureTime).toLocaleString("vi-VN", {
                                hour: "2-digit",
                                minute: "2-digit",
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })} - Đến lúc ${new Date(tripInfo.arrivalTime).toLocaleString("vi-VN", {
                                hour: "2-digit",
                                minute: "2-digit",
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}`}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Chỗ ngồi */}
                    <div>
                        <label className="block font-medium">Chỗ ngồi</label>
                        <input
                            value={seatNumber}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Thời gian đặt */}
                    <div>
                        <label className="block font-medium">Thời gian đặt</label>
                        <input
                            type="datetime-local"
                            {...register("bookingTime")}
                            defaultValue={
                                tripInfo.bookingTime
                                    ? new Date(tripInfo.bookingTime).toISOString().slice(0, 16)
                                    : ""
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Trạng thái */}
                    <div>
                        <label className="block font-medium">Trạng thái</label>
                        <select
                            {...register("status")}
                            className="w-full p-2 border rounded"
                        >
                            <option value="pending">Chưa giải quyết</option>
                            <option value="confirmed">Đã xác nhận</option>
                            <option value="canceled">Đã hủy bỏ</option>
                        </select>
                    </div>
                    {/* Giá */}
                    <div>
                        <label className="block font-medium">Giá</label>
                        <input
                            type="number"
                            {...register("price", {
                                required: "Giá không được để trống",
                                min: { value: 1, message: "Giá phải lớn hơn 0" },
                            })}
                            className="w-full p-2 border rounded"
                            defaultValue={tripInfo.finalPrice}
                        />
                        {errors.price && (
                            <span className="text-red-500">{errors.price.message}</span>
                        )}
                    </div>

                    {/* Nút Cập nhật */}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#073272] text-white rounded"
                    >
                        Cập nhật hóa đơn
                    </button>
                </form>
            </div>
        </div>
    );
}

export default HistoryBillEdit;
