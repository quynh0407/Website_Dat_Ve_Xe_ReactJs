import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingDetail from "../BookingHistory/bookingDetail"
import { useMediaQuery } from 'react-responsive';
import { X } from 'lucide-react';


function ManageBooking() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const handleManageBooking = async (bookingId) => {
        if (isMobile) {
            navigate(`/lich-su-dat-ve/${bookingId}`);
        } else {
            setShowDetail(true);
            setSelectedBooking(bookingId);
        }
    }
    return (
        <>
            <main className="flex lg:items-center lg:justify-center lg:h-screen">
                <div className="w-[90%]  lg:max-w-md  bg-white p-9 my-[50px]  rounded-xl shadow-xl mx-auto">
                    <form action="" onSubmit={handleSubmit(() => handleManageBooking(1))}>
                        <h1 className="text-[#031f4d] text-center !text-2xl  ">TRA CỨU THÔNG TIN ĐẶT VÉ</h1>
                        <div className="pt-4 py-2">
                            <div className="relative font-[Segoe UI]">
                                <input
                                    type="text"
                                    pattern=".*\S.*"
                                    autoComplete="off"
                                    className="peer w-full p-2 border-[1px] border-gray-200 bg-transparent rounded-md outline-none focus:border-indigo-400"
                                    placeholder=""
                                    {...register("phone", {
                                        required: "Vui lòng nhập số điện thoại",
                                        pattern: {
                                            value: /^(0|\+84)[0-9]{9}$/,
                                            message: "Số điện thoại không hợp lệ",
                                        },
                                    })}
                                />
                                <label
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 transition-all 
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 
        peer-focus:top-1 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1
        peer-valid:top-1 peer-valid:text-sm peer-valid:bg-white peer-valid:px-1"
                                >
                                    Số điện thoại
                                </label>
                            </div>
                            {errors.phone && (
                                <small className="text-red-600">{errors.phone.message}</small>
                            )}
                        </div>

                        <div className="py-3">
                            <div className="relative font-[Segoe UI]">
                                <input
                                    type="text" 
                                    pattern=".*\S.*"
                                    autoComplete="off"
                                    className="peer w-full p-2 border-[1px] border-gray-200 bg-transparent rounded-md outline-none focus:border-indigo-400"
                                    placeholder=""
                                    {...register("codeTicket", {
                                        required: "Vui lòng nhập mã vé",
                                    })}
                                />
                                <label
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 transition-all 
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 
        peer-focus:top-1 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1
        peer-valid:top-1 peer-valid:text-sm peer-valid:bg-white peer-valid:px-1"
                                >
                                    Mã vé
                                </label>
                            </div>
                            {errors.codeTicket && (
                                <small className="text-red-600">{errors.codeTicket.message}</small>
                            )}
                        </div>



                        <button
                            type="submit"
                            className="w-full bg-[#043175] text-white py-2 rounded-lg hover:bg-[#031f4d] transition-colors"
                        >
                            Tra cứu
                        </button>
                    </form>

                </div>

            </main>
            {showDetail && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="relative bg-white rounded-lg max-w-3xl w-full">
                        <button
                            className="absolute top-2 right-2 text-red-600 font-bold"
                            onClick={() => setShowDetail(false)}
                        >
                            <X size={24} />
                        </button>
                        <BookingDetail bookingId={selectedBooking} />
                    </div>
                </div>
            )}
        </>);
}

export default ManageBooking;
