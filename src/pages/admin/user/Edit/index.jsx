import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const userData = [
    { ID: 1, fullName: "Dương Quốc Trọng", email: "trong@gmail.com", phone: "0987654321", role: "customer", status: 1 },
    { ID: 2, fullName: "Trần Thị B", email: "tranthib@gmail.com", phone: "0978123456", role: "admin", status: 0 },
];

function UserEdit(){
    const { id } = useParams();
    const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", role: "" });

    useEffect(() => {
        const userToEdit = userData.find(user => user.ID.toString() === id);
        if (userToEdit) {
            setFormData(userToEdit);
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
        console.log("Updated User Data:", formData);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Chỉnh sửa người dùng</h3>
                <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Họ và Tên</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Số điện thoại</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Vai trò</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="admin">Admin</option>
                            <option value="customer">Khách hàng</option>
                        </select>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Cập nhật người dùng</button>
                </form>
            </div>
        </div>
    );
}

export default UserEdit;