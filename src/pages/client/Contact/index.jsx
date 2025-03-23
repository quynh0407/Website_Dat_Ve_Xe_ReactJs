function Contact() {
    return (
        <main className="home mx-auto w-full md:w-[80%] mt-[11%] mb-5 px-4 rounded-lg" id="home">
            <div className="bg-white p-4 mb-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-0 p-4">
                    <div className="w-full p-2">
                        <section className="contact-page py-5 bg-light">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 mb-8">
                                        <div className="text-center">
                                            <h1 className="text-3xl font-bold mb-8 mt-3">Công ty cổ phần Bụi Đường</h1>
                                            <hr className="border-gray-300 mx-auto w-1/4 mb-8" />
                                        </div>
                                        <ul className="list-none">
                                            <li className="mb-4 flex items-start">
                                                <img src="/assets/images/main/map.svg" alt="Map Icon" className="mr-2 mt-1 w-6 h-6" />
                                                <address className="flex-grow text-lg break-words whitespace-normal">
                                                    <strong className="font-semibold">Trụ sở chính:</strong> 106 Đường Hai Bà Trưng, Tân An, Ninh Kiều, TP.Cần Thơ, Việt Nam
                                                </address>
                                            </li>
                                            <li className="mb-4 flex items-start">
                                                <img src="/assets/images/main/map.svg" alt="Map Icon" className="mr-2 mt-1 w-6 h-6" />
                                                <address className="flex-grow text-lg break-words whitespace-normal">
                                                    <strong className="font-semibold">Văn phòng TP.Cần Thơ:</strong> KDC Hoàng Quân, đường số 26 số C1/06, phường Thường Thạnh, Cái Răng, TP.Cần Thơ
                                                </address>
                                            </li>
                                            <li className="mb-4 flex items-start">
                                                <img src="/assets/images/main/phone.svg" alt="Phone Icon" className="mr-2 mt-1 w-6 h-6" />
                                                <p className="flex-grow text-lg break-words whitespace-normal">
                                                    <strong className="font-semibold">Hotline:</strong> <a href="#" className="italic">1900 55 88 88</a>
                                                </p>
                                            </li>
                                            <li className="mb-4 flex items-start">
                                                <img src="/assets/images/main/email.svg" alt="Email Icon" className="mr-2 mt-1 w-6 h-6" />
                                                <p className="flex-grow text-lg break-words whitespace-normal">
                                                    <strong className="font-semibold">Email:</strong> <a href="#" className="italic">buiduong@gmail.com</a>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="w-full p-2">
                        <div className="col-lg-7">
                            <div className="overflow-hidden rounded-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31435.36395698237!2d105.72011857431642!3d9.982081500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08906415c355f%3A0x416815a99ebd841e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1731045254641!5m2!1svi!2s"
                                    width="100%" height="400px" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 mb-3 flex justify-center items-center min-h-screen">
                    <div className="w-full max-w-md p-6 sm:px-4">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mt-3">Liên hệ với chúng tôi</h1>
                        </div>
                        <form className="space-y-5">
                            <div>
                                <label for="email" className="block font-semibold mb-2 text-base">Email</label>
                                <input type="email" id="email" placeholder="Nhập địa chỉ email..."
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-base" />
                            </div>
                            <div>
                                <label for="username" className="block font-semibold mb-2 text-base">Họ và tên</label>
                                <input type="text" id="username" placeholder="Nhập họ và tên..."
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-base" />
                            </div>
                            <div>
                                <label for="content" className="block font-semibold mb-2 text-base">Nội dung</label>
                                <textarea id="content" placeholder="Nhập nội dung..." rows="4"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-base"></textarea>
                            </div>
                            <button type="submit"
                                className="w-full py-2 bg-sky-500 text-white rounded-md hover:opacity-75 focus:outline-none focus:ring focus:border-sky-300 mb-4 font-bold text-base">
                                Gửi
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;