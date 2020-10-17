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