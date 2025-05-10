import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "../../../Constants";
import { toast } from "react-toastify";
import Pagination from "../../../components/client/Pagination";

function Blog() {
    const [news1Data, setNews1Data] = useState([]);
    const [news4Data, setNews4Data] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalProducts = 7;

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
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        setNews1Data(getBlog1Date());
        setNews4Data(getBlog4Date());
    }, []);

    const getBlog4Date = () => {
        const sorted = [...blogData].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );
        return sorted.slice(0, 4);
    };
    const getBlog1Date = () => {
        const sorted = [...blogData].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );
        return [sorted[0]];
    };


    const BlogNoContext = (props) => {
        return (
            <Link to={`/tin-tuc/${props.id}`} className="block p-1 swiper-slide">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-full  object-cover rounded"
                />
                <div className="text-gray-600 flex flex-col ">
                    <strong className="text-md line-clamp-2">{props.title}</strong>
                </div>
                <small className="text-gray-400">{props.date}</small>
            </Link>
        );
    };
    const BlogGetAll = (props) => {
        return (
            <Link to={`/tin-tuc/${props.id}`} className=" p-1 flex">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-[10rem] h-auto lg:w-[14rem] object-cover rounded"
                />
                <div className="text-gray-600 pl-2 flex flex-col ">
                    <strong className="text-md line-clamp-2">{props.title}</strong>
                    <p className="text-md lg:line-clamp-2 line-clamp-1">{props.context}</p>
                    <small className="text-gray-400">{props.date}</small>
                </div>

            </Link>
        );
    };

    return (
        <main className="home mx-auto w-[90%] lg:w-full bg-white rounded  mb-5 px-4  lg:mt-[11%]">
            <title>Tin tức</title>
            <div className="lg:w-[80%]  mx-auto py-3">
                <div>
                    <div className="flex items-center ">
                        <h2 className="text-3xl min-w-max mr-3 text-[#043175] font-semibold text-center">Tin tức nổi bật</h2>
                        <hr className="w-full border-[#043175] border-2 mt-2" />
                    </div>

                    <div className="lg:!grid lg:!grid-cols-2  py-3 swiper mySwiper overflow-hidden">
                        <div>
                            {news1Data.map((props) => (
                                <BlogNoContext key={props.id} {...props} />
                            ))}
                        </div>
                        <div className="swiper-wrapper flex lg:!grid lg:flex-none lg:!grid-cols-2">
                            {news4Data.map((props) => (
                                <BlogNoContext key={props.id} {...props} />
                            ))}
                        </div>

                    </div>
                </div>

                <div className="flex flex-col lg:flex-row mx-auto lg:py-3">
                    <div
                        style={{
                            background:
                                "linear-gradient(113.67deg, rgb(255, 208, 76) -6.18%, rgb(255, 67, 0) 106.23%)",
                        }}
                        className="lg:w-[20%] w-full text-white rounded flex flex-col justify-center items-center lg:p-4"
                    >
                        <h2 className="lg:text-3xl text-xl text-white">Tiêu điểm</h2>
                        <p>BUSGO City Bus</p>
                    </div>

                    <div className="swiper mySwiper overflow-hidden lg:w-[80%] w-full">
                        <div className="swiper-wrapper flex mx-auto gap-2 p-2">
                            {blogData.map((props) => (
                                <BlogNoContext key={props.id} {...props} />
                            ))}
                        </div>
                    </div>
                </div>


                <div>
                    <div className="flex my-3 items-center">
                        <h2 className="text-3xl min-w-max mr-3 text-[#043175] font-semibold text-center">Tất cả tin tức</h2>
                        <hr className="w-full border-[#043175] border-2 mt-2" />
                    </div>

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {currentPosts.map((props) => (
                                <BlogGetAll key={props.id} {...props} />
                            ))}


                        </div>
                        <div className="flex justify-center mt-4">
                            <Pagination
                                count={totalProducts}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </main >
    );
}

export default Blog;
