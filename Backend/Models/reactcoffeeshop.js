import mongoose, { mongo } from "mongoose";


const Cart = mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    url:String,
    categoy:String,
    ingredients:String,
    quantity:Number
})
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

export const catalog = mongoose.model('productcatalog',Catalog);
export const register = mongoose.model('RegisteredUsers',RegisterUser);
export const cart = mongoose.model('cart',Cart);
