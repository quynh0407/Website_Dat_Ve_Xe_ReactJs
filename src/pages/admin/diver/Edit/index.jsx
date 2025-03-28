import { Link } from "react-router";
import { FaSave, FaCamera } from 'react-icons/fa';

export default function DriverEditForm() {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 shadow rounded-md">
                <h2 className="text-xl font-bold mb-4">Chỉnh sửa tài xế</h2>
                <form>

                <div className="relative w-40 h-40 mx-auto">
                            <label className="block mb-1 font-bold text-gray-600 text-center">Ảnh đại diện</label>
                            <img src="https://media-public.canva.com/g5u4I/MAGCJZg5u4I/1/t.png" className="w-full h-full object-cover border rounded-full" />
                            <label className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full cursor-pointer">
                                <FaCamera className="text-white" />
                                <input type="file" className="opacity-0 visually-hidden"/>
                            </label>
                        </div>

                    <div className="grid mt-5 grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1  ">Họ và tên</label>
                            <input type="text" className="w-full p-2 border rounded" defaultValue="Nguyễn Văn A" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Số điện thoại</label>
                            <input type="text" className="w-full p-2 border rounded" defaultValue="0987654321" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Số GPLX</label>
                            <input type="text" className="w-full p-2 border rounded" defaultValue="79A-12345" />
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
                            <input type="number" className="w-full p-2 border rounded" defaultValue="5" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Ngày sinh</label>
                            <select className="w-full p-2 border rounded">
                                {Array.from({ length: 100 }, (_, i) => {
                                    const year = new Date().getFullYear() - i;
                                    return <option key={i} value={year} selected={year === 1990}>{year}</option>;
                                })}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Ngày thuê</label>
                            <input type="date" className="w-full p-2 border rounded" defaultValue="2022-05-15" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Trạng thái</label>
                            <select className="w-full p-2 border rounded">
                                <option value="active" selected>Đang làm việc</option>
                                <option value="inactive">Tạm nghỉ</option>
                            </select>
                        </div>

                    </div>
                    <div className="mt-4 flex gap-2 justify-end ">
                        <button type="submit" className="bg-[#073272] hover:bg-blue-950 text-white px-4 py-2 rounded flex justify-center align-items-center"> <FaSave className="mr-2" /> Lưu thay đổi</button>
                        <Link to="/admin/driver/getAll" className="bg-gray-400 text-white px-4 py-2 rounded">Hủy</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}