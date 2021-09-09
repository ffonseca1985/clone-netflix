const Atendimento = require('../model/atendimentos')


module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Olá, seja bem vindo ao nosso atendimento'));

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })

}