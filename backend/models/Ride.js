const mongoose = require('mongoose');
const router = require('../api/Ride.js');
const Schema = mongoose.Schema;
const RideSchema = new Schema(
    {
        departure: String,
        destination: String,
        date: Date,

        meetingLocation: String,
        price: Number,
        carModel: String,
        prefernces: String,

    }
);

const Ride = mongoose.model("Ride", RideSchema);
module.exports = Ride;