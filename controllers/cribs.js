const cribSchema = require('../models/cribModal');
const cribModel = require('../models/cribModal');



// GET Crib list
const cribList = async (req, res) => {
    try {
        await cribSchema.find({}).then(result => {
            res.status(200).json({
                data: result
            })
        }, err => {
            return res.status(400).json({
                error: err
            })
        });
    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
}



// Add Crib 
const addCrib = async (req, res) => {
    try {
        const crib = new cribSchema(req.body);
        await crib.save().then((result) => {
            res.status(200).json({
                msg: 'One Record added successfully!'
            })
        })
    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
}

const editCrib = async (req, res) => {
    try {
        await cribSchema.updateOne({ "_id": req.params.id }, { $set: { name: req.body.name, location: req.body.location, img: req.body.img } }).then(result => {
            res.status(200).json({
                msg: 'One Record updated successfully!'
            })
        }, err => {
            return res.status(400).json({
                error: err
            })
        });
    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
}

const deleteCrib = async (req, res) => {
    try {
        await cribSchema.deleteOne({ "_id": req.params.id }).then(result => {
            res.status(200).json({
                msg: 'One Record deleted successfully!'
            })
        }, err => {
            return res.status(400).json({
                error: err
            })
        });
    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
}

module.exports = {
    cribList,
    addCrib,
    editCrib,
    deleteCrib
}