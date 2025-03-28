import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const reviewData = [
    {
        id: "1",
        userID: "Nguyễn Văn A",
        tripID: "502",
        rating: "3",
        comment: "120",
        createAt: "28/03/2025",
        status: 1,
    },
    {
        id: "2",
        userID: "Nguyễn Văn B",
        tripID: "501",
        rating: "5",
        comment: "1800000",
        createAt: "28/03/2025",
        status: 0,
    },
];
function ReviewEdit() {

    const { id } = useParams();
    const [formData, setFormData] = useState({ userID: "", tripID: "", rating: "", comment: "", createAt: "", status: "" });

    useEffect(() => {
        const reviewToEdit = reviewData.find(review => review.id === id);
        if (reviewToEdit) {
            setFormData(reviewToEdit);
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Chỉnh sửa đánh giá</h3>
                <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Người dùng</label>
                        <input
                            type="text"
                            name="userID"
                            value={formData.userID}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Mã chuyến xe</label>
                        <input
                            type="text"
                            name="tripID"
                            value={formData.tripID}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Đánh giá</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                className="w-[35px] p-2 rounded"
                                disabled
                            />
                            <span>
                                {Array.from({ length: formData.rating }, (_, i) => <span key={i}>⭐</span>)}
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Bình luận</label>
                        <input
                            type="text"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Ngày đăng</label>
                        <input
                            type="text"
                            name="createAt"
                            value={formData.createAt}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            disabled
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Trạng thái</label>
                        <select
                            type="text"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full p-2 border rounded">
                            <option value="1">Hiển thị</option>
                            <option value="0">Ẩn</option>
                        </select>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">Cập nhật đánh giá </button>
                </form>
            </div>
        </div>
    )
}
export default ReviewEdit;