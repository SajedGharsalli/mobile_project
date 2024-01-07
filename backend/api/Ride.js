const express = require('express');
const router = express.Router();
const auth = require('../Middleware/auth');

//mongodb ride model 
const Ride = require('../models/Ride');


// Middleware to check authentication using the token
//router.use(auth);


//--------------------------------------------------------Offer a ride-----------------------------------------------//
router.post('/offer', (req, res) => {
    let { departure, destination, date, meetingLocation, price, carModel, preferences } = req.body;
    departure = departure ? departure.trim() : ' ';
    destination = destination ? destination.trim() : ' ';
    date = date ? date.trim() : '';
    meetingLocation = meetingLocation ? meetingLocation.trim() : ' ';
    carModel = carModel ? carModel.trim() : ' ';
    preferences = preferences;

    price = price;
    // phoneNumber = req.user.phoneNumber;



    //check empty fields
    if (departure === "" || destination === "" || date === "" || carModel === "" || price === "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields !"

        });
    }

    //create new ride
    else {
        const newRide = new Ride({
            departure,
            destination,
            date,

            meetingLocation,
            price,
            carModel,
            preferences,


        });
        newRide.save().then(result => {
            res.json({
                status: "SUCCESS",
                message: "Ride added successfully",
                data: result,
            })
        }).catch(err => {
            res.json({
                status: "FAILED",
                message: "error occured when adding ride"
            });
            console.log(err)
        })


    }
})
//---------------------------------------------------Search Ride-------------------------------------------//
router.post('/search', auth, async (req, res) => {
    let { departure, destination, date, seatNumber } = req.body;
    departure = departure ? departure.trim() : '';
    destination = destination ? destination.trim() : '';
    date = date ? date.trim() : '';
    seatNumber = seatNumber ? seatNumber.trim() : '';

    userId = req.user._id;


    //check empty fields
    if (departure === "" || destination === "" || date === "" || seatNumber === "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields !"

        });
    }

    //check for existing ride
    else {
        const existingRide = await Ride.find({ departure, destination, date, seatNumber });

        if (existingRide) {
            return res.json({
                status: "Success",
                message: "you have a ride",
                data: {
                    existingRide
                }
            });
        } else {
            return res.json({
                status: "Success",
                message: "No ride found , try again later"
            });

        }
    };


})

module.exports = router;

