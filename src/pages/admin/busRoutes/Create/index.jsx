function BusRoutesCreate(){
    return(
        <>
            <div className="container mx-auto p-4">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-2">Thêm tuyến xe</h3>
                    <form className="p-4 border  rounded-md shadow-lg">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Tuyến đường</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Vui lòng nhập tuyến đường"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Giờ bắt đầu</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Vui lòng giờ bắt đầu"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Giờ kết thúc</label>
                            <input
                                type="number"
                                className="w-full p-2 border rounded"
                                placeholder="Vui lòng nhập giờ kết thúc"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Giá vé</label>
                            <input
                                type="number"
                                className="w-full p-2 border rounded"
                                placeholder="Vui lòng nhập giá vé"
                                required
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Thêm tuyến đường</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default BusRoutesCreate;