const customExpress = require('./config/customExpress')
const conexao = require('./structure/connection')
const tables = require('./structure/tables')

conexao.connect(err => {
    if(err){
        console.log(err)
    }
    else{
        console.log('Banco MySql conectado com sucesso!')
        
        tables.init(conexao)
        
        const app = customExpress()
        app.listen(3000, console.log('Porta 3000 conetada com sucesso!'))
    }
})
