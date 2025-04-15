const axios = require('axios');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const dayjs = require('dayjs');

let sentEmails = new Set(); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'quynhctppc08873@gmail.com',
    pass: 'nmyhrrpxvhfakwth', 
  },
});


cron.schedule('* * * * *', async () => {
  try {
    const response = await axios.get('http://localhost:3000/admin/booking/list');
    const bookings = response.data.data;
    console.log('📋 Số booking lấy về:', bookings.length);

    const now = dayjs();
    console.log('⏱ Giờ hiện tại (Việt Nam):', now.format('HH:mm:ss DD/MM/YYYY'));
    

    bookings.forEach((booking) => {
      const status = booking.status;
      const email = booking.User?.email;
      const departure = booking.Trip?.departureTime;
      const bookingId = booking.id;

      console.log('🔍 Booking:', { bookingId, status, email, departure });

      if (status === 'confirmed' && email && departure) {
        const departureTime = dayjs(departure);
        console.log('⏰ Departure (Vietnam time) after conversion:', departureTime.format('HH:mm:ss DD/MM/YYYY'));
        const diff = departureTime.diff(now, 'minute');

        console.log(`📦 Booking ID: ${bookingId}, Status: ${status}, Email: ${email}, Giờ khởi hành: ${departureTime.format('HH:mm')}, Còn ${diff} phút`);
        console.log('🔁 Cron đang chạy lúc', now.format('HH:mm:ss'));
        console.log('⏰ Departure (raw):', departure);
        console.log('🇻🇳 Departure (Vietnam time):', departureTime.format('HH:mm:ss DD/MM/YYYY'));
        console.log('🕐 Now (Vietnam time):', now.format('HH:mm:ss DD/MM/YYYY'));
        console.log('🧮 Khoảng cách phút:', diff);

        if (diff <= 30 && diff >= 29 && !sentEmails.has(bookingId)) {
          transporter.sendMail({
            from: 'quynhctppc08873@gmail.com',
            to: email,
            subject: '⏰ Nhắc nhở chuyến xe sắp khởi hành',
            html: `
              <p>Chào bạn,</p>
              <p>Bạn có chuyến xe dự kiến khởi hành vào <strong>${departureTime.format('HH:mm DD/MM/YYYY')}</strong>.</p>
              <p>Hãy đến sớm để không bị trễ chuyến nhé!</p>
              <p>🌸 Cảm ơn bạn đã đặt vé tại hệ thống!</p>
            `
          }, (err, info) => {
            if (err) {
              console.error('❌ Lỗi gửi mail:', err);
            } else {
              console.log(`✅ Đã gửi nhắc nhở cho ${email}`);
              sentEmails.add(bookingId);
            }
          });
        }
      }
    });
  } catch (error) {
    console.error('🚨 Lỗi khi lấy booking:', error.message);
  }
});
