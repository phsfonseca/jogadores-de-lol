//console.log(fluxo); console.log(fluxo[0]); console.log(fluxo[0].titulo)

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // dois == servem para comparar, um = serve para atribuir valor
    if (!campoPesquisa) {
        section.innerHTML = "<h2>Nenhum jogador foi encontrado</h2>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicia uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

// Interage sobre cada dado da lista de dados "para cada dado dentro da lista de dados"
    for (let fluxo of fluxos) {
        titulo = fluxo.titulo.toLowerCase()
        descricao = fluxo.descricao.toLowerCase()
        tags = fluxo.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>${fluxo.titulo}</h2>
                <p>Idade: ${fluxo.idade} anos</p>
                <p>Posição: ${fluxo.posicao}</p>
                <p>Bio: ${fluxo.descricao}</p>
                <a href=${fluxo.lolfandom} target="blank">LoL Fandom</a>
                <a href=${fluxo.lolprosgg} target="blank">LoL Pros</a>
            </div>
        `;
        }
    }
    // se o resultados nao tiver nada/nao existir, tome essa ação
    if (!resultados) {
        resultados = "<h2>Nenhum jogador foi encontrado. Você precisa digitar o nome, posição ou o time.</h2>"
        
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados
}

