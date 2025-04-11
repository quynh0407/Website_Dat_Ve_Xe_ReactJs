import { FaSave, FaTimes } from 'react-icons/fa';
import {Link } from "react-router";
import { useForm } from "react-hook-form";

function BusTypeCreate() {
  const {
          register,
          handleSubmit,
          formState: { errors }
      } = useForm();
  
      const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Thêm loại xe</h1>
        
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
                  required: "Vui lòng nhập loại xe" })}
                placeholder="Nhập tên loại xe"
              />
              {errors.name && <p className="text-red-700">{errors.name.message}</p>}
            </div>



            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">
                Trạng thái
              </label>
              <select className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
              ${errors.status ? '!border-red-500' : 'border-gray-300'}`}
              {...register("status", {required: "Vui lòng chọn trạng thái " })}>
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
              <FaSave className="mr-2" /> Lưu lại
            </button>
            <Link to="/admin/busType/getAll" className="bg-gray-400 text-white px-4 py-2 rounded">Hủy</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusTypeCreate;
