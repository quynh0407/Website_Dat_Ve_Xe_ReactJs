
import axios from 'axios';

const axiosAdmin = axios.create({
  baseURL: "http://localhost:3000",  
  withCredentials: true,            // Bật chế độ gửi cookie kèm theo yêu cầu
  // headers: {
  //   "Content-Type": "application/json",  
  // },
});

export default axiosAdmin;
