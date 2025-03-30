import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const busRouteData = [
    { id: "1", route: "Hà Nội-TP. HCM",departure:"13h30", arrival: "23h30", price: "120" },
    { id: "2", route: "Hà Nội-TP. HCM",departure:"13h30", arrival: "23h30", price: "1800000" },
];

function BusRoutesEdit(){
    const { id } = useParams();
        const [formData, setFormData] = useState({ route: "", departure: "", arrival: "", price: "" });
    
        useEffect(() => {
            const busrouteToEdit = busRouteData.find(busroute => busroute.id === id);
            if (busrouteToEdit) {
                setFormData(busrouteToEdit);
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

        const formatPrice = (price) => {
            return price.toLocaleString('vi-VN') + ' đ';
        };
    
        return (
            <div className="container mx-auto p-4">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Chỉnh sửa tuyến xe</h3>
                <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tuyến đường</label>
                        <input
                            type="text"
                            name="route"
                            value={formData.route}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Giờ bắt đầu</label>
                        <input
                            type="timestamp"
                            name="departure"
                            value={formData.departure}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Giờ kết thúc</label>
                        <input
                            type="timestamp"
                            name="arrival"
                            value={formData.arrival}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Giá vé</label>
                        <input
                            type="text"
                            name="price"
                            value={formatPrice(formData.price)}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">
                        Cập nhật tuyến xe</button>
                </form>
            </div>
            </div>
       
        );
}
export default BusRoutesEdit;