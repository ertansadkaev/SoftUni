const mongoose = require('mongoose');

const stoneSchema = new mongoose.Schema({
name: {type: String, required: [true, 'name is required!'], minLength: [2, 'Name should have at least 2 characters!']},
category: {type: String, required: [true, 'category is required!'],minLength: [3, 'Category should have at least 3 characters!']},
color: {type: String, required: [true, 'color is required!'],minLength: [2, 'Color should have at least 2 characters!']},
image: {type: String, 
    required: [true, 'image is required!'],
    match: [/^https?:\/\/.+/, 'Provide valid stone image link!']
},
location: {type: String, required: [true, 'location is required!'],
    minLength: [5, 'Location should have at least 5 characters!'],
    maxLength: [15, 'Formula should have less than 15 characters!']
},
formula: {type: String, required: [true, 'formula is required!'],
    minLength: [3, 'Formula should have at least 3 characters!'],
    maxLength: [30, 'Formula should have less than 30 characters!']
},
description: {type: String, required: [true, 'description is required!'],minLength: [10, 'Description should have at least 10 characters!']},
likedList: [{
    type: mongoose.Types.ObjectId,
    ref: "User",
}],
owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
}
});

const Stone = mongoose.model('Stone', stoneSchema);
module.exports = Stone;