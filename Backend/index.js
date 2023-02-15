import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import  express  from "express";
import {RegisterRouter, LoginRouter} from './Routes/reactcoffeeshop.js';


const app = express();
const url = '';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("DB connected"));
app.listen(3000);

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use('/login',LoginRouter);
app.use('/register',RegisterRouter);
