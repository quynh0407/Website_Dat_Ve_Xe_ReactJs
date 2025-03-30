import { useState } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";

const reviewData = [
  { id: "1", name: "Nguyễn Văn A", trip: "201", rating: "5⭐", comment: "Tuyệt vời!", createAt: "2023-10-26 10:00:00", status: "Hiển thị" },
  { id: "2", name: "Nguyễn Văn B", trip: "202", rating: "4⭐", comment: "Tốt.", createAt: "2023-10-26 11:00:00", status: "Hiển thị" },
  { id: "3", name: "Nguyễn Văn C", trip: "203", rating: "3⭐", comment: "Khá ổn.", createAt: "2023-10-26 12:00:00", status: "Không hiển thị" },
  { id: "4", name: "Nguyễn Văn D", trip: "204", rating: "2⭐", comment: "Không tốt.", createAt: "2023-10-26 13:00:00", status: "Hiển thị" },
  { id: "5", name: "Nguyễn Văn E", trip: "205", rating: "1⭐", comment: "Rất tệ.", createAt: "2023-10-26 14:00:00", status: "Không hiển thị" },
];

function ReviewGetAll() {
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <div className="container mx-auto p-2">
      <div className="bg-white p-4 shadow rounded-md">
        <h2 className="text-xl font-bold mb-3">Quản lý Đánh Giá</h2>
        <table className="w-full border-collapse border border-gray-300 mt-3">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Tên</th>
              <th className="p-2 border">Chuyến đi</th>
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
                <td className="p-2 border">{review.id}</td>
                <td className="p-2 border">{review.name}</td>
                <td className="p-2 border">{review.trip}</td>
                <td className="p-2 border">{review.rating}</td>
                <td className="p-2 border">{review.comment}</td>
                <td className="p-2 border">{review.createAt}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      review.status === "Hiển thị"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
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
                  <button
                    onClick={() => setSelectedReview(review)}
                    className="bg-red-500 text-white py-2 px-3 rounded"
                  >
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
          console.log(`Đã xóa đánh giá của: ${selectedReview?.name}`);
          setSelectedReview(null);
        }}
        message={`Bạn có chắc chắn muốn xóa đánh giá của "${selectedReview?.name}" không?`}
      />
    </div>
  );
}

export default ReviewGetAll;