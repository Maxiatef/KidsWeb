const KidModel = require('../Model/Kid_Model.js');
const asyncHandler = require('express-async-handler');


const CreateKid = asyncHandler(async (req, res) => {
    const { first_name, last_name, date_of_birth, gender, class_id } = req.body;
    if (!first_name || !last_name || !date_of_birth || !gender ) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const kid = new KidModel({
        first_name: first_name,
        last_name: last_name,
        date_of_birth: date_of_birth,
        gender:gender,
        class_id: class_id
    });
    try {
        const createdKid = await kid.save();
        res.status(201).json(createdKid);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = {
    CreateKid
};