let carregar = (localizacao, elementoId) => {
    fetch(`https://vmjlol.github.io/ListaExterna/api/telefones.json`)
        .then((response) => response.json())
        .then((data) => {
            let newHTML = ``;
            
            let dadosFiltrados = data.filter(item => item.localizacao === localizacao);

            for (let i = 0; i < dadosFiltrados.length; i++) {
                let dados = dadosFiltrados[i];

                newHTML += `
                    <tr>
                        <td>${dados.numero}</td>
                        <td>${dados.nome}</td>
                    </tr>
                `;
            }

            document.getElementById(elementoId).innerHTML = newHTML;
        });
}
