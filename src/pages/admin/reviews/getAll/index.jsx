import { Link } from "react-router-dom";

const reviewData = [
    {
        id: "1",
        userID: "Nguyễn Văn A",
        tripID: "502",
        rating: "3",
        comment: "120",
        createAt: "28/03/2025",
        status: "Hiển thị",
    },
    {
        id: "2",
        userID: "Nguyễn Văn B",
        tripID: "501",
        rating: "5",
        comment: "1800000",
        createAt: "28/03/2025",
        status: "Ẩn",
    },
];

function ReviewGetAll() {
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
                                    <span className={`py-1 px-4 rounded-full 
                                        ${review.status === "Hiển thị" ? "bg-gradient-to-b from-cyan-100 to-indigo-200 text-blue-950" 
                                                                        : "bg-gradient-to-b from-yellow-100 to-rose-300 text-red-950" }`}
                                    >
                                    {review.status}
                                    </span>
                                </td>
                                <td className="p-2 border flex gap-2">
                                    <Link
                                        to={`/admin/review/edit/${review.id}`}
                                        className="bg-yellow-500 text-white py-2 px-3 rounded"
                                    >
                                        <i className="fa-solid fa-pen-to-square text-md"></i>
                                    </Link>
                                    <button className="bg-red-500 text-white py-2 px-3 rounded">
                                        <i className="fa-solid fa-trash text-md"></i>
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ReviewGetAll;