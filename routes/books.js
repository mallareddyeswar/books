const express = require("express");
const router = express.Router();

const Books = require("../models/Books");





router.get("/",async(req,res)=>{
    try{
        const books = await Books.find();
        res.status(200).json(books);
    }catch(err){
        res.status(500).json({message:err});
    }

    });







router.get('/:bookid',async (req,res)=>{
    try{
        const id = req.params.bookid;
        const books = await Books.findById(id);
        if(books){
            res.status(200).json(books);
        }else{
            res.status(400).json({message: "No Valid Entry Found"});
        }
    }catch(err){
        res.status(500).json({message:err});
    }
       
   
    });
    





    router.post("/",async (req,res)=>{
       const mybooks = new Books({
       
           title:req.body.title,
           genre:req.body.genre
       });
       try{
           const savedbook = await mybooks.save();
           res.status(201).json({
               message:"Handling Post reqiest to api/book - success!"
           });
       }catch(err){
        res.status(500).json({message:err});
       }
        });
    //    mybooks
    //    .save()
    //    .then(result=>{
    //        res.status(201).json({
    //         message:"Handling post req to /api/books -success" ,
    //         result
    //        });
    //    })
       


    



    module.exports = router;