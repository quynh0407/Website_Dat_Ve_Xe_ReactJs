import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const reviewData = [
    { id: "1", name: "Nguyễn Văn A", trip: "201", rating: "5⭐", comment: "Tuyệt vời!", createAt: "2023-10-26 10:00:00", status: "Hiển thị" },
    { id: "2", name: "Nguyễn Văn B", trip: "202", rating: "4⭐", comment: "Tốt.", createAt: "2023-10-26 11:00:00", status: "Hiển thị" },
    { id: "3", name: "Nguyễn Văn C", trip: "203", rating: "3⭐", comment: "Khá ổn.", createAt: "2023-10-26 12:00:00", status: "Không hiển thị" },
    { id: "4", name: "Nguyễn Văn D", trip: "204", rating: "2⭐", comment: "Không tốt.", createAt: "2023-10-26 13:00:00", status: "Hiển thị" },
    { id: "5", name: "Nguyễn Văn E", trip: "205", rating: "1⭐", comment: "Rất tệ.", createAt: "2023-10-26 14:00:00", status: "Không hiển thị" },
];

function ReviewEdit() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        status: "1",
    });

    useEffect(() => {
        const reviewToEdit = reviewData.find((review) => review.id === id);
        if (reviewToEdit) {
            setFormData({ status: reviewToEdit.status });
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

    const getReviewDetails = (reviewId) => {
        return reviewData.find((review) => review.id === reviewId);
    };

    const reviewDetails = getReviewDetails(id);

    if (!reviewDetails) {
        return <div>Review not found.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold">Sửa trạng thái</h3>
                <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">ID</label>
                        <input type="text" value={id} disabled className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Tên</label>
                        <input type="text" value={reviewDetails.name} disabled className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Chuyến đi</label>
                        <input type="text" value={reviewDetails.trip} disabled className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Đánh giá</label>
                        <input type="text" value={reviewDetails.rating} disabled className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Bình luận</label>
                        <textarea disabled className="w-full p-2 border rounded">
                            {reviewDetails.comment}
                        </textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Ngày đăng</label>
                        <input type="text" value={reviewDetails.createAt} disabled className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Trạng thái</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        >
                            <option value="1">Hiển thị</option>
                            <option value="0">Ẩn</option>
                        </select>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-[#073272] text-white rounded">
                        Cập nhật trạng thái
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ReviewEdit;