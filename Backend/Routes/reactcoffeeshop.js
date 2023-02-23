import express from "express";
import { register,catalog,cart } from "../Models/reactcoffeeshop.js";

const RegisterRouter = express.Router();
const LoginRouter = express.Router();
const CatalogRouter = express.Router();
const MenuRouter = express.Router();
const CartRouter = express.Router();
const RemoveRouter = express.Router();


RemoveRouter.put('/',   (req,res)=>{
    
    const data = req.body;
    if(data.action === "increase"){
          cart.findOne({id:data.id}).then( (result) =>{
            result.quantity = result.quantity + 1;
            result.save();

            res.json(result);
        }
        )
    }
    else if(data.action === "decrease"){
          cart.findOne({id:data.id}).then( (result) =>{
            if(result.quantity > 1){
                result.quantity = result.quantity - 1;
                result.save();
                res.json(result);
            }
            else{
                res.json('error');
            }
        }
        )
    }
})

RemoveRouter.delete('/',async (req, res)=>{
    const data = req.body;
    const result =  await cart.findOneAndDelete({id:data.id});
    if(result !== null){
        res.json('Successfully removed');
    }
    else{
        res.json('not found');
    }

});

CartRouter.get('/',async (req,res)=>{
    const data = await cart.find();
    if(data!==null){
        res.json(data);   
    }
    else{
        res.json('not found');
    }
})

MenuRouter.post('/',async (req,res) =>{
    const data = req.body;
    try {
        await cart.findOne({id:data.id}).then( async (res) =>{  
            if(res !== null){
                res.quantity = res.quantity + 1;
                res.save();
                res.json("saved");

            }
            else{
                await catalog.findOne({id:data.id}).then((res)=>{
                    if(res != null){
                        const newcart = new cart({
                            id:res.id,
                            name:res.name,
                            price:res.price,
                            url:res.url,
                            category:res.category,
                            ingredients:res.ingredients,
                            quantity:1
                        })
                        try {
                            newcart.save();
                            res.json("saved");
                        } catch (error) {
                            res.json("not saved")
                        }
                        
                    }
                });
               
            }   
        } )
        
    } catch (error) {
        res.json('error');
    }
});


CatalogRouter.get('/',async (req,res) =>{
   
    
    try {
        const data =  await catalog.find();
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
export {MenuRouter};
export {CartRouter};
export {RemoveRouter};

