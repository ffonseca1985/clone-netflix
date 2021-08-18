const mongoose = require('mongoose');

const Artificer = mongoose.model('Artificer', {
    name: {
		type: String,
		require: true
	},
	expertise: [{
		type: String,
		enum: ['Lança', 'Cajado', 'Turíbulo', 'Escudo', 'Faixa']
	}],
	rank: {
        type: String,
        enum: ['Novato', 'Adepto', 'Trabalhador', 'Mestre', 'Ancião'],
        default: 'Novato'
    }
});


module.exports = Artificer;