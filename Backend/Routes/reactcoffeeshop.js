import express from "express";
import { register,catalog } from "../Models/reactcoffeeshop.js";

const RegisterRouter = express.Router();
const LoginRouter = express.Router();
const CatalogRouter = express.Router();


CatalogRouter.get('/',async (req,res) =>{
    //get all the data from the ProductCatalog collection
    //log the names of all the collections in the DB

    console.log('catalog');
    try {
        console.log(catalog);
        const data =  await catalog.find();
        console.log(data);
        res.json(data);

    }
    catch(error){
        console.log(error);
    }

})

LoginRouter.post('/', async (req, res) =>{ 
    const data = req.body;
    try {
        await register.findOne({username:data.email} && {password:data.password} ).then( (result) =>{
            if(result === null){
                res.json('not found');
            }
            else{
                res.json('found');
            }


        })
    } catch (error) {
        console.log(error);
    }

});

RegisterRouter.post('/', async (req, res) =>{ 
    const data = req.body;

     const newuser = new register({
        email: data.email.toString(),
        password: data.password.toString(),
        username: data.username.toString(),
        branch: data.branch.toString(),
        contact: data.contact.toString(),
        address: data.address.toString(),
        card: data.card.toString(),
        expiry: data.expiry.toString(),
        cvv: data.cvv.toString(),
     })

     try{
        await register.findOne({email:data.email.toString()}).then( async result =>{
            if(result == null){
                try {
                    await newuser.save();
                    res.json('saved');
                } catch (error) {
                    res.json('not saved');
                }
            }
            else{
                res.json('user already exists');
                
            }

        })  
     }
     catch(error){
            console.log(error);
     }
    }
);


export {RegisterRouter};
export {LoginRouter};
export {CatalogRouter};


