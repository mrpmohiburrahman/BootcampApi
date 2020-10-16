// const mongoose = require('mongoose')

// const BootcampSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:[true,"Please add the title"],
//         unique:true,
//         trim:true,
//         maxlength:[20, "name can not be more than 20 letters"]
//     },
//     description:{
//         type:String,
//         required:[true, "Please add the description"]
//     },
//     website:{
//         type:String,
//         required:[true, "Please add the description"]
//     },
//     contact:{
//         type:String,
//     },
//     email:{
//         type:String,
//         match:[
//             /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//         ],
//     },
//     address:{
//         type:String,
//         required:[true, "Please add an address"],
//     },
//     careers:{
//         //Array of strings
//         type:[String],
//         required:true,
//     },
//     jobGuarantee:{
//         type:Boolean,
//         default:false,
//     },
//     isScholarship:{
//         type:Boolean,
//         default:false,
//     },
//     createdAt:{
//         type:Date,
//         default:Date.now,
//     },
//     coverColor:{
//         type:Object,
//         default:{
//             name:"orange",
//             code:"#f2994a",
//         },
//     },
//     user:{
//         type:mongoose.Schema.ObjectId,
//         ref:"User",
//         required:true,
//     },
// })

// module.exports=mongoose.model("Bootcamp",BootcampSchema)

const express = require('express')
const {createBootcamp} =require('../controllers/bootcamp')