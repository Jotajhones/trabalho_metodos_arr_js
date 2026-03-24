export class Content {
    constructor(dados) {
        this.dados = dados;
        this.title = document.querySelector('.headerMainContent')
        this.nome = document.querySelector('.nome');
        this.tipo = document.querySelector('.tipo');
        this.resumo = document.querySelector('.resumo');
        this.sintaxe = document.querySelector('.sintaxe');
        this.polyfill = document.querySelector('.polyfill');
        this.button = document.querySelector('.searchButton');
        this.searchbar = document.querySelector('#searchbar');

        this.metodoAtivo = null;

        this.button.addEventListener('click', () => {
            if (this.metodoAtivo && this.metodoAtivo.algorithm) {
                this.metodoAtivo.algorithm(this.searchbar.value, dados);
            }
        });
    }

    renderContent(idData) {
        const method = this.dados.find(item => item.id === idData)

        if (method) {
            this.metodoAtivo = method; 

            this.title.innerHTML = method.id;
            this.nome.innerHTML = `<span class="tagMainContent">Nome: </span>${method.nome}`;
            this.tipo.innerHTML = `<span class="tagMainContent">Tipo: </span>${method.tipo}`;
            this.resumo.innerHTML = `<span class="tagMainContent">Resumo: </span>${method.resumo}`;
            this.sintaxe.innerHTML = `<span class="tagMainContent">Sintaxe: </span>${method.sintaxe}`;
            this.polyfill.innerHTML = `<span class="tagMainContent">Polyfill: </span>
<pre>
<code>
${method.polyfill}
</code>
</pre>`;

            this.searchbar.value = '';
        }
    }
}