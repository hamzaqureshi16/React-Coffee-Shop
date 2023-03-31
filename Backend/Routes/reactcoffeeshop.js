import express from "express";
import { quantity,remove, getCart, getMenu, getProducts, login , registerUser} from "../Controllers/reactcofffeshop.js";

const RegisterRouter = express.Router();
const LoginRouter = express.Router();
const CatalogRouter = express.Router();
const MenuRouter = express.Router();
const CartRouter = express.Router();
const RemoveRouter = express.Router();


RemoveRouter.put('/',   quantity)
RemoveRouter.delete('/',remove);
CartRouter.get('/',getCart)
MenuRouter.post('/',()=>console.log('here'));
CatalogRouter.get('/',getProducts)
LoginRouter.post('/',login);
RegisterRouter.post('/', registerUser);


export {RegisterRouter};
export {LoginRouter};
export {CatalogRouter};
export {MenuRouter};
export {CartRouter};
export {RemoveRouter};

