

        document.addEventListener('click', (e) => {
            const listaClasse = Array.prototype.slice.call(e.target.classList);
            if (e.target && listaClasse.includes('acessarFilme')) {
                const url = e.target.dataset.url;
                window.open(url, '_blank');
            }

            if (e.target && listaClasse.includes('excluirFilme')) {

                const response = confirm('Deseja Excluir esse filme?');
                if (response) {
                    const id = e.target.dataset.id;
                    document.getElementById(id).remove();
                }

                
            }
        });

        let dados = {
            titulo: '',
            ano: 0,
            categoria: '',
            link: '',
        };

        const atualizarDados = () => {
            dados = {
                titulo: document.getElementById('titulo').value,
                ano: document.getElementById('ano').value,
                categoria: document.getElementById('categoria').value,
                link: document.getElementById('link').value,
            };

            document.getElementById('debug').innerHTML = JSON.stringify(dados);
        };

        const montaItem = () => {
            const id = new Date().getTime(); // gera um id unico                
            const item = `
                        <tr id="${id}">
                            <td>${dados.titulo}</td>
                            <td>${dados.categoria}</td>
                            <td>${dados.ano}</td>
                            <td class="text-right">
                                <button class="btn btn-info acessarFilme" data-url="${dados.link}">Acessar</button>
                                <button class="btn btn-danger excluirFilme" data-id="${id}">Excluir</button>
                            </td>
                        </tr>`;

            return item;
        };

        const cadastrar = () => {

            if (
                dados.titulo == '' || 
                dados.ano == 0 || 
                dados.categoria == '' || 
                dados.link == ''
            ) {
                alert('Preencha todos os campos!');
            } else {
                document
                .getElementById('lista_filmes')
                .insertAdjacentHTML('beforeEnd', montaItem());
                dados = {};
            }            
        };