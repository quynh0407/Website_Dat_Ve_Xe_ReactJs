import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const busData = [
    { id: "1", licensePlate: "51A-12345", busType: "Xe giường nằm", driver: "Nguyễn Văn A", status: "Hoạt động" },
    { id: "2", licensePlate: "51B-67890", busType: "Xe ghế ngồi", driver: "Trần Văn B", status: "Bảo trì" },
    { id: "3", licensePlate: "79C-11223", busType: "Xe giường nằm", driver: "Phạm Văn C", status: "Hoạt động" },
    { id: "4", licensePlate: "30D-44556", busType: "Xe limousine", driver: "Lê Văn D", status: "Đang sửa chữa" },
    { id: "5", licensePlate: "60E-77889", busType: "Xe ghế ngồi", driver: "Đặng Văn E", status: "Hoạt động" },
];

function BusEdit() {
    const { id } = useParams();
    const [formData, setFormData] = useState({ licensePlate: "", busType: "", driver: "", status: "" });

    useEffect(() => {
        const busToEdit = busData.find((bus) => bus.id === id);
        if (busToEdit) {
            setFormData(busToEdit);
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Sửa xe Khách</h3>
                <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Biển số</label>
                        <input
                            type="text"
                            name="licensePlate"
                            value={formData.licensePlate}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Loại xe</label>
                        <select
                            name="busType"
                            value={formData.busType}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Chọn loại xe</option>
                            <option value="1">Giường nằm</option>
                            <option value="2">Ghế ngồi</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tài xế</label>
                        <input
                            type="text"
                            name="driver"
                            value={formData.driver}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Trạng thái</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Chọn trạng thái</option>
                            <option value="active">Hoạt động</option>
                            <option value="maintenance">Bảo trì</option>
                            <option value="repairing">Đang sửa chữa</option>
                        </select>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Cập nhật xe</button>
                </form>
            </div>
        </div>
    );
}

export default BusEdit;