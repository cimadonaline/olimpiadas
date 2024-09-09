function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa, converte para minúsculas para pesquisa case-insensitive
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa.trim() || /^[.,\s]+$/.test(campoPesquisa)) {
        // Se a pesquisa for inválida, exibe uma mensagem e encerra a função
        section.innerHTML = "<p>Nenhum resultado encontrado. Por favor, insira um termo de pesquisa válido.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tag.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se a palavra foi encontrada, cria um elemento HTML para o resultado
            resultados += `
                <div class="item-resultado">  
                    <h2>
                        <a href="${dado.link}" target="_blank">
                            ${dado.titulo.replace(new RegExp(campoPesquisa, 'gi'), match => `<mark>${match}</mark>`)}
                        </a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}">Mais informações</a>
                </div>
            `;
        }
    }

    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado.</p>";
    }

    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}
