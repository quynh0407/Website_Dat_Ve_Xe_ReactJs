const RoutesModel = require('../../models/routesModel');
const { Op } = require("sequelize");
class RoutesController {

    //------------------[ GET ]------------------
    static async get(req, res) {
        try {
            const routes = await RoutesModel.findAll({
                order: [['id', 'DESC']]
            });
            res.status(200).json({
                "status": 200,
                "message": "Lấy danh sách thành công",
                "data": routes
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //------------------[ GET BY ID ]------------------
    static async getById(req, res) {
        try {
            const { id } = req.query;
            const routes = await RoutesModel.findByPk(id);

            if (!routes) {
                return res.status(404).json({ message: "Id không tồn tại" });
            }

            res.status(200).json({
                "status": 200,
                "success": true,
                "message": "Lấy tuyen duong thành công",
                "data": routes
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //------------------[ CREATE ]------------------
    static async create(req, res) {
        try {
            const {
                startPoint,
                endPoint,
                distance,
                time,
                startProvinceID,
                startDistrictID,
                startWardID,
                endProvinceID,
                endDistrictID,
                endWardID
            } = req.body;

            const existedRoute = await RoutesModel.findOne({
                where: {
                    [Op.or]: [
                        { startPoint, endPoint },
                        { startPoint: endPoint, endPoint: startPoint }
                    ]
                }
            });

            if (existedRoute) {
                return res.status(400).json({
                    success: false,
                    message: "Tuyến đường đã tồn tại (bao gồm cả chiều ngược)"
                });
            }

            const routes = await RoutesModel.create({
                startPoint,
                endPoint,
                distance,
                time,
                startProvinceID,
                startDistrictID,
                startWardID,
                endProvinceID,
                endDistrictID,
                endWardID
            });

            const route2 = await RoutesModel.create({
                startPoint: endPoint,
                endPoint: startPoint,
                distance,
                time,
                startProvinceID: endProvinceID,
                startDistrictID: endDistrictID,
                startWardID: endWardID,
                endProvinceID: startProvinceID,
                endDistrictID: startDistrictID,
                endWardID: startWardID
            });


            res.status(201).json({
                success: true,
                message: "Thêm mới thành công",
                routes: [routes, route2]
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    //------------------[ UPDATE ]------------------
    static async update(req, res) {
        try {
            const { id } = req.params;

            const {
                startPoint,
                endPoint,
                distance,
                time,
                startProvinceID,
                startDistrictID,
                startWardID,
                endProvinceID,
                endDistrictID,
                endWardID
            } = req.body;

            const routes = await RoutesModel.findByPk(id);
            if (!routes) {
                return res.status(404).json({ message: "Id không tồn tại" });
            }

            const routes2 = await RoutesModel.findOne({
                where: {
                    startPoint: routes.endPoint,
                    endPoint: routes.startPoint
                }
            });

            if (routes) {
                routes.startPoint = startPoint;
                routes.endPoint = endPoint;
                routes.distance = distance;
                routes.startProvinceID = startProvinceID;
                routes.startDistrictID = startDistrictID;
                routes.startWardID = startWardID;
                routes.endProvinceID = endProvinceID;
                routes.endDistrictID = endDistrictID;
                routes.endWardID = endWardID;
                routes.time = time;

                await routes.save();
            }

            if (routes2) {
                routes2.startPoint = endPoint;
                routes2.endPoint = startPoint;
                routes2.distance = distance;
                routes2.time = time;
                routes2.startProvinceID = endProvinceID;
                routes2.startDistrictID = endDistrictID;
                routes2.startWardID = endWardID;
                routes2.endProvinceID = startProvinceID;
                routes2.endDistrictID = startDistrictID;
                routes2.endWardID = startWardID;

                await routes2.save();
            }
            res.status(200).json({
                success: true,
                message: "Cập nhật tuyen duong thành công",
                routes
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Cập nhật không thành công",
                error: error.message
            });
        }
    }
    //------------------[ DELETE ]------------------
    static async delete(req, res) {
        try {
            const { id } = req.params;

            const route1 = await RoutesModel.findByPk(id);
            if (!route1) {
                return res.status(404).json({
                    success: false,
                    message: "Id tuyến đường không tồn tại"
                });
            }
            if (route1) {
                await route1.destroy();
            }

            const route2 = await RoutesModel.findOne({
                where: {
                    startPoint: route1.endPoint,
                    endPoint: route1.startPoint
                }
            });

            if (route2) {
                await route2.destroy();
            }

            res.status(200).json({
                success: true,
                message: "Xoá thành công cả tuyến đi và tuyến ngược"
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Xoá không thành công",
                error: error.message
            });
        }
    }

}

module.exports = RoutesController;
