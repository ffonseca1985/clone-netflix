const mongoose = require('mongoose');

const Weapon = mongoose.model('Weapon', {
    name: {
		type: String,
		require: true
	},
	creator: { // FICA ASSIM POR ESTUDO, GRAVE NOME, NÃO RELAÇÃO
		type: mongoose.Types.ObjectId,
		ref: 'Artificer'
	},
	type: {
		type: String,
		enum: ['Lança', 'Cajado', 'Turíbulo', 'Escudo', 'Faixa'],
		require: true
	},
	hilt: [{
        grip: {
			type: Number, //1-uma Mão //2-duas Mãos
			require: true
		}, 
		hand: {
			type: Number,//0-ambas //1-primária //2-secundária
			require: true
		} 
        }], 
	damage: Number,
	atributes: [{
		type: mongoose.Types.ObjectId,
		ref: 'Atribute'
	}],
	knowledges: Array
});


module.exports = Weapon;