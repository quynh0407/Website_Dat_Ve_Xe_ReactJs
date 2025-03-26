export default  function Navbar() {
    return (
        <ul className="space-y-4">
        <li className="border-2 border-gray-200 rounded-md">
            <a href="/profile"
                className="block hover:bg-gray-300 p-2 rounded-md hover:text-[#043175] transition-colors duration-200">
                <i className="fas fa-user mr-2"></i> Thông tin cá nhân
            </a>
        </li>
        <li className="border-2 border-gray-200 rounded-md">
            <a href="/bookingHistory"
                className="block hover:bg-gray-300 p-2 rounded-md hover:text-[#043175] transition-colors duration-200">
                <i className="fas fa-history mr-2"></i> Lịch sử đặt vé
            </a>
        </li>
        <li className="border-2 border-gray-200 rounded-md">
            <a href="/logout"
                className="block hover:bg-gray-300 p-2 rounded-md hover:text-[#043175] transition-colors duration-200">
                <i className="fas fa-sign-out-alt mr-2"></i> Đăng xuất
            </a>
        </li>
    </ul>
    
    )

}