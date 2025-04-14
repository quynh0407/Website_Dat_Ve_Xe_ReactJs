import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";
import axios from "axios";
import { useState, useEffect } from "react";
import Constants from "../../../../Constants.jsx";

function BusGetAll() {
  const [selectedBus, setSelectedBus] = useState(null);

  const [busTypes, setBusTypes] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getData();
    getBusTypes();
    getDrivers();
  }, []);

  const getBusTypes = async () => {
    try {
      const res = await axios.get(`${Constants.DOMAIN_API}/admin/busType/list`);
      setBusTypes(res.data.data);
    } catch (err) {
      console.log("Lỗi khi lấy loại xe", err);
    }
  };

  const getDrivers = async () => {
    try {
      const res = await axios.get(`${Constants.DOMAIN_API}/admin/driver/list`);
      setDrivers(res.data.data);
    } catch (err) {
      console.log("Lỗi khi lấy tài xế", err);
    }
  };

  const getBusTypeName = (id) => {
    const type = busTypes.find(bt => bt.id === id);
    return type ? type.typeName : "Không xác định";
  };

  const getDriverName = (id) => {
    const driver = drivers.find(d => d.id === id);
    return driver ? driver.fullName : "Không xác định";
  };


  const [busData, setBussData] = useState([]);

  const deleteBus = async () => {
    if (!selectedBus) return;
    try {
      await axios.delete(`${Constants.DOMAIN_API}/admin/bus/delete/${selectedBus.id}`);
      alert("Xóa thành công");
      setSelectedBus(null);
      getData();
    } catch (error) {
      console.error("Lỗi khi xóa:", error);
      alert("Xóa thất bại");
    }
  };
  
  const getData = async () => {
    try {
      const res = await axios.get(`${Constants.DOMAIN_API}/admin/bus/list`);
      console.log('Response', res.data.data);

      setBussData(res.data.data);
    } catch (err) {
      console.log("Error", err);
    }
  }

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
              <th className="p-2 border">Sô ghế</th>
              <th className="p-2 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {busData.map((value, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 border">{value.id}</td>
                <td className="p-2 border">{value.plateNumber}</td>
                <td className="p-2 border">{getBusTypeName(value.busTypeId)}</td>
                <td className="p-2 border">{getDriverName(value.driverId)}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${value.status === "Hoạt động"
                      ? "bg-green-100 text-green-800"
                      : value.status === "Bảo trì"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-orange-100 text-orange-800"
                      }`}
                  >
                    {value.status}
                  </span>
                </td>
                <td className="p-2 border">{value.totalSeats}</td>
                <td className="p-2 border flex gap-2">
                  <Link
                    to={`/admin/bus/edit/${value.id}`}
                    className="bg-yellow-500 text-white py-2 px-3 rounded"
                  >
                    <i className="fa-solid fa-pen-to-square text-md"></i>
                  </Link>
                  <button
                    onClick={() => setSelectedBus(value)}
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

      {selectedBus && (
        <FormDelete
          isOpen={true}
          onClose={() => setSelectedBus(null)}
          onConfirm={deleteBus}
          message={`Bạn có chắc chắn muốn xóa loại xe "${selectedBus.fullName}" không?`}
        />
      )}
    </div>
  );
}

export default BusGetAll;