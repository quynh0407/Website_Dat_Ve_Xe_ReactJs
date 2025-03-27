import { Link } from "react-router";
const busTypesData = [
    { id: "1", name: "Xe giường nằm", status: "Hoạt động", total: "15" },
    { id: "2", name: "Xe ghế ngồi", status: "Hoạt động", total: "20" },
    { id: "3", name: "Xe limousine", status: "Bảo trì", total: "5" },
];

function BusTypeGetAll(){
    return(
        <div className="container mx-auto p-2">
        <div className="bg-white p-4 shadow rounded-md">
            <Link
                to="/admin/bustype/create"
                className="inline-block bg-[#073272] text-white px-4 py-2 rounded"
            >
                Thêm loại xe
            </Link>
            <table className="w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Tên loại xe</th>
                        <th className="p-2 border">Trạng thái</th>
                        <th className="p-2 border">Tổng số</th>
                        <th className="p-2 border">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {busTypesData.map((type) => (
                        <tr key={type.id} className="border-b">
                            <td className="p-2 border">{type.id}</td>
                            <td className="p-2 border">{type.name}</td>
                            <td className="p-2 border">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                    type.status === "Hoạt động" 
                                        ? "bg-green-100 text-green-800" 
                                        : "bg-yellow-100 text-yellow-800"
                                }`}>
                                    {type.status}
                                </span>
                            </td>
                            <td className="p-2 border">{type.total} xe</td>
                            <td className="p-2 border flex gap-2">
                                <Link
                                    to={`/admin/busType/edit/${type.id}`}
                                    className="bg-yellow-500 text-white py-2 px-3 rounded"
                                >
                                    <i className="fa-solid fa-pen-to-square text-md"></i>
                                </Link>
                                <button className="bg-red-500 text-white py-2 px-3 rounded">
                                    <i className="fa-solid fa-trash text-md"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}
export default BusTypeGetAll;
