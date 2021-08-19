const express = require('express');
const route = express.Router();

const Atribute = require('../models/atribute');


// CREATE
route.post('/', async (req, res) => {

    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const atribute = await new Atribute(req.body).save();

        res.json({ error: false, atribute });

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
    
});

// READ ALL OR SPECIFIC FROM BODY
route.get('/', async (req, res) => {

    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const atributes = await Atribute.find(req.body.filters, 'name');

        res.json({error: false, atributes});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
    
});

// UPDATE SPECIFIC FROM URL ID
route.put('/:id', async (req, res) => {
    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {
        const atribute = await Atribute.findByIdAndUpdate(req.params.id, req.body);

        res.json({error: false, atribute});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }

});

// DELETE SPECIFIC FROM URL ID
route.delete('/:id', async (req, res) => {
    
    // REQ -> DADOS DA REQUISIÇÃO
    // RES -> OBJETO COM FUNÇÕES E DADOS DA RESPOSTA
    try {

        const atribute = await Atribute.findByIdAndDelete(req.params.id);

        res.json({error: false});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }

});

module.exports = route;