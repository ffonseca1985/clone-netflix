const express = require('express');
const route = express.Router();

const Artificer = require('../models/artificer');
const Weapon = require('../models/weapon');


// CREATE
route.post('/', async (req, res) => {

    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        //const artificer = await new Artificer(req.body).save();

        const arti = await Artificer.insertMany(req.body);

        res.json({ error: false, arti });

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
    
});


// READ ALL OR SPECIFIC FROM BODY
route.get('/', async (req, res) => {

    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const artificers = await Artificer.find(req.body.filters);

        res.json({error: false, artificers});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
    
});

// READ ALL ARTIFIRCER WORKS
route.get('/:id', async (req, res) => {

    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const artificer = await Artificer.find(req.body.filters);
        const works = await Weapon.find({ creator: req.params.id });

        res.json({error: false, artifice : { ...artificer._doc, works}});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
    
});

// UPDATE SPECIFIC FROM URL ID
route.put('/:id', async (req, res) => {
    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {
        const artificer = await Artificer.findByIdAndUpdate(req.params.id, req.body);

        res.json({error: false, artificer});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }

});


// DELETE SPECIFIC FROM URL ID
route.delete('/:id', async (req, res) => {
    
    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const artificer = await Artificer.findByIdAndDelete(req.params.id);

        res.json({error: false});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }

});

module.exports = route;