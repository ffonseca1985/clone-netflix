document.addEventListener('click', (e) => {
    const classList = Array.prototype.slice.call(e.target.classList);
    
    if (e.target && classList.includes('acessarLink')){
        const url = e.target.dataset.url;
        window.open(url, '_blank');
    }

    if (e.target && classList.includes('apagarSerie')){
        const response = confirm('Deseja excluir o filme?');

        if (response){
            const id = e.target.dataset.id;
            document.getElementById(id).remove();
        }
    }
});
let dados = {
    titulo: '',
    categoria: '',
    ano: 0,
    link: ''
};

const atualizarDados = () => {
    dados = {
        titulo: document.getElementById('titulo').value,
        categoria: document.getElementById('categoria').value,
        ano: document.getElementById('ano').value,
        link: document.getElementById('link').value
    }

    document.getElementById('debug').innerHTML = JSON.stringify(dados);
};

const montaItem = () => {
    const id = new Date().getTime();

    const item =
    `<tr id="${id}">
        <td>${dados.titulo}</td>
        <td>${dados.categoria}</td>
        <td>${dados.ano}</td>
        <td>
            <button class="btn btn-info acessarLink" data-url='${dados.link}'>Acessar</button>
            <button class="btn btn-danger apagarSerie" data-id='${id}'>Excluir</button>
        </td>
    </tr>`;

    return item;
};

const cadastrar_filme = () => {

    if (dados.titulo == '' || dados.categoria == '' || dados.ano == 0 || dados.link == '') {
        alert('Preencha todos os dados do filme!');
    }
    else{
        document.getElementById('lista_filmes').insertAdjacentHTML('beforeEnd', montaItem());
        document.getElementById('my-form').reset();
        dados = {};
    }
    
}
