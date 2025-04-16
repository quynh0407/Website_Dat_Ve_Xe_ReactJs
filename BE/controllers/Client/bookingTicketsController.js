const BookingModel = require('../../models/bookingModel');
const UserModel = require('../../models/userModel');
const TripModel = require('../../models/tripsModel');
const SeatModel = require('../../models/seatsModel');

class BookingTicketsController {
    static async create(req, res) {
        try {
            const { tripId, seatIds, busId, status, finalPrice, userName, phone, emailUser } = req.body;

            if (!Array.isArray(seatIds) || seatIds.length === 0) {
                return res.status(400).json({ success: false, message: "Danh sách ghế không hợp lệ." });
            }

            const bookings = await Promise.all(
                seatIds.map(async seatId => {
                    const bookings = await BookingModel.create({
                        tripId,
                        seatId,
                        busId,
                        status,
                        finalPrice,
                        userName,
                        phone,
                        emailUser,
                    });
                    await SeatModel.update(
                        { status: "sold" },
                        { where: { id: seatId } }
                    );
                    return bookings;
                })
            );
            
            res.status(201).json({
                status: 201,
                success: true,
                message: "Tạo đặt vé thành công!",
                data: bookings,
            });

        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = BookingTicketsController;
