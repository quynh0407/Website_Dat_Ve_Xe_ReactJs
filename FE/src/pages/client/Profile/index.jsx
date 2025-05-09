// import Navbar from "../../../components/client/Navbar";
// import axiosAdmin from '../../../apiRoutes/axiosAdmin';
// import { useState, useEffect } from "react";
// import Constants from "../../../Constants";
// import { Link } from "react-router-dom";
// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";
// import { toast } from "react-toastify";

// function Profile() {

//     return (
//         <main className="profile mt-[11%] mb-[1%] h-full">
//             <div className="flex w-[80%] mx-auto">
//                 <div className="w-[20%] bg-gray-100 p-3 rounded-md border border-gray-200">
//                     <Navbar />
//                 </div>

//                 <form className="w-[80%] bg-white p-5 rounded-md ml-4" onSubmit={handleSubmit}>
//                     <div className="flex items-center gap-4 relative justify-between">
//                         <div>
//                             <h1 className="text-3xl font-bold">Thông tin cá nhân</h1>
//                             <p className="text-gray-600">Quản lý và cập nhật thông tin cá nhân của bạn.</p>
//                         </div>

//                         <label htmlFor="avatarInput" className="cursor-pointer relative">
//                             <img
//                                 src={`${Constants.DOMAIN_API}/${profileData.image}`}
//                                 alt="Ảnh đại diện"
//                                 className="w-24 h-24 rounded-full object-cover"
//                             />
//                             <input
//                                 type="file"
//                                 id="avatarInput"
//                                 className="opacity-0 absolute w-full h-full top-0 left-0 cursor-pointer"
//                                 onChange={handleImageChange}
//                             />
//                         </label>
//                     </div>

//                     <div className="space-y-4 border-gray-300 mt-[2%]">
//                         <div className="flex justify-between items-center border-b border-gray-300 pb-2">
//                             <label className="font-medium w-1/5">Họ và tên</label>
//                             <div className="flex items-center gap-2 w-4/5">
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     value={profileData.fullName}
//                                     onChange={handleInputChange}
//                                     className="rounded-md p-2 w-full focus:ring-1 focus:ring-blue-500 border-gray-300"
//                                 />
//                                 <i className="fas fa-pen text-gray-400"></i>
//                             </div>
//                         </div>

//                         <div className="flex justify-between items-center border-b border-gray-300 pb-2">
//                             <label className="font-medium w-1/5">Password</label>
//                             <div className="flex items-center gap-2 w-4/5">
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     value={profileData.password}
//                                     onChange={handleInputChange}
//                                     className="rounded-md p-2 w-full focus:ring-1 focus:ring-blue-500 border-gray-300"
//                                 />
//                                 <i className="fas fa-pen text-gray-400"></i>
//                             </div>
//                         </div>

//                         <div className="flex justify-between items-center border-b border-gray-300 pb-2">
//                             <label className="font-medium w-1/5">Địa chỉ email</label>
//                             <div className="flex items-center gap-2 w-4/5">
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={profileData.email}
//                                     onChange={handleInputChange}
//                                     className="rounded-md p-2 w-full focus:ring-1 focus:ring-blue-500 border-gray-300"
//                                 />
//                                 <i className="fas fa-pen text-gray-400"></i>
//                             </div>
//                         </div>

//                         <div className="flex justify-between items-center border-b border-gray-300 pb-2">
//                             <label className="font-medium w-1/5">Số điện thoại</label>
//                             <div className="flex items-center gap-2 w-4/5">
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     value={profileData.phone}
//                                     onChange={handleInputChange}
//                                     className="rounded-md p-2 w-full focus:ring-1 focus:ring-blue-500 border-gray-300"
//                                 />
//                                 <i className="fas fa-pen text-gray-400"></i>
//                             </div>
//                         </div>
//                     </div>

//                     <button className="bg-[#043175] text-white px-6 py-2 rounded mt-[1%]">Cập nhật</button>
//                 </form>
//             </div>
//         </main>
//     );
// }

// export default Profile;
