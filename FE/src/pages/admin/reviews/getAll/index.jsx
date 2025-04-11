import { useState } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";

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

function ReviewGetAll() {
      const [selectedReview, setSelectedReview] = useState(null);
    
    return (
        <div className="container mx-auto p-2">
            <div className="bg-white p-4 shadow rounded-md">
                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Người dùng</th>
                            <th className="p-2 border">Mã chuyến</th>
                            <th className="p-2 border">Đánh giá</th>
                            <th className="p-2 border">Bình luận</th>
                            <th className="p-2 border">Ngày đăng</th>
                            <th className="p-2 border">Trạng thái</th>
                            <th className="p-2 border">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviewData.map((review) => (
                            <tr key={review.id} className="border-b">
                                <td className="p-2 border">{review.userID}</td>
                                <td className="p-2 border">{review.tripID}</td>
                                <td className="p-2 border"><span className="pr-1">★</span>{review.rating}/5</td>
                                <td className="p-2 border">{review.comment}</td>
                                <td className="p-2 border">{review.createAt}</td>
                                <td className="p-2 border">
                                <span className={`px-2 py-1 rounded-full text-xs ${review.status === 1
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                        }`}>
                                        {review.status === 1 ? "Hiển thị" : "Ẩn bài viết"}
                                    </span>
                                </td>
                                <td className="p-2 border flex gap-2">
                                    <Link
                                        to={`/admin/review/edit/${review.id}`}
                                        className="bg-yellow-500 text-white py-2 px-3 rounded"
                                    >
                                        <i className="fa-solid fa-pen-to-square text-md"></i>
                                    </Link>
                                    <button onClick={() => setSelectedReview(review)} className="bg-red-500 text-white py-2 px-3 rounded">
                                        <i className="fa-solid fa-trash text-md"></i>
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <FormDelete
                    isOpen={!!selectedReview}
                    onClose={() => setSelectedReview(null)}
                    onConfirm={() => {
                      setSelectedReview(null);
                    }}
                    Id={selectedReview?.id}
                    action={`/admin/review/delete/${selectedReview?.id}`}
                    message={`Bạn có chắc chắn muốn xóa đánh giá"${selectedReview?.comment}" không?`}
                  />
        </div>
    )
}

export default ReviewGetAll;