function Footer() {
    return (
        <>
            <footer>
                <div className="footer-top"></div>
                <div className="footer-bottom bg-[#1C2930] text-white py-10">
        <div className="px-4 w-full lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center lg:text-left mb-6 md:mb-0 grid grid-cols-1 ">
                <div className="grid grid-cols-2 ">
                  <img src="/assets/images/main/logo.png" alt="Logo" className="w-[100%] lg:w-[30rem] lg:mx-0 mb-4" />
                  <span className="text-left px-3 flex align-items-center ">
                       <strong className="text-2xl ">BusGo</strong>
                  </span>
                </div>   <p className="text-gray-400 text-left mt-2">Khám phá hành trình của bạn cùng BusGo -
                     dịch vụ xe khách nhanh chóng, an toàn và tiện lợi.</p>

            </div>

       
            <div className="text-left lg:text-left  lg:ml-[40%] md:ml-10 mb-6 md:mb-0">
                <h3 className="text-lg text-gray-500 font-semibold mb-3">Về chúng tôi</h3>
                <ul className="space-y-2 text-gray-300">
                    <li><a href="#" className="hover:text-gray-100">Liên hệ với chúng tôi</a></li>
                    <li><a href="#" className="hover:text-gray-100">Hỗ trợ khách hàng</a></li>
                    <li><a href="#" className="hover:text-gray-100">Cơ hội nghề nghiệp</a></li>
                    <li><a href="#" className="hover:text-gray-100">Giới thiệu về chúng tôi</a></li>
                </ul>
            </div>

            <div className="text-left lg:text-left mb-6 lg:ml-[40%] md:mb-0">
                <h3 className="text-lg text-gray-500 font-semibold mb-3">Dịch vụ</h3>
                <ul className="space-y-2 text-gray-300">
                    <li><a href="#" className="hover:text-gray-100">Vé xe khách</a></li>
                    <li><a href="#" className="hover:text-gray-100">Hướng dẫn đặt vé</a></li>
                    <li><a href="#" className="hover:text-gray-100">Các tuyến xe hiện có</a></li>
                </ul>
            </div>

            <div className="text-left  md:ml-10 lg:ml-[40%] lg:text-left">
                <h3 className="text-lg text-gray-500 font-semibold mb-3">Chính sách</h3>
                <ul className="space-y-2 text-gray-300">
                    <li><a href="#" className="hover:text-gray-100">Chính sách bảo mật</a></li>
                    <li><a href="#" className="hover:text-gray-100">Điều khoản & Điều kiện</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
        © 2025 BUSGO - Tất cả quyền được bảo lưu.
    </div>
</div>


            </footer>

            <script src="../../../styles/client/js/main.js"></script>
        </>
    )
}
export default Footer;