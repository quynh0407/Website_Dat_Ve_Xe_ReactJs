import {Link } from "react-router";
import { FaSave, FaTimes } from 'react-icons/fa';

function DiverCreate(){
    return(
        <>
         <div className="container mx-auto p-4">
            <div className="bg-white p-6 shadow rounded-md">
                <h2 className="text-xl font-bold mb-4">Thêm tài xế</h2>
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium">Họ và tên</label>
                            <input type="text" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Số điện thoại</label>
                            <input type="text" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Số GPLX</label>
                            <input type="text" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Loại GPLX</label>
                            <select className="w-full p-2 border rounded">
                                <option value="B1">B1</option>
                                <option value="B2" selected>B2</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Kinh nghiệm (năm)</label>
                            <input type="number" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Ngày sinh</label>
                            <select className="w-full p-2 border rounded">
                                {Array.from({ length: 100 }, (_, i) => (
                                    <option key={i} value={new Date().getFullYear() - i}>
                                        {new Date().getFullYear() - i}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Ngày thuê</label>
                            <input type="date" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Trạng thái</label>
                            <select className="w-full p-2 border rounded">
                                <option value="active" >Đang làm việc</option>
                                <option value="inactive">Tạm nghỉ</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Ảnh</label>
                            <input type="file" className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="mt-4 flex gap-2 justify-end">
                        <button type="submit" className="bg-[#073272] hover:bg-blue-950 text-white px-4 py-2 rounded flex justify-center align-items-center"> <FaSave className="mr-2" /> Thêm tài xế</button>
                        <Link to="/admin/driver/getAll" className="bg-gray-400 text-white px-4 py-2 rounded">Hủy</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default DiverCreate;