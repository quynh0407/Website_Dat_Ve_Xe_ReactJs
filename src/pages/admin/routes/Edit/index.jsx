import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const routesData = [
    { id: "1", start: "Hà Nội", end: "Hải Phòng", distance: "120" },
    { id: "2", start: "TP. HCM", end: "Vũng Tàu", distance: "96" },
];

function RoutesEdit() {
    const { id } = useParams();
    const [formData, setFormData] = useState({ start: "", end: "", distance: "" });

    useEffect(() => {
        const routeToEdit = routesData.find(route => route.id === id);
        if (routeToEdit) {
            setFormData(routeToEdit);
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
        console.log("Updated route:", formData);
    };

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-2xl font-bold mb-4">Chỉnh sửa tuyến đường</h3>
            <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Điểm bắt đầu</label>
                    <input
                        type="text"
                        name="start"
                        value={formData.start}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Điểm kết thúc</label>
                    <input
                        type="text"
                        name="end"
                        value={formData.end}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Khoảng cách (km)</label>
                    <input
                        type="number"
                        name="distance"
                        value={formData.distance}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Cập nhật tuyến đường</button>
            </form>
        </div>
    );
}

export default RoutesEdit;