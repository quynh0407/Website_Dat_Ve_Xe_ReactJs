import { useForm } from "react-hook-form";

function RoutesCreate() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-2">Thêm tuyến đường</h3>
                    <form className="p-4 border  rounded-md shadow-lg">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Điểm bắt đầu</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded" id="starting"
                                required 
                                {...register("starting", {
                                    required: "Điểm bắt đầu không được để trống", 
                                })}
                            />
                            {errors.starting && <span className="text-danger">{errors.starting.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Điểm kết thúc</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded" id="end"
                                required
                                {...register("end", {
                                    required: "Điểm kết thúc không được để trống", 
                                })}
                            />
                            {errors.end && <span className="text-danger">{errors.end.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Khoảng cách (km)</label>
                            <input
                                type="number"
                                className="w-full p-2 border rounded" id="distance"
                                required 
                                {...register("distance", {
                                    required: "Khoảng cách không được để trống", 
                                })}
                            />
                            {errors.distance && <span className="text-danger">{errors.distance.message}</span>}
                        </div>
                        <button type="submit" onClick={handleSubmit(onSubmit)} className="px-4 py-2 bg-[#073272] text-white rounded">Thêm tuyến đường</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RoutesCreate;
