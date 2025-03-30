import { useState } from "react";
import { Link } from "react-router-dom";
import FormDelete from "../../../../components/formDelete";

const contactData = [
  { id: "1", name: "Nguyễn Văn A", email: "a@gmail.com", phone: "0901234567", content: "Tôi muốn đặt câu hỏi về sản phẩm của bạn.", status: "Đang chờ" },
  { id: "2", name: "Trần Thị B", email: "b@gmail.com", phone: "0912345678", content: "Tôi muốn báo cáo một vấn đề với đơn hàng của mình.", status: "Đã xử lý" },
  { id: "3", name: "Lê Văn C", email: "c@gmail.com", phone: "0923456789", content: "Tôi muốn gửi lời khen ngợi về dịch vụ của bạn.", status: "Đã phản hồi" },
  { id: "4", name: "Phạm Thị D", email: "d@gmaile.com", phone: "0934567890", content: "Tôi muốn biết thêm thông tin về các chương trình khuyến mãi.", status: "Đang chờ" },
  { id: "5", name: "Hoàng Văn E", email: "e@gmail.com", phone: "0945678901", content: "Tôi muốn đặt hàng một số sản phẩm của bạn.", status: "Đã xử lý" },
];

function ContactGetAll() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="container mx-auto p-2">
      <div className="bg-white p-4 shadow rounded-md">
        <h2 className="text-xl font-bold mb-3">Quản lý Liên Hệ</h2>
        <table className="w-full border-collapse border border-gray-300 mt-3">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Tên</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Số điện thoại</th>
              <th className="p-2 border">Nội dung</th>
              <th className="p-2 border">Trạng thái</th>
              <th className="p-2 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((contact) => (
              <tr key={contact.id} className="border-b">
                <td className="p-2 border">{contact.id}</td>
                <td className="p-2 border">{contact.name}</td>
                <td className="p-2 border">{contact.email}</td>
                <td className="p-2 border">{contact.phone}</td>
                <td className="p-2 border max-w-[100px] truncate whitespace-nowrap overflow-hidden">{contact.content}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      contact.status === "Đã xử lý" || contact.status === "Đã phản hồi"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {contact.status}
                  </span>
                </td>
                <td className="p-2 border flex gap-2">
                  <Link
                    to={`/admin/contact/edit/${contact.id}`}
                    className="bg-yellow-500 text-white py-2 px-3 rounded"
                  >
                    <i className="fa-solid fa-pen-to-square text-md"></i>
                  </Link>
                  <button
                    onClick={() => setSelectedContact(contact)}
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
        isOpen={!!selectedContact}
        onClose={() => setSelectedContact(null)}
        onConfirm={() => {
          console.log(`Đã xóa liên hệ của: ${selectedContact?.name}`);
          setSelectedContact(null);
        }}
        message={`Bạn có chắc chắn muốn xóa liên hệ của "${selectedContact?.name}" không?`}
      />
    </div>
  );
}

export default ContactGetAll;