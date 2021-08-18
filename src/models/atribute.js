const mongoose = require('mongoose');

const Atribute = mongoose.model('Atribute', {
    name: {
		type: String,
		require: true
	},
	buff: [{
        stats: {
		    type: String,
		    enum: ["hp", "hp_regen", "ase", "ase_regen", "physical_power", "physical_defense",
            "soul_power", "soul_defense", "attack_speed", "mov_speed", "crit_chance"],
		    require: true
        },
        value: {
            type: Number,
            require: true
        }
    }]
	
});


module.exports = Atribute;