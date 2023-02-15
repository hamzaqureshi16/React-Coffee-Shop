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

const Catalog = mongoose.Schema({
    id:String,
    name:String,
    price:String,
    url:String,
    categoy:String,
    ingredients:String
    
});

export const catalog = mongoose.model('ProductCatalog',Catalog);
export const register = mongoose.model('RegisteredUsers',RegisterUser);
