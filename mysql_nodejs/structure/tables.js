class tables {
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacao text, PRIMARY KEY(id))'

        this.conexao.query(sql, err => {
            if(err){
                console.log(err)
            }
            else{
                console.log('Tabelas criadas com sucesso!')
            }
        })


    }
}

module.exports = new tables