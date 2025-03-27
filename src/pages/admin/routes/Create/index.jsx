

function RoutesCreate() {

    return (
        <>
        <h3 className="text-2xl bold mb-2">Thêm tuyến đường</h3>
        <form className="p-4 border rounded-md shadow-lg">
            <div className="mb-4">
                <label className="block text-sm font-medium">Điểm bắt đầu</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Điểm kết thúc</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Khoảng cách (km)</label>
                <input
                    type="number"
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Thêm tuyến đường</button>
        </form>
        </>
    );
}

export default RoutesCreate;
