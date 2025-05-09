import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect} from "react";

function Opt() {
    const { handleSubmit } = useForm();
    const navigate = useNavigate();
    const [time, setTime] = useState(120);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        let timer;
        if (time > 0) {
            timer = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
        }

        return () => clearInterval(timer);
    }, [time]);

//============[ Xu ly nhap otp ]=================
    const otpRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];
    const otpValues = useRef(["", "", "", "", "", ""]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) {
            otpValues.current[index] = value;
            if (index < 5) otpRefs[index + 1].current.focus();
        } else {
            e.target.value = "";
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            otpRefs[index - 1].current.focus();
        }
    };
//============[ Xu ly thgian dem nguoc va gui lai otp ]=================

const handleResendOtp = () => {
    setTime(120); 
    setCanResend(false);
};

const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
};

    const handleRegister = () => {
        const otp = otpValues.current.join("");
        console.log("opt nhập:", otp);
    };

    return (
        <main className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white p-9 my-[50px] rounded-xl shadow-xl mx-auto">
                <div className="text-center mb-6">
                    <a href="/">
                        <img src="/assets/images/logos/logo-light.png" className=" h-20" alt="logo" />
                    </a>
                </div>



                <div className="flex items-center justify-center my-9">
                    <hr className="flex-grow border-t-2 border-gray-400" />
                    <span className="mx-4 text-gray-900">Nhập mã xác thực</span>
                    <hr className="flex-grow border-t-2 border-gray-500" />
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
                    <p className="text-center text-sm text-gray-700 mb-2">
                        Mã xác thực đã được gửi về số <span className="text-sky-900 font-semibold">0968935134</span>
                    </p>

                    <div className="flex justify-center space-x-2 my-4">
                        {otpRefs.map((ref, index) => (
                            <input
                                key={index}
                                ref={ref}
                                type="text"
                                maxLength={1}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:border-blue-500"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#043175] text-white py-2 rounded-lg hover:bg-[#031f4d] transition-colors"
                    >
                        Tiếp tục
                    </button>
                </form>

                <div className="text-center mt-2 text-sm text-gray-700">
    {!canResend ? (
        <p>
            Gửi lại mã sau: <span className="font-semibold text-blue-600">{formatTime(time)}</span>
        </p>
    ) : (
        <button
            onClick={handleResendOtp}
            className="text-blue-600 hover:underline font-medium"
            type="button"
        >
            Gửi lại mã
        </button>
    )}
</div>

          
            </div>
        </main>
    );
}

export default Opt;
