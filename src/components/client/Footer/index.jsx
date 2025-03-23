function Footer(){
    return (
        <footer>
            <div class="footer-top"></div>
            <div class="footer-bottom bg-[#1C2930] text-white py-10">
                <div class="px-4 w-full md:w-[80%] mx-auto">
                    <div
                        class="flex flex-col md:flex-row justify-between items-start gap-55 md:gap-4">
                        <div>
                            <img src="/assets/images/main/logo.png"
                                alt="Logo" class="w-full md:w-[60%] mb-4"/>
                            <a href
                                class="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">🤝
                                Liên
                                hệ với chúng tôi</a>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-3">Về chúng
                                tôi</h3>
                            <ul class="space-y-2 text-gray-300">
                                <li><a href="#" class="hover:text-gray-100">Cách
                                        đặt chỗ</a></li>
                                <li><a href="#" class="hover:text-gray-100">Liên
                                        hệ chúng tôi</a></li>
                                <li><a href="#" class="hover:text-gray-100">Trợ
                                        giúp</a></li>
                                <li><a href="#"
                                        class="hover:text-gray-100">Tuyển
                                        dụng</a></li>
                                <li><a href="#" class="hover:text-gray-100">Về
                                        chúng tôi</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-3">Dịch vụ</h3>
                            <ul class="space-y-2 text-gray-300">
                                <li><a href="#" class="hover:text-gray-100">Vé
                                        xe khách</a></li>
                                <li><a href="#" class="hover:text-gray-100">Đưa
                                        đón sân bay</a></li>
                                <li><a href="#" class="hover:text-gray-100">Cho
                                        thuê xe</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-3">Chính
                                sách</h3>
                            <ul class="space-y-2 text-gray-300">
                                <li><a href="#"
                                        class="hover:text-gray-100">Chính sách
                                        bảo mật</a></li>
                                <li><a href="#" class="hover:text-gray-100">Điều
                                        khoản & Điều kiện</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    class="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
                    © 2025 Bụi đường- Tất cả quyền được bảo lưu.
                </div>
            </div>
        </footer>
    )
}
export default Footer;