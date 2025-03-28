import { useState } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";

const driversData = [
    {
        id: "1",
        fullName: "Nguyễn Văn A",
        phone: "0901234567",
        licenseNumber: "79A-12345",
        licenseType: "B2",
        experienceYears: 5,
        birthDate: "1990",
        hireDate: "2020-06-20",
        status: "Đang làm việc",
        imagePath: "https://media-public.canva.com/mDo-I/MAGCJcmDo-I/1/t.png"
    },
    {
        id: "2",
        fullName: "Trần Thị B",
        phone: "0912345678",
        licenseNumber: "30B-67890",
        licenseType: "C",
        experienceYears: 8,
        birthDate: "1985",
        hireDate: "2015-03-15",
        status: "Tạm nghỉ",
        imagePath: "https://media-public.canva.com/g5u4I/MAGCJZg5u4I/1/t.png"
    }
];

export default function DriverGetAll() {
    const [selectedDriver, setSelectedDriver] = useState(null);

    return (
        <div className="mx-auto p-4">
            <div className="bg-white p-4 shadow rounded-md">
                <Link to="/admin/driver/create" className="inline-block bg-[#073272] text-white px-4 py-2 rounded">
                    Thêm tài xế
                </Link>
                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">#</th>
                            <th className="p-2 border">Ảnh</th>
                            <th className="p-2 border">Họ và tên</th>
                            <th className="p-2 border">Số điện thoại</th>
                            <th className="p-2 border">Số GPLX</th>
                            <th className="p-2 border">Loại GPLX</th>
                            <th className="p-2 border">Kinh nghiệm (năm)</th>
                            <th className="p-2 border">Ngày sinh</th>
                            <th className="p-2 border">Ngày thuê</th>
                            <th className="p-2 border">Trạng thái</th>
                            <th className="p-2 border">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {driversData.map((driver, index) => (
                            <tr key={driver.id} className="border-b">
                                <td className="p-2 border text-center">{index + 1}</td>
                                <td className="p-2 border text-center">
                                    <img src={driver.imagePath} className="w-10 h-10 rounded-full" />
                                </td>
                                <td className="p-2 border">{driver.fullName}</td>
                                <td className="p-2 border">{driver.phone}</td>
                                <td className="p-2 border">{driver.licenseNumber}</td>
                                <td className="p-2 border">{driver.licenseType}</td>
                                <td className="p-2 border text-center">{driver.experienceYears}</td>
                                <td className="p-2 border">{driver.birthDate}</td>
                                <td className="p-2 border">{driver.hireDate}</td>
                                <td className="p-2 border">{driver.status}</td>
                                <td className="p-2 border flex gap-2">
                                    <Link to={`/admin/driver/edit/${driver.id}`} className="bg-yellow-500 text-white py-2 px-3 rounded">
                                        <i className="fa-solid fa-pen-to-square text-md"></i>
                                    </Link>
                                    <button onClick={() => setSelectedDriver(driver)} className="bg-red-500 text-white py-2 px-3 rounded">
                                        <i className="fa-solid fa-trash text-md"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        
            <FormDelete
                isOpen={!!selectedDriver}
                onClose={() => setSelectedDriver(null)}
                onConfirm={() => {
                    setSelectedDriver(null);
                }}
                message={`Bạn có chắc chắn muốn xóa tài xế "${selectedDriver?.fullName}" không?`}
            />
        </div>
    );
}
