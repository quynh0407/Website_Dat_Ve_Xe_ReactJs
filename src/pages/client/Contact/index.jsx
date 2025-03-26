function Contact() {
    return (
        <main class="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg my-[20px] mt-[11%]" >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <section class="py-2">
                    <h2 class="px-3 text-3xl font-bold text-blue-950 mb-6 border-b border-gray-300 pb-2">Câu hỏi thường gặp</h2>
                    <div class="space-y-3 px-4">
                        <details class="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary class="cursor-pointer font-semibold text-lg text-gray-800">Làm thế nào để đặt vé?
                            </summary>
                            <p class="mt-3 text-gray-700 leading-relaxed">Bạn có thể đặt vé trực tuyến qua trang web chính
                                thức của chúng tôi hoặc thông qua ứng dụng di động. Ngoài ra, nếu cần hỗ trợ, bạn có thể gọi
                                tổng đài để được hướng dẫn chi tiết.</p>
                        </details>
                        <details class="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary class="cursor-pointer font-semibold text-lg text-gray-800">Chính sách hoàn tiền như thế
                                nào?</summary>
                            <p class="mt-3 text-gray-700 leading-relaxed">Chúng tôi hỗ trợ hoàn tiền nếu bạn hủy vé trước 48
                                giờ so với giờ khởi hành. Sau thời gian này, phí hủy sẽ được áp dụng tùy theo từng loại vé.
                                Vui lòng xem chi tiết tại trang chính sách hoàn tiền.</p>
                        </details>
                        <details class="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary class="cursor-pointer font-semibold text-lg text-gray-800">Tôi có thể thay đổi thông
                                tin vé sau khi đặt không?</summary>
                            <p class="mt-3 text-gray-700 leading-relaxed">Có, bạn có thể thay đổi thông tin vé trước khi
                                khởi hành ít nhất 24 giờ. Việc thay đổi có thể phát sinh phí tùy vào loại vé bạn đã đặt. Vui
                                lòng liên hệ tổng đài để được hỗ trợ.</p>
                        </details>
                        <details class="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary class="cursor-pointer font-semibold text-lg text-gray-800">Thanh toán có an toàn không?
                            </summary>
                            <p class="mt-3 text-gray-700 leading-relaxed">Chúng tôi sử dụng hệ thống thanh toán bảo mật hàng
                                đầu với chứng chỉ SSL để đảm bảo thông tin của bạn được bảo vệ tuyệt đối. Bạn có thể thanh
                                toán qua thẻ ngân hàng, ví điện tử hoặc chuyển khoản.</p>
                        </details>
                    </div>
                </section>


                <section class="py-3">
                    <h2 class="text-3xl font-bold text-blue-950 mb-6 border-b border-gray-300 pb-2">Liên hệ hỗ trợ</h2>
                    <form class="space-y-6">
                        <div>
                            <label class="block text-gray-800 font-semibold mb-2">Tên của bạn</label>
                            <input type="text"
                                class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>
                        <div>
                            <label class="block text-gray-800 font-semibold mb-2">Email</label>
                            <input type="email"
                                class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                required />

                        </div>
                        <div>
                            <label class="block text-gray-800 font-semibold mb-2">Nội dung hỗ trợ</label>
                            <textarea class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                rows="4" required></textarea>
                        </div>
                        <button class="w-full bg-[#043175] text-white py-3 rounded-lg hover:bg-blue-950 font-semibold">Gửi
                            yêu
                            cầu</button>
                    </form>
                </section>
            </div>

            <section class="mt-8 text-gray-800 text-center border-t border-gray-300">
                <h2 class="text-3xl font-bold text-blue-950 mb-6 mt-8 pb-2">Thông tin liên hệ</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31435.36395698237!2d105.72011857431642!3d9.982081500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08906415c355f%3A0x416815a99ebd841e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1731045254641!5m2!1svi!2s"
                    width="100%" height="400px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p>Email: <a href=" " class="text-blue-500">hotrowebsite.com</a></p>
                <p>Hotline: <a href="tel:18001000" class="text-blue-500">1800 1000</a></p>
                <p>Địa chỉ: Cái Răng, Cần Thơ.</p>
            </section>
        </main>
    )
}

export default Contact;