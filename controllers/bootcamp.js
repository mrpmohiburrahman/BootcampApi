const Bootcamp = require('../models/Bootcamp')

exports.createBootcamp=async (req, res, next) =>{
    try {
        req.body.user=req.user.id
        const bootcamp = await Bootcamp.create(req.body)
        res.status(200).json({
            success:true,
            data:bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        })
    }
}

exports.getUserBootcamps=async (req, res, next) =>{
    try {
        const userId=req.user.id
        const bootcamps = await Bootcamp.find({user:userId})

        return res.status(200).json({success:true, data:bootcamps})
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        })
    }
}

exports.deleteBootcamp=async (req, res, next) =>{
    try {
        await Bootcamp.findByIdAndDelete(req.params.id)

        return res.status(200).json({success:true})
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        })
    }
}

exports.explore=async(req,res,next)=>{
    try {
        //1. user should not be able to explore his/her own bootcamp
        const userId = req.user.id
        const bootcamps = await Bootcamp.find({user:{ $ne:userId}}).populate("user")
        
        res.status(200).json({
            success:true,
            data:bootcamps,
            total: bootcamps.length
        })

        //2. user should not be able to explore already viewed bootcamp
    } catch (error) {
        res.status(400).json({success:false})
    }
}