const mongoose = require('mongoose')

const schema = mongoose.Schema

const PersonoSchema = new schema({

    name: {
        type: String,
        required: true

    },
    age: { type: Number },
    favoriteFoods: [String]


})


module.exports = mongoose.model('persono', PersonoSchema)