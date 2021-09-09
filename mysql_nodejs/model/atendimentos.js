// Instalar o npm install moment
const moment = require('moment')

const conexao = require('../structure/connection')


class Atendimento{
    adiciona(atendimento, res){
        // Formatar entradas
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        // Validação de regras de negocio
        const dataEhValida = moment(data).isAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length > 5

        const validacoes =[
            {
                name: 'data',
                valida: dataEhValida,
                msg: 'A data do agendamento deve ser maior que a data atual!'
            },
            {
                name: 'cliente',
                valida: clienteEhValido,
                msg: 'O nome do cliente deve possuir no mínimo 5 caracteres!'
            }]

        const erros = validacoes.filter(campo => !campo.valida)
        const existemErros = erros.length > 0

        if (existemErros){
            res.status(400).json(erros)
        }
        else{ // Se não possui erros nas regras de negocio, envia para o banco
            const atendimentoDatado = {...atendimento, dataCriacao, data}
        
            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultados) =>{
                if(erro){
                    res.status(400).json(erro)
                }
                else{
                    res.status(201).json(resultados)
                }
            })
        }
        
        
    }
}

module.exports = new Atendimento