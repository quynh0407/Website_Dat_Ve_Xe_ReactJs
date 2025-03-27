import { FaSave, FaTimes } from 'react-icons/fa';

function BusTypeEdit() {
  const busTypeData = {
    id: 1,
    name: "Xe giường nằm VIP",
    status: "active",
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Chỉnh sửa loại xe</h1>
        
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           

            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">
                Tên loại xe <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={busTypeData.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Nhập tên loại xe"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">
                Trạng thái
              </label>
              <select 
                defaultValue={busTypeData.status}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="active">Hoạt động</option>
                <option value="maintenance">Bảo trì</option>
                <option value="inactive">Ngừng hoạt động</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6 space-x-4 border-t pt-4">
       
            <button
              type="submit"
              className="flex items-center px-5 py-2.5 bg-[#073272] text-white rounded-md hover:bg-blue-900 transition-colors"
            >
              <FaSave className="mr-2" /> Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusTypeEdit;