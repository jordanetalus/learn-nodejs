const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    status: {
        type: String, 
        enum: ["brouillon","publier"],
    },

    author: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

});


module.exports = mongoose.model('Post',postSchema);
