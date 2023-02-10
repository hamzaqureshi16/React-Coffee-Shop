import mongoose, { mongo } from "mongoose";

const RegisterUser = mongoose.Schema(
    {
        username: String,
        password: String,
        email: String,
        branch: String,
        contact: String,
        address: String,
        card: String,
        expiry: String,
        cvv: String,
    }

);


export const register = mongoose.model('RegisteredUsers',RegisterUser);
