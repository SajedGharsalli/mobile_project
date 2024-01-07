const mongoose = require('mongoose');
const router = require('../api/User');
const secretKey = require('../secret.js');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;




const UserSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        token: String

    }
);

//generate a JWT token
UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, secretKey);
    this.token = token;
    return token;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;