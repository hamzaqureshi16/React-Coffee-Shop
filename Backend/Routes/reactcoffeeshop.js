import express from "express";
import { register,catalog,cart } from "../Models/reactcoffeeshop.js";
import { quantity, deleteItem, getcart, getmenu, getproducts, login, registeruser} from "../Controllers/Controllers.js";

const RegisterRouter = express.Router();
const LoginRouter = express.Router();
const CatalogRouter = express.Router();
const MenuRouter = express.Router();
const CartRouter = express.Router();
const RemoveRouter = express.Router();


RemoveRouter.put('/',  quantity);
RemoveRouter.delete('/',deleteItem);
CartRouter.get('/',getcart)
MenuRouter.post('/',getmenu);
CatalogRouter.get('/',getproducts)
LoginRouter.post('/',login);
RegisterRouter.post('/', registeruser);


export {RegisterRouter};
export {LoginRouter};
export {CatalogRouter};
export {MenuRouter};
export {CartRouter};
export {RemoveRouter};

