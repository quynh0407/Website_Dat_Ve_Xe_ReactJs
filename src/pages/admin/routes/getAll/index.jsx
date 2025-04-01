import { useState } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";

const routesData = [
    { id: "1", start: "Hà Nội", end: "Hải Phòng", distance: "120" },
    { id: "2", start: "TP. HCM", end: "Vũng Tàu", distance: "96" },
];

export default function RoutesGetAll() {
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [routes, setRoutes] = useState(routesData);

    const handleDelete = () => {
        setRoutes(routes.filter((route) => route.id !== selectedRoute.id));
        setSelectedRoute(null);
    };

    return (
        <div className="container mx-auto p-2">
            <div className="bg-white p-4 shadow rounded-md">
                <Link
                    to="/admin/routes/create"
                    className="inline-block bg-[#073272] text-white px-4 py-2 rounded"
                >
                    Thêm tuyến đường
                </Link>
                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Điểm bắt đầu</th>
                            <th className="p-2 border">Điểm kết thúc</th>
                            <th className="p-2 border">Khoảng cách (km)</th>
                            <th className="p-2 border">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {routes.map((route) => (
                            <tr key={route.id} className="border-b">
                                <td className="p-2 border">{route.start}</td>
                                <td className="p-2 border">{route.end}</td>
                                <td className="p-2 border">{route.distance} km</td>
                                <td className="p-2 border flex gap-2">
                                    <Link
                                        to={`/admin/routes/edit/${route.id}`}
                                        className="bg-yellow-500 text-white py-2 px-3 rounded"
                                    >
                                        <i className="fa-solid fa-pen-to-square text-md"></i>
                                    </Link>
                                    <button
                                        onClick={() => setSelectedRoute(route)}
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
                    Id={selectedRoute?.id}
                    action={`/admin/route/delete/${selectedRoute?.id}`}
                    message={`Bạn có chắc chắn muốn xóa tuyến đường từ "${selectedRoute.start}" đến "${selectedRoute.end}" không?`}
                />
            )}

        </div>
    );
}
