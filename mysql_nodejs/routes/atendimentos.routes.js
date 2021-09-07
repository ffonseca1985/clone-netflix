module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Olá, seja bem vindo ao nosso atendimento'));

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)

        res.send('Você está na rota de post/atendimentos')
    })

}