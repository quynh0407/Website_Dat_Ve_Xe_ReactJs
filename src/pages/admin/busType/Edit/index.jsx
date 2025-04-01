import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import { useForm } from "react-hook-form";

const busTypesData = [
  { id: "1", name: "Xe giường nằm VIP", status: "active" },
  { id: "2", name: "Xe ghế ngồi", status: "active" },
  { id: "3", name: "Xe limousine", status: "maintenance" },
];

function BusTypeEdit() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors }
  } = useForm({
    mode: "onChange"
  });


  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", status: "" });

  useEffect(() => {
    const busTypeToEdit = busTypesData.find(bus => bus.id === id);
    if (busTypeToEdit) {
      setFormData(busTypeToEdit);
      setValue("name", busTypeToEdit.name); 
      setValue("status", busTypeToEdit.status);
    }
  }, [id, setValue]);

  const onSubmit = (data) => console.log("Cập nhật dữ liệu", data);

  const handleChange = async (fieldName) => {
    await trigger(fieldName);

  };



  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Chỉnh sửa loại xe</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">
                Tên loại xe <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                ${errors.name ? '!border-red-500' : 'border-gray-300'}`}
                {...register("name", {
                  required: "Vui lòng nhập loại xe"
                })}
                onChange={(e) => {
                  setValue("name", e.target.value);
                  handleChange("name");
                }}
              />
              {errors.name && <p className="text-red-700">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">
                Trạng thái
              </label>
              <select className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
              ${errors.status ? '!border-red-500' : 'border-gray-300'}`}
              {...register("status", {required: "Vui lòng chọn trạng thái " })}
              onChange={(e) => {
                setValue("status", e.target.value);
                handleChange("status");
              }}>
                <option value="">----Chọn trạng thái----</option>
                <option value="active">Hoạt động</option>
                <option value="maintenance">Bảo trì</option>
                <option value="inactive">Ngừng hoạt động</option>
              </select>
              {errors.status && <p className="text-red-700">{errors.status.message}</p>}
            </div>
          </div>

          <div className="flex justify-end mt-6 space-x-4 border-t pt-4">
            <button
              type="submit"
              className="flex items-center px-5 py-2.5 bg-[#073272] text-white rounded-md hover:bg-blue-900 transition-colors"
            >
              <FaSave className="mr-2" /> Cập nhật
            </button>
            <Link to="/admin/busType/getAll" className="bg-gray-400 text-white px-4 py-2 rounded">Hủy</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusTypeEdit;