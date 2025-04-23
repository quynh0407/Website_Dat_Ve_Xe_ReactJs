const { BookingDetailModel, SeatsModel, BookingModel, BusesModel, TripsModel, UserModel, RoutesModel, DriverModel, BusTypesModel } = require('../../models/connectModel');

class BookingDetailController {
    static async get(req, res) {
        try {
            const details = await BookingDetailModel.findAll({
                include: [
                    // Kết hợp thông tin chỗ ngồi và xe
                    {
                        model: SeatsModel,
                        as: 'seat',
                        attributes: ['seatNumber', 'status'],
                        include: [
                            {
                                model: BusesModel,
                                as: 'bus',
                                attributes: ['plateNumber'] // Thông tin biển số xe
                            }
                        ]
                    },
                    // Kết hợp thông tin đặt vé và chuyến đi
                    {
                        model: BookingModel,
                        as: 'booking',
                        include: [
                            {
                                model: UserModel,
                                as: 'user',
                                attributes: ['fullName', 'email', 'phone']
                            },
                            {
                                model: TripsModel,
                                as: 'trips',
                                include: [
                                    {
                                        model: BusesModel,
                                        as: 'buses',
                                        attributes: ['plateNumber']
                                    },
                                    {
                                        model: RoutesModel,
                                        as: 'routes',
                                        attributes: ['startPoint', 'endPoint']
                                    },
                                    {
                                        model: DriverModel,
                                        as: 'drivers',
                                        attributes: ['fullName', 'licenseNumber']
                                    }
                                ]
                            }
                        ]
                    }
                ],
                order: [['createdAt', 'DESC']]
            });

            res.status(200).json({
                success: true,
                message: 'Lấy danh sách chi tiết đặt vé thành công',
                data: details
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }



    static async getByBookingId(req, res) {
        try {
            const { bookingId } = req.params;

            const details = await BookingDetailModel.findAll({
                where: { bookingId },
                include: [
                    {
                        model: SeatsModel,
                        as: 'seat',
                        attributes: ['seatNumber', 'status'],
                        include: [
                            {
                                model: BusesModel,
                                as: 'bus',
                                attributes: ['plateNumber']
                            }
                        ]
                    },
                    {
                        model: BookingModel,
                        as: 'booking',
                        include: [
                            {
                                model: UserModel,
                                as: 'user'
                            },
                            {
                                model: TripsModel,
                                as: 'trips',
                                include: [
                                    {
                                        model: BusesModel, as: 'buses',
                                        include: [
                                            {
                                                model: BusTypesModel,
                                                as: 'busType'
                                            }
                                        ]
                                    },
                                    { model: RoutesModel, as: 'routes' },
                                    { model: DriverModel, as: 'drivers' }
                                ]
                            }
                        ]
                    }
                ]
            });

            res.status(200).json({
                success: true,
                message: 'Lấy chi tiết theo booking thành công',
                data: details
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }



    // Lấy chi tiết theo ID
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const detail = await BookingDetailModel.findByPk(id, {
                include: [
                    { model: SeatsModel, as: 'seat' },
                    { model: BookingModel, as: 'booking' }
                ]
            });

            if (!detail) {
                return res.status(404).json({ message: "Không tìm thấy chi tiết đặt vé" });
            }

            res.status(200).json({
                success: true,
                message: 'Lấy chi tiết thành công',
                data: detail
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // Tạo mới chi tiết đặt vé
    static async create(req, res) {
        try {
            const { bookingId, seatId, seatNumber, price } = req.body;

            const newDetail = await BookingDetailModel.create({
                bookingId,
                seatsId,
                seatNumber,
                price
            });

            res.status(201).json({
                success: true,
                message: 'Tạo chi tiết đặt vé thành công',
                data: newDetail
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // Cập nhật chi tiết đặt vé
    static async update(req, res) {
        try {
            const { id } = req.params;
            const { bookingId, seatId, seatNumber, price } = req.body;

            const detail = await BookingDetailModel.findByPk(id);
            if (!detail) {
                return res.status(404).json({ message: 'Không tìm thấy chi tiết đặt vé' });
            }

            await detail.update({
                bookingId,
                seatId,
                seatNumber,
                price
            });

            res.status(200).json({
                success: true,
                message: 'Cập nhật thành công',
                data: detail
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // Xóa chi tiết đặt vé
    static async delete(req, res) {
        try {
            const { id } = req.params;

            await BookingDetailModel.destroy({
                where: { bookingId: id }
            });

            const booking = await BookingModel.findByPk(id);
            if (!booking) {
                return res.status(404).json({ message: 'Không tìm thấy hóa đơn' });
            }

            await booking.destroy();

            res.status(200).json({
                success: true,
                message: 'Xóa thành công hóa đơn'
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = BookingDetailController;
