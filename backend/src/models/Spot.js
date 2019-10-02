const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        /**
         * Esse tipo de dado serve para pegar o usuario de um Schema já existente
         * Nesse caso do model User criado anteriormente
         */
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Spot', SpotSchema);