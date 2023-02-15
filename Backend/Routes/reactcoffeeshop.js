import express from "express";
import { register } from "../Models/reactcoffeeshop.js";

const RegisterRouter = express.Router();
const LoginRouter = express.Router();

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



