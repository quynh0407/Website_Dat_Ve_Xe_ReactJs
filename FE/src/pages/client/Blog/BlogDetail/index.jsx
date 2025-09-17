import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Constants from "../../../../Constants";

const BlogDetail = () => {
    const { id } = useParams();

    useEffect(() => {
      blogData();
    }, [id]);
    
        const blogData = [
        {
            id: 1,
            image: "/assets/images/main/blog1.png",
            title: "Khám phá vẻ đẹp của Đà Lạt: Thành phố mộng mơ...",
            context: "Đà Lạt nổi tiếng với khí hậu ôn hòa, rừng thông xanh bạt ngàn, hồ nước yên tĩnh và những cánh đồng hoa rực rỡ sắc màu. Đây là điểm đến lý tưởng để nghỉ dưỡng...",
            date: "15:30 10/05/2024"
        },
        {
            id: 2,
            image: "/assets/images/main/blog2.jpg",
            title: "Những món ăn đặc sản không thể bỏ qua khi du lịch Việt Nam...",
            context: "",
            date: "09:45 08/05/2024"
        },
        {
            id: 3,
            image: "/assets/images/main/blog3.png",
            title: "Kinh nghiệm du lịch tiết kiệm chi phí mà vẫn trọn vẹn...",
            context: "Du lịch không nhất thiết phải tốn kém. Hãy lựa chọn phương tiện di chuyển phù hợp, săn vé máy bay giá rẻ, đặt phòng khách sạn sớm và trải nghiệm ẩm thực đường phố...",
            date: "14:20 05/05/2024"
        },
        {
            id: 4,
            image: "/assets/images/main/blog4.png",
            title: "Top 10 địa điểm du lịch đẹp nhất Việt Nam không thể bỏ lỡ...",
            context: "Việt Nam sở hữu những danh thắng tuyệt đẹp như vịnh Hạ Long, phố cổ Hội An, Mộc Châu mùa hoa cải, Sapa sương mù và Phú Quốc với những bãi biển trong xanh...",
            date: "11:15 03/05/2024"
        },
        {
            id: 5,
            image: "/assets/images/main/blog5.png",
            title: "Những lễ hội truyền thống đặc sắc của người Việt...",
            context: "Việt Nam có nhiều lễ hội đặc trưng như Tết Nguyên Đán, lễ hội chọi trâu Đồ Sơn, lễ hội đua ghe Ngo của người Khmer hay lễ hội Gióng mang ý nghĩa lịch sử to lớn...",
            date: "16:50 01/05/2024"
        },
        {
            id: 6,
            image: "/assets/images/main/blog6.png",
            title: "Bí quyết săn vé máy bay giá rẻ cho chuyến du lịch tiết kiệm...",
            context: "Để mua vé máy bay giá rẻ, hãy đặt vé sớm, chọn thời điểm khuyến mãi, đăng ký nhận thông báo giảm giá từ các hãng hàng không và sử dụng các ứng dụng đặt vé thông minh...",
            date: "10:30 28/04/2024"
        },
        {
            id: 7,
            image: "/assets/images/main/blog7.png",
            title: "Khám phá những nét văn hóa độc đáo của dân tộc Việt Nam...",
            context: "Việt Nam là một đất nước đa dạng văn hóa với 54 dân tộc anh em. Từ phong tục tập quán, trang phục truyền thống đến những làn điệu dân ca, tất cả đều thể hiện nét đặc trưng riêng...",
            date: "13:10 25/04/2024"
        }
    ];

    return (
        <main className="mx-auto md:w-full w-[80%] px-4 mt-[11%] ">
            <div className="bg-white rounded-lg p-5 shadow-md">
                <h1 className="text-3xl font-bold text-orange-500 mb-3">{blogData.title}</h1>
                <div className="text-sm text-gray-500 mb-3">
                    Ngày đăng: {new Date(blogData.createAt).toLocaleDateString('vi-VN')} 
                    {blogData.blogCategory && (
                        <span className="ml-4">Danh mục: {blogData.blogCategory.name}</span>
                    )}
                </div>
                <img
                    src={`${blogData.image}`}
                    alt={blogData.title}
                    className="w-full h-auto object-cover rounded mb-5"
                />
                <div
                    className="prose max-w-full"
                    dangerouslySetInnerHTML={{ __html: blogData.context }}
                ></div>
            </div>
        </main>
    );
};

export default BlogDetail;
