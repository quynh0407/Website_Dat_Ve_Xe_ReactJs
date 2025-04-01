import { Link } from "react-router-dom";
import { useState } from "react";
import FormDelete from "../../../../components/formDelete";

const busRouteData = [
    { id: "1", routes: "Hà Nội-TP. HCM", departure: "13h30", arrival: "23h30", price: "120" },
    { id: "2", routes: "Hà Nội-TP. HCM", departure: "13h30", arrival: "23h30", price: "1800000" },
];

function BusRoutesGetAll() {
    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN') + 'vnd';
    };
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [routes, setRoutes] = useState(busRouteData);
    
    const handleDelete = () => {
        setRoutes(routes.filter((route) => route.id !== selectedRoute.id));
        setSelectedRoute(null);
    };

    return (
        <div className="container mx-auto p-2">
            <div className="bg-white p-4 shadow rounded-md">
                <Link
                    to="/admin/busRoutes/create"
                    className=" inline-block bg-[#073272] text-white px-4 py-2 rounded"
                >
                    Thêm tuyến xe
                </Link>
                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Tuyến đường</th>
                            <th className="p-2 border">Giờ bắt đầu</th>
                            <th className="p-2 border">Giờ kết thúc</th>
                            <th className="p-2 border">Giá vé</th>
                            <th className="p-2 border">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {busRouteData.map((busroute) => (
                            <tr key={busroute.id} className="border-b">
                                <td className="p-2 border">{busroute.routes}</td>
                                <td className="p-2 border">{busroute.departure}</td>
                                <td className="p-2 border">{busroute.arrival}</td>
                                <td className="p-2 border">{formatPrice(busroute.price)}</td>
                                <td className="p-2 border flex gap-2">
                                    <Link
                                        to={`/admin/busRoutes/edit/${busroute.id}`}
                                        className="bg-yellow-500 text-white py-2 px-3 rounded"
                                    >
                                        <i className="fa-solid fa-pen-to-square text-md"></i>
                                    </Link>
                                    <button 
                                        onClick={() => setSelectedRoute(busroute)} 
                                        className="bg-red-500 text-white py-2 px-3 rounded"
                                    >
                                        <i className="fa-solid fa-trash text-md"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedRoute && (
                <FormDelete
                    isOpen={!!selectedRoute}
                    onClose={() => setSelectedRoute(null)}
                    onConfirm={handleDelete}
                    message={`Bạn có chắc chắn muốn xóa tuyến xe "${selectedRoute.routes}" không?`}
                />
            )}
        </div>
    )
}
export default BusRoutesGetAll;