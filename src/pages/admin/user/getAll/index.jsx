import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";
import { useState } from "react";

const userData = [
    { ID: 1, fullName: "Dương Quốc Trọng", email: "trong@gmail.com", phone: "0987654321", role: "customer", status: 1 },
    { ID: 2, fullName: "Trần Thị B", email: "tranthib@gmail.com", phone: "0978123456", role: "admin", status: 0 },
];




function UserGetAll() {

    const [selectedUse, setSelectedUse] = useState(null);
    const [routes, setRoutes] = useState(userData);

    const handleDelete = () => {
        setRoutes(routes.filter((route) => route.id !== selectedUse.id));
        setSelectedUse(null);
    };
    return (
        <div className="container mx-auto p-2">
            <div className="bg-white p-4 shadow rounded-md">
                <Link
                    to="/admin/user/create"
                    className="inline-block bg-[#073272] text-white px-4 py-2 rounded"
                >
                    Thêm người dùng
                </Link>
                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">ID</th>
                            <th className="p-2 border">Họ và tên</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Số điện thoại</th>
                            <th className="p-2 border">Vai trò</th>
                            <th className="p-2 border">Trạng thái</th>
                            <th className="p-2 border">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user) => (
                            <tr key={user.ID} className="border-b">
                                <td className="p-2 border">{user.ID}</td>
                                <td className="p-2 border">{user.fullName}</td>
                                <td className="p-2 border">{user.email}</td>
                                <td className="p-2 border">{user.phone}</td>
                                <td className="p-2 border">{user.role === 'admin' ? "Quản trị viên" : "Khách hàng"}</td>
                                <td className="p-2 border">
                                    <span className={`px-2 py-1 rounded-full text-xs ${user.status === 1
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                        }`}>
                                        {user.status === 1 ? "Hoạt động" : "Bị khóa"}
                                    </span>
                                </td>
                                <td className="p-2 border flex gap-2">
                                    <Link
                                        to={`/admin/user/edit/${user.ID}`}
                                        className="bg-yellow-500 text-white py-2 px-3 rounded"
                                    >
                                        <i className="fa-solid fa-pen-to-square text-md"></i>
                                    </Link>
                                    <button onClick={() => setSelectedUse(user)} className="bg-red-500 text-white py-2 px-3 rounded">
                                        <i className="fa-solid fa-trash text-md"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {selectedUse && (
                    <FormDelete
                        isOpen={!!selectedUse}
                        onClose={() => setSelectedUse(null)}
                        onConfirm={handleDelete}
                        Id={selectedUse?.ID}
                        action={`/admin/user/delete/${selectedUse?.ID}`}
                        message={`Bạn có chắc chắn muốn xóa tài khoản "${selectedUse.fullName}" không?`}
                    />
                )}
            </div>
        </div>
    )
}
export default UserGetAll;