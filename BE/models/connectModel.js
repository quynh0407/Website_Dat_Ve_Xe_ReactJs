const TripsModel = require('./tripsModel');
const BusesModel = require('./busesModel');
const DriverModel = require('./driverModel');
const RoutesModel = require('./routesModel');
const SeatsModel = require('./seatsModel');
const BusTypesModel = require('./busTypesModel');
const BookingModel = require('./bookingModel');
const UserModel = require('./userModel');
const BookingDetailModel = require('./bookingDetailModel');
const BlogCategoryModel = require('./blogCategoryModel')
const BlogModel = require('./blogModel')


//--------------------- [ Thiết lập quan hệ ]------------------------

// Route - Trip
RoutesModel.hasMany(TripsModel, { foreignKey: 'routeId', as: 'trips' });
TripsModel.belongsTo(RoutesModel, { foreignKey: 'routeId', as: 'routes' });

// Bus - Trip
BusesModel.hasMany(TripsModel, { foreignKey: 'busID', as: 'trips' });
TripsModel.belongsTo(BusesModel, { foreignKey: 'busID', as: 'buses' });

// Driver - Trip
DriverModel.hasMany(TripsModel, { foreignKey: 'driverId', as: 'trips' });
TripsModel.belongsTo(DriverModel, { foreignKey: 'driverId', as: 'drivers' });

// Bus - Seats
BusesModel.hasMany(SeatsModel, { foreignKey: 'busID', as: 'seats' });
SeatsModel.belongsTo(BusesModel, { foreignKey: 'busID', as: 'bus' });

// Buses - BusType
BusesModel.belongsTo(BusTypesModel, { foreignKey: 'busTypeId', as: 'busType' });
BusTypesModel.hasMany(BusesModel, { foreignKey: 'busTypeId', as: 'buses' });

// Driver - Bus
DriverModel.hasOne(BusesModel, { foreignKey: 'driverId', as: 'bus' });
BusesModel.belongsTo(DriverModel, { foreignKey: 'driverId', as: 'drivers' });


// Booking - Trip
TripsModel.hasMany(BookingModel, { foreignKey: 'tripId', as: 'bookings' });
BookingModel.belongsTo(TripsModel, { foreignKey: 'tripId', as: 'trips' });

// // Booking - Seat
// SeatsModel.hasMany(BookingModel, { foreignKey: 'seatId', as: 'bookings' });
// BookingModel.belongsTo(SeatsModel, { foreignKey: 'seatId', as: 'seat' });

// Quan hệ User và Booking
UserModel.hasMany(BookingModel, { foreignKey: 'userId', as: 'bookings' });
BookingModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });

// Quan hệ Booking và Buses
BookingModel.belongsTo(BusesModel, { foreignKey: 'busId', as: 'bus' });

// Quan hệ BookingDetail và Seats
BookingDetailModel.belongsTo(SeatsModel, { foreignKey: 'seatsId', as: 'seatDetail' });  
SeatsModel.hasMany(BookingDetailModel, { foreignKey: 'seatsId', as: 'seatDetails' });

// Quan hệ giữa Booking và BookingDetail
BookingModel.hasMany(BookingDetailModel, { foreignKey: 'bookingId', as: 'details' });
BookingDetailModel.belongsTo(BookingModel, { foreignKey: 'bookingId', as: 'booking' });

// Quan hệ giữa Trips và Routes
TripsModel.belongsTo(RoutesModel, { foreignKey: 'routeId', as: 'route' });

// Thiết lập quan hệ với BlogModel
BlogCategoryModel.hasMany(BlogModel, {
    foreignKey: 'categoryId',
    as: 'blogs'
});

BlogModel.belongsTo(BlogCategoryModel, {
    foreignKey: 'categoryId',
    as: 'blogCategory'
});

module.exports = { TripsModel, BusTypesModel, BusesModel, DriverModel, RoutesModel, SeatsModel, BookingModel, BookingDetailModel, UserModel , BlogCategoryModel, BlogModel};
