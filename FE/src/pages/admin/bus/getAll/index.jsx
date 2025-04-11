import { useState } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";

const busData = [
  { id: "1", licensePlate: "51A-12345", busType: "Xe giường nằm", driver: "Nguyễn Văn A", status: "Hoạt động" },
  { id: "2", licensePlate: "51B-67890", busType: "Xe ghế ngồi", driver: "Trần Văn B", status: "Bảo trì" },
  { id: "3", licensePlate: "79C-11223", busType: "Xe giường nằm", driver: "Phạm Văn C", status: "Hoạt động" },
  { id: "4", licensePlate: "30D-44556", busType: "Xe limousine", driver: "Lê Văn D", status: "Đang sửa chữa" },
  { id: "5", licensePlate: "60E-77889", busType: "Xe ghế ngồi", driver: "Đặng Văn E", status: "Hoạt động" },
];

function BusGetAll() {
  const [selectedBus, setSelectedBus] = useState(null);

  return (
    <div className="container mx-auto p-2">
      <div className="bg-white p-4 shadow rounded-md">
        <Link
          to="/admin/bus/create"
          className="inline-block bg-[#073272] text-white px-4 py-2 rounded"
        >
          + Thêm xe mới
        </Link>
        <table className="w-full border-collapse border border-gray-300 mt-3">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Biển số</th>
              <th className="p-2 border">Loại xe</th>
              <th className="p-2 border">Tài xế</th>
              <th className="p-2 border">Trạng thái</th>
              <th className="p-2 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {busData.map((bus) => (
              <tr key={bus.id} className="border-b">
                <td className="p-2 border">{bus.id}</td>
                <td className="p-2 border">{bus.licensePlate}</td>
                <td className="p-2 border">{bus.busType}</td>
                <td className="p-2 border">{bus.driver}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${bus.status === "Hoạt động"
                        ? "bg-green-100 text-green-800"
                        : bus.status === "Bảo trì"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                  >
                    {bus.status}
                  </span>
                </td>
                <td className="p-2 border flex gap-2">
                  <Link
                    to={`/admin/bus/edit/${bus.id}`}
                    className="bg-yellow-500 text-white py-2 px-3 rounded"
                  >
                    <i className="fa-solid fa-pen-to-square text-md"></i>
                  </Link>
                  <button
                    onClick={() => setSelectedBus(bus)}
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

      <FormDelete
        isOpen={!!selectedBus}
        onClose={() => setSelectedBus(null)}
        onConfirm={() => {
          console.log(`Đã xóa xe: ${selectedBus?.licensePlate}`);
          setSelectedBus(null);
        }}
        Id={selectedBus?.id}
        action={`/admin/bus/delete/${selectedBus?.id}`}
        message={`Bạn có chắc chắn muốn xóa xe "${selectedBus?.licensePlate}" không?`}
      />
    </div>
  );
}

export default BusGetAll;