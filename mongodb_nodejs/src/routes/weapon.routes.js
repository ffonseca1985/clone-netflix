const express = require('express');
const route = express.Router();

const Weapon = require('../models/weapon');


// CREATE
route.post('/', async (req, res) => {

    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const weapon = await new Weapon(req.body).save();

        res.json({ error: false, weapon });

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
    

});

// READ ALL OR SPECIFIC FROM BODY
route.get('/', async (req, res) => {

    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const weapons = await Weapon.find(req.body.filters);

        res.json({error: false, weapons});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }

});

// READ SPECIFIC FROM URL
route.get('/:id', async (req, res) => {

    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const weapons = await Weapon.findById(req.params.id).populate('atributes', 'name');

        res.json({error: false, weapons});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
    

});

// UPDATE SPECIFIC FROM URL ID
route.put('/:id', async (req, res) => {
    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {
        const weapon = await Weapon.findByIdAndUpdate(req.params.id, req.body);

        res.json({error: false, weapon});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
});

// DELETE SPECIFIC FROM URL ID
route.delete('/:id', async (req, res) => {
    
    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const weapon = await Weapon.findByIdAndDedelete(req.params.id);

        res.json({error: false});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
});

module.exports = route;