import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
    const [cookies] = useCookies(["token"]);
    const navigate = useNavigate();
    const [isAllowed, setIsAllowed] = useState(null);

    const checkLogin = () => {
        const token = cookies.token;
        if (!token) {
            navigate("/login");
            toast.error("Vui lòng đăng nhập!");
            return;
        }
        try {
            const decode = jwtDecode(token);
            if (decode.role !== "admin") {
                navigate("/");
                toast.error("Bạn không có quyền truy cập trang này!");

            } else {
                setIsAllowed(true);
            }
        } catch (error) {
            toast.error("Token không hợp lệ!");
            navigate("/login");
        }
    };

    useEffect(() => {
        checkLogin();
    }, [cookies.token, navigate])

    if (isAllowed === null) return null;

    return children;
};

export default PrivateRoute;
