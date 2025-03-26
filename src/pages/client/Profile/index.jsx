import Navbar from "../../../components/client/Navbar";

function Profile() {
    return (
        <main className="profile mt-[11%] mb-[1%] h-full">
            <div className="flex w-[80%] mx-auto ">
                <div className="w-[20%] bg-gray-100 p-3 rounded-md border border-gray-200 ">
                  <Navbar/>
                </div>
                <form className="w-[80%] bg-white p-5 rounded-md ml-4">
                    <div className="flex items-center gap-4 relative justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">Thông tin cá nhân</h1>
                            <p className="text-gray-600">Quản lý và cập nhật thông tin cá nhân của bạn.</p>
                        </div>
                        <label for="avatarInput" className="cursor-pointer">
                            <img src="/assets/images/main/avatar.jpg" alt="Avatar"
                                className="w-[100px] h-[100px] rounded-full border-4 border-orange-500" />
                            <input type="file" id="avatarInput"
                                className="opacity-0 absolute w-full h-full top-0 left-0 cursor-pointer" />
                        </label>
                    </div>

                    <div className="space-y-4 border-gray-300 mt-[2%] ">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                            <label className="font-medium w-1/5">Họ và tên</label>
                            <div className="flex items-center gap-2 w-4/5">
                                <input type="text" placeholder=""
                                    className="rounded-md p-2 w-full focus:ring-1 focus:ring-blue-500 border-gray-300" />
                                <i className="fas fa-pen text-gray-400"></i>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                            <label className="font-medium w-1/5">Password</label>
                            <div className="flex items-center gap-2 w-4/5">
                                <input type="password"  
                                    className="rounded-md p-2 w-full focus:ring-1 focus:ring-blue-500 border-gray-300" />
                                <i className="fas fa-pen text-gray-400"></i>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                            <label className="font-medium w-1/5">Địa chỉ email</label>
                            <div className="flex items-center gap-2 w-4/5">
                                <input type="email" value="duyenktbpc08750@gmail.com"
                                    className="rounded-md p-2 w-full focus:ring-1 focus:ring-blue-500 border-gray-300" />
                                <i className="fas fa-pen text-gray-400"></i>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                            <label className="font-medium w-1/5">Địa chỉ </label>
                            <div className="flex items-center gap-2 w-4/5">
                                <input type="text" value=""
                                    className="rounded-md p-2 w-full focus:ring-1 focus:ring-blue-500 border-gray-300" />
                                <i className="fas fa-pen text-gray-400"></i>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                            <label className="font-medium w-1/5">Số điện thoại</label>
                            <div className="flex items-center gap-2 w-4/5">
                                <input type="tel" placeholder="Nhập số điện thoại"
                                    className="rounded-md p-2 w-full focus:ring-1 focus:ring-blue-500 border-gray-300" />
                                <i className="fas fa-pen text-gray-400"></i>
                            </div>
                        </div>
                    </div>

                    <button className="bg-[#043175] text-white px-6 py-2 rounded mt-[1%]">Cập nhật </button>
                </form>
            </div>
        </main >
    )
}
export default Profile;