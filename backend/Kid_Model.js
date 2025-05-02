const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    class_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    photo_url: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Child', childSchema);
