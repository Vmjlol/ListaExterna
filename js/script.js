
let carregar = () => {
    fetch(`https://vmjlol.github.io/ListaExterna/api/telefones.json`)
        .then((response) => response.json())
        .then((data) => {
            let newHTML = ``
            for (let i = 0; i < data.length; i++) {
                let dados = data[i];

               
                        newHTML += `
                        <tr class="${dados.tag}">
                            <td>${dados.numero}</td>
                            <td>${dados.nome}</td>
                            <td>${dados.localizacao}</td>
                        </tr>
                        `
                   
            }
            document.getElementById('tbody').innerHTML = newHTML;
        });
}


