import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import axios from "axios";
import useMapbox from "../../../../hooks/mapbox";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import MapPreview from "../../../../components/mapView";
import Constants from '../../../../Constants';
import 'mapbox-gl/dist/mapbox-gl.css';
import Select from 'react-select';
import axiosAdmin from '../../../../apiRoutes/axiosAdmin.js';

const URL = Constants.DOMAIN_API;
const ENDPOINT = `admin/routes`;
const accessToken = "pk.eyJ1IjoiYmFvZHV5ZW4xMjMiLCJhIjoiY205NWRnenRmMHh0ZDJpcjQ4a2Y2ZzRhaSJ9.w70EOHntFvOVf6uE2rIahQ";

function RoutesCreate() {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const id = queryParams.get("id");
    const [startFull, setStartFull] = useState("");
    const [endFull, setEndFull] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const [provinces, setProvinces] = useState([]);
    const [startDistricts, setStartDistricts] = useState([]);
    const [startWards, setStartWards] = useState([]);
    const [endDistricts, setEndDistricts] = useState([]);
    const [endWards, setEndWards] = useState([]);
    const { getDistance } = useMapbox();

    const startProvince = watch("startProvince");
    const startDistrict = watch("startDistrict");
    const startWard = watch("startWard");
    const endProvince = watch("endProvince");
    const endDistrict = watch("endDistrict");
    const endWard = watch("endWard");

    const [startLocation, setStartLocation] = useState(null);
    const [endLocation, setEndLocation] = useState(null);


    const getProvinceName = (list, id) => {
        const item = list.find(i => i.ProvinceID == id);
        return item?.ProvinceName || '';
    };

    const getDistrictName = (list, id) => {
        const item = list.find(i => i.DistrictID == id);
        return item?.DistrictName || '';
    };

    const getWardName = (list, id) => {
        const item = list.find(i => i.WardCode == id);
        return item?.WardName || '';
    };

    // ----------------[ Chuyen du lieu sang option của react ]---------------------

    const provinceOptions = provinces.map((p) => ({
        value: p.ProvinceID,
        label: p.ProvinceName
    }));

    const startDistrictOptions = startDistricts.map((d) => ({
        value: d.DistrictID,
        label: d.DistrictName
    }));

    const startWardOptions = startWards.map((w) => ({
        value: w.WardCode,
        label: w.WardName
    }));

    const endProvinceOptions = provinces.map((p) => ({
        value: p.ProvinceID,
        label: p.ProvinceName
    }));

    const endDistrictOptions = endDistricts.map((d) => ({
        value: d.DistrictID,
        label: d.DistrictName
    }));

    const endWardOptions = endWards.map((w) => ({
        value: w.WardCode,
        label: w.WardName
    }));

    //-------------------[ Set dulieu ra value giao dien ]----------------------
    const getCurrentStartProvince = () => {
        return provinceOptions.find(option => option.value === startProvince);
    };

    const getCurrentStartDistrict = () => {
        return startDistrictOptions.find(option => option.value === startDistrict);
    };

    const getCurrentStartWard = () => {
        return startWardOptions.find(option => String(option.value) === String(startWard));
    };

    const getCurrentEndProvince = () => {
        return endProvinceOptions.find(option => option.value === endProvince);
    };

    const getCurrentEndDistrict = () => {
        return endDistrictOptions.find(option => option.value === endDistrict);
    };

    const getCurrentEndWard = () => {
        return endWardOptions.find(option => String(option.value) === String(endWard));
    };

    // Tải tỉnh/thành
    useEffect(() => {
        const fetchProvinces = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${URL}/apiRoutes/provinces`);
                setProvinces(res.data);

                if (id) {
                    await getUseInfo(res.data);
                }
            } catch (error) {
                console.error(error);
                toast.error("Lỗi khi tải danh sách tỉnh/thành");
            } finally {
                setLoading(false);
            }
        };

        fetchProvinces();
    }, [id]);

    // Tải quận/huyện 
    useEffect(() => {
        const fetchDistricts = async () => {
            if (startProvince) {
                try {
                    const res = await axios.get(`${URL}/apiRoutes/districts?provinceId=${startProvince}`);
                    setStartDistricts(res.data);
                    setStartWards([]);
                    setValue("startDistrict", "");
                    setValue("startWard", "");
                } catch (error) {
                    console.error("Error fetching districts:", error);
                    toast.error("Lỗi khi tải danh sách quận/huyện");
                }
            }
        };

        fetchDistricts();
    }, [startProvince]);

    // Tải xã/phường 
    useEffect(() => {
        const fetchWards = async () => {
            if (startDistrict) {
                try {
                    const res = await axios.get(`${URL}/apiRoutes/wards?districtId=${startDistrict}`);
                    setStartWards(res.data);
                    setValue("startWard", "");
                } catch (error) {
                    console.error(error);
                    toast.error("Lỗi khi tải danh sách xã/phường");
                }
            }
        };

        fetchWards();
    }, [startDistrict]);

    // Tải quận/huyện 
    useEffect(() => {
        const fetchDistricts = async () => {
            if (endProvince) {
                try {
                    const res = await axios.get(`${URL}/apiRoutes/districts?provinceId=${endProvince}`);
                    setEndDistricts(res.data);
                    setEndWards([]);
                    setValue("endDistrict", "");
                    setValue("endWard", "");
                } catch (error) {
                    console.error(error);
                    toast.error("Lỗi khi tải danh sách quận/huyện");
                }
            }
        };

        fetchDistricts();
    }, [endProvince]);

    // Tải xã/phường 
    useEffect(() => {
        const fetchWards = async () => {
            if (endDistrict) {
                try {
                    const res = await axios.get(`${URL}/apiRoutes/wards?districtId=${endDistrict}`);
                    setEndWards(res.data);
                    setValue("endWard", "");
                } catch (error) {
                    console.error(error);
                    toast.error("Lỗi khi tải danh sách xã/phường");
                }
            }
        };

        fetchWards();
    }, [endDistrict]);

    //---------------------[ Tính toán khoảng cách và thời gian ]---------------------------------
    useEffect(() => {
        const calculateDistance = async () => {
            if (startProvince && startDistrict && startWard && endProvince && endDistrict && endWard) {
                try {
                    const startFull = `${getProvinceName(provinces, startProvince)},${getDistrictName(startDistricts, startDistrict)},${getWardName(startWards, startWard)}`;
                    const endFull = `${getProvinceName(provinces, endProvince)},${getDistrictName(endDistricts, endDistrict)},${getWardName(endWards, endWard)}`;

                    setStartFull(startFull);
                    setEndFull(endFull);

                    const result = await getDistance(startFull, endFull);
                    if (result) {
                        setValue("distance", result.km);
                        setValue("time", result.hours);
                    }
                } catch (error) {
                    console.error("Error calculating distance:", error);
                    toast.error("Lỗi khi tính toán khoảng cách");
                }
            }
        };

        calculateDistance();
    }, [startProvince, startDistrict, startWard, endProvince, endDistrict, endWard]);

    //--------------------[ Hàm tải thông tin route  ]--------------------------

    const getUseInfo = async (provincesData) => {
        try {
            setLoading(true);
            const res = await axiosAdmin.get(`${URL}/${ENDPOINT}/getId/?id=${id}`);
            const data = res.data.data;

            setValue("startProvince", data.startProvinceID);
            setValue("endProvince", data.endProvinceID);

            if (data.startProvinceID) {
                const districtsRes = await axiosAdmin.get(`${URL}/apiRoutes/districts?provinceId=${data.startProvinceID}`);
                const districtsData = districtsRes.data;
                setStartDistricts(districtsData);

                await new Promise(resolve => setTimeout(resolve, 100));
                setValue("startDistrict", data.startDistrictID);

                if (data.startDistrictID) {
                    const wardsRes = await axiosAdmin.get(`${URL}/apiRoutes/wards?districtId=${data.startDistrictID}`);
                    const wardsData = wardsRes.data;
                    setStartWards(wardsData);

                    await new Promise(resolve => setTimeout(resolve, 100));
                    setValue("startWard", data.startWardID);
                }
            }

            // Tải và đặt giá trị quận/huyện và xã/phường cho điểm đến
            if (data.endProvinceID) {
                const districtsRes = await axiosAdmin.get(`${URL}/apiRoutes/districts?provinceId=${data.endProvinceID}`);
                const districtsData = districtsRes.data;
                setEndDistricts(districtsData);

                await new Promise(resolve => setTimeout(resolve, 100));
                setValue("endDistrict", data.endDistrictID);

                if (data.endDistrictID) {
                    const wardsRes = await axiosAdmin.get(`${URL}/apiRoutes/wards?districtId=${data.endDistrictID}`);
                    const wardsData = wardsRes.data;
                    setEndWards(wardsData);

                    await new Promise(resolve => setTimeout(resolve, 100));
                    setValue("endWard", data.endWardID);
                }
            }

            setValue("distance", data.distance);
            setValue("time", data.time);

            // Cập nhật địa chỉ đầy đủ 
            setTimeout(() => {
                const startProvinceName = getProvinceName(provincesData, data.startProvinceID);
                const startDistrictName = getDistrictName(startDistricts, data.startDistrictID);
                const startWardName = getWardName(startWards, data.startWardID);

                const endProvinceName = getProvinceName(provincesData, data.endProvinceID);
                const endDistrictName = getDistrictName(endDistricts, data.endDistrictID);
                const endWardName = getWardName(endWards, data.endWardID);

                setStartFull(`${startProvinceName},${startDistrictName},${startWardName}`);
                setEndFull(`${endProvinceName},${endDistrictName},${endWardName}`);
            }, 300);
        } catch (err) {
            console.error("Error fetching route info:", err);
            toast.error("Lỗi khi tải thông tin tuyến đường");
        } finally {
            setLoading(false);
        }
    };
    //---------------------------------[ CREATE & UPDATE ]--------------------------------
    const handleCreate = async (data) => {
        try {
            setLoading(true);

            const startProvinceName = getProvinceName(provinces, data.startProvince);
            const startDistrictName = getDistrictName(startDistricts, data.startDistrict);
            const startWardName = getWardName(startWards, data.startWard);

            const endProvinceName = getProvinceName(provinces, data.endProvince);
            const endDistrictName = getDistrictName(endDistricts, data.endDistrict);
            const endWardName = getWardName(endWards, data.endWard);

            const formData = {
                startProvinceID: data.startProvince,
                startDistrictID: data.startDistrict,
                startWardID: data.startWard,
                endProvinceID: data.endProvince,
                endDistrictID: data.endDistrict,
                endWardID: data.endWard,
                distance: data.distance,
                time: data.time,
                startPoint: `${startProvinceName},${startDistrictName},${startWardName}`,
                endPoint: `${endProvinceName},${endDistrictName},${endWardName}`,
            };

            if (id) {
                await axiosAdmin.patch(`${URL}/${ENDPOINT}/update/${id}`, formData);
                toast.success("Cập nhật tuyến đường thành công");
            } else {
                await axiosAdmin.post(`${URL}/${ENDPOINT}/add`, formData);
                toast.success("Tạo tuyến đường thành công");
            }
            navigate('/admin/routes/getAll');
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Có lỗi xảy ra khi lưu tuyến đường");
        } finally {
            setLoading(false);
        }
    };
    //---------------0------------[ MAP VIEWS ]---------------------------------
    const getCoordinates = async (address) => {
        try {
            if (!address || !accessToken) {
                throw new Error("Địa chỉ hoặc token không hợp lệ");
            }

            const response = await axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`,
                {
                    params: {
                        access_token: accessToken,
                        limit: 1,
                        country: 'VN' // Giới hạn tìm kiếm trong Việt Nam
                    }
                }
            );

            const features = response.data.features;

            if (!features || features.length === 0) {
                throw new Error(`Không tìm thấy tọa độ cho địa chỉ: ${address}`);
            }

            const [lng, lat] = features[0].center;
            return [lng, lat];
        } catch (error) {
            console.error("Lỗi khi lấy tọa độ:", error.message);
            toast.error(`Không thể lấy tọa độ: ${error.message}`);
            return null;
        }
    };

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (startFull && endFull) {
                try {
                    setLoading(true);
                    const [startCoords, endCoords] = await Promise.all([
                        getCoordinates(startFull),
                        getCoordinates(endFull),
                    ]);

                    if (startCoords && endCoords) {
                        setStartLocation(startCoords);
                        setEndLocation(endCoords);
                    }
                } catch (err) {
                    console.error("Lỗi khi lấy tọa độ:", err);
                } finally {
                    setLoading(false);
                }
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [startFull, endFull]);


    if (loading) {
        return <div className="flex justify-center items-center h-64">Đang tải dữ liệu...</div>;
    }

    return (
        <main className="flex-1 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl text-gray-800 font-bold mb-8 mt-2">Thông tin tuyến đường</h2>
            <form onSubmit={handleSubmit(handleCreate)} className="space-y-8">
                <div>
                    <label className="text-gray-600 block font-bold text-xl">Điểm xuất phát</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                        <div>
                            <label className="block mb-2">Tỉnh/Thành phố</label>
                            <Select
                                options={provinceOptions}
                                onChange={(selectedOption) => setValue("startProvince", selectedOption?.value)}
                                className="react-select-container"
                                value={getCurrentStartProvince()}
                                classNamePrefix="react-select"
                                placeholder="Chọn Tỉnh/Thành phố"
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        padding: '2px',
                                        borderRadius: '0.5rem',
                                        borderColor: errors.startProvince ? 'red' : '#d1d5db',
                                        boxShadow: errors.startProvince ? '0 0 0 2px rgba(239,68,68,0.5)' : 'none'
                                    }),
                                }}
                            />
                            {errors.startProvince && <p className="text-red-500 mt-1 text-sm">Vui lòng chọn tỉnh thành.</p>}
                        </div>

                        <div>
                            <label className="block mb-2">Quận/Huyện</label>
                            <Select
                                options={startDistrictOptions}
                                onChange={(selectedOption) => setValue("startDistrict", selectedOption?.value)}
                                className="react-select-container"
                                value={getCurrentStartDistrict()}
                                classNamePrefix="react-select"
                                placeholder="Chọn Quận/Huyện"
                                isDisabled={!startDistricts.length}
                                isClearable
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        padding: '2px',
                                        borderRadius: '0.5rem',
                                        borderColor: errors.startDistrict ? 'red' : '#d1d5db',
                                        boxShadow: errors.startDistrict ? '0 0 0 2px rgba(239,68,68,0.5)' : 'none'
                                    }),
                                }}
                            />
                            {errors.startDistrict && <p className="text-red-500 mt-1 text-sm">Vui lòng chọn quận huyện.</p>}
                        </div>

                        <div>
                            <label className="block mb-2">Xã/Phường</label>
                            <Select
                                options={startWardOptions}
                                onChange={(selectedOption) => setValue("startWard", selectedOption?.value)}
                                className="react-select-container"
                                value={getCurrentStartWard()}
                                classNamePrefix="react-select"
                                placeholder="Chọn Xã/Phường"
                                isDisabled={!startWards.length}
                                isClearable
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        padding: '2px',
                                        borderRadius: '0.5rem',
                                        borderColor: errors.startWard ? 'red' : '#d1d5db',
                                        boxShadow: errors.startWard ? '0 0 0 2px rgba(239,68,68,0.5)' : 'none'
                                    }),
                                }}
                            />
                            {errors.startWard && <p className="text-red-500 mt-1 text-sm">Vui lòng chọn xã phường.</p>}
                        </div>
                    </div>
                </div>

                <div>
                    <label className="text-gray-500 block font-bold text-xl">Điểm đến</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                        <div>
                            <label className="block mb-2">Tỉnh/Thành phố</label>
                            <Select
                                options={endProvinceOptions}
                                value={getCurrentEndProvince()}
                                onChange={(selectedOption) => setValue("endProvince", selectedOption?.value)}
                                className="react-select-container"
                                classNamePrefix="react-select"
                                placeholder="Chọn Tỉnh/Thành phố"
                                isClearable
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        padding: '2px',
                                        borderRadius: '0.5rem',
                                        borderColor: errors.endProvince ? 'red' : '#d1d5db',
                                        boxShadow: errors.endProvince ? '0 0 0 2px rgba(239,68,68,0.5)' : 'none'
                                    }),
                                }}
                            />
                            {errors.endProvince && <p className="text-red-500 mt-1 text-sm">Vui lòng chọn tỉnh thành.</p>}
                        </div>

                        <div>
                            <label className="block mb-2">Quận/Huyện</label>
                            <Select
                                options={endDistrictOptions}
                                onChange={(selectedOption) => setValue("endDistrict", selectedOption?.value)}
                                className="react-select-container"
                                value={getCurrentEndDistrict()}
                                classNamePrefix="react-select"
                                placeholder="Chọn Quận/Huyện"
                                isDisabled={!endDistricts.length}
                                isClearable
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        padding: '2px',
                                        borderRadius: '0.5rem',
                                        borderColor: errors.endDistrict ? 'red' : '#d1d5db',
                                        boxShadow: errors.endDistrict ? '0 0 0 2px rgba(239,68,68,0.5)' : 'none'
                                    }),
                                }}
                            />
                            {errors.endDistrict && <p className="text-red-500 mt-1 text-sm">Vui lòng chọn quận huyện.</p>}
                        </div>

                        <div>
                            <label className="block mb-2">Xã/Phường</label>
                            <Select
                                options={endWardOptions}
                                onChange={(selectedOption) => setValue("endWard", selectedOption?.value)}
                                className="react-select-container"
                                value={getCurrentEndWard()}
                                classNamePrefix="react-select"
                                placeholder="Chọn Xã/Phường"
                                isDisabled={!endWards.length}
                                isClearable
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        padding: '2px',
                                        borderRadius: '0.5rem',
                                        borderColor: errors.endWard ? 'red' : '#d1d5db',
                                        boxShadow: errors.endWard ? '0 0 0 2px rgba(239,68,68,0.5)' : 'none'
                                    }),
                                }}
                            />
                            {errors.endWard && <p className="text-red-500 mt-1 text-sm">Vui lòng chọn xã phường.</p>}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                    <div>
                        <label className="block mb-2 text-gray-700 font-medium">Quãng đường (km)</label>
                        <div className="relative">
                            <input
                                type="text"
                                {...register("distance")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="VD: 120"
                                disabled
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">km</span>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-700 font-medium">Thời gian dự kiến</label>
                        <div className="relative">
                            <input
                                type="text"
                                {...register("time")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="VD: 2.5"
                                disabled
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">giờ</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <Button
                        disabled={loading}
                        variant="contained"
                        color="warning"
                        type="submit"
                        className={`px-6 py-2 rounded-lg shadow-md hover:bg-[#e65100] ${loading ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                    >
                        {id ? "Cập nhật" : "Tạo mới"}
                    </Button>

                </div>
            </form>
            {startLocation && endLocation && (
                <div className="w-[500px">
                    <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Bản đồ trực quan</h3>
                    <MapPreview startLocation={startLocation} endLocation={endLocation} />
                </div>
            )}

        </main>
    );
}

export default RoutesCreate;