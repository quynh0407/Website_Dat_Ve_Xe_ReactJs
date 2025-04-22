import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {jwtDecode} from 'jwt-decode'; 
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [cookies] = useCookies(["token"]);
    const navigate = useNavigate();
    const [isAllowed, setIsAllowed] = useState(null);
    const location = useLocation();

    const checkLogin = () => {
        const token = cookies.token;
        if (!token) {
            navigate("/login");
            toast.error("Vui lòng đăng nhập!");
            return;
        }
        try {
            const decode = jwtDecode(token);
            const currentPath = location.pathname; 

            const currentTime = Date.now() / 1000; 
            if (decode.exp < currentTime) {
                toast.error("Token đã hết hạn!");
                navigate("/login");
                return;
            }

            if (decode.role !== "admin") {
                const allowedPaths = ["/profile", "/bookingHistory"];
                if (decode.role === "customer" && allowedPaths.includes(currentPath)) {
                    setIsAllowed(true); 
                    return;
                }

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
    }, [cookies.token, navigate]);

    if (isAllowed === null) return null;

    return children;
};

export default PrivateRoute;
