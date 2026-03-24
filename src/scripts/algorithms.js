
export function includes(valorDigitado, todosOsDados) {
    const result = document.querySelector('.result');
    const termoBusca = valorDigitado.toLowerCase().trim();
    const listaDeIds = todosOsDados.map(item => item.id);

    if (listaDeIds.includes(termoBusca)) {
        const metodoEncontrado = todosOsDados.find(item => item.id === termoBusca);

        result.innerHTML = `
        <div style="color: #15803d; margin-bottom: 10px;"><strong>✔ Encontrado via INCLUDES!</strong></div>
        <div><span class="tagMainContent">Nome: </span>${metodoEncontrado.nome}</div>
        <div><span class="tagMainContent">Tipo: </span>${metodoEncontrado.tipo}</div>
        `;
    } else {
        result.innerHTML = `<div style="color: #b91c1c;"><strong>✖ Falso:</strong> Método "${termoBusca}" não encontrado.</div>`;
    }
}

export function indexOf(valorDigitado, todosOsDados) {
    const result = document.querySelector('.result');
    const termoBusca = valorDigitado.toLowerCase().trim();
    const listaDeIds = todosOsDados.map(item => item.id);
    
    const posicao = listaDeIds.indexOf(termoBusca);

    if (posicao !== -1) {
        const metodoEncontrado = todosOsDados[posicao];

        result.innerHTML = `
        <div style="color: #15803d; margin-bottom: 10px;"><strong>✔ Encontrado via INDEXOF! (Posição ${posicao})</strong></div>
        <div><span class="tagMainContent">Nome: </span>${metodoEncontrado.nome}</div>
        <div><span class="tagMainContent">Tipo: </span>${metodoEncontrado.tipo}</div>
        `;
    } else {
        result.innerHTML = `<div style="color: #b91c1c;"><strong>✖ Falso (-1):</strong> Método "${termoBusca}" não encontrado.</div>`;
    }
}

export function some(valorDigitado, todosOsDados) {
    const result = document.querySelector('.result');
    const termoBusca = valorDigitado.toLowerCase().trim();

    const existe = todosOsDados.some(item => item.id === termoBusca);

    if (existe) {
        const metodoEncontrado = todosOsDados.find(item => item.id === termoBusca);

        result.innerHTML = `
        <div style="color: #15803d; margin-bottom: 10px;"><strong>✔ Encontrado via SOME!</strong></div>
        <div><span class="tagMainContent">Nome: </span>${metodoEncontrado.nome}</div>
        <div><span class="tagMainContent">Tipo: </span>${metodoEncontrado.tipo}</div>
        `;
    } else {
        result.innerHTML = `<div style="color: #b91c1c;"><strong>✖ Falso:</strong> Nenhum método atende a condição "${termoBusca}".</div>`;
    }
}

export function every(valorDigitado, todosOsDados) {
    const result = document.querySelector('.result');
    const termoBusca = valorDigitado.toLowerCase().trim();

    const todosDiferentes = todosOsDados.every(item => item.id !== termoBusca);

    if (!todosDiferentes) {
        const metodoEncontrado = todosOsDados.find(item => item.id === termoBusca);

        result.innerHTML = `
        <div style="color: #15803d; margin-bottom: 10px;"><strong>✔ Encontrado via EVERY! (Lógica Reversa)</strong></div>
        <div><span class="tagMainContent">Nome: </span>${metodoEncontrado.nome}</div>
        <div><span class="tagMainContent">Tipo: </span>${metodoEncontrado.tipo}</div>
        `;
    } else {
        result.innerHTML = `<div style="color: #b91c1c;"><strong>✖ Falso:</strong> Método "${termoBusca}" não existe no array.</div>`;
    }
}

export function find(valorDigitado, todosOsDados) {
    const result = document.querySelector('.result');
    const termoBusca = valorDigitado.toLowerCase().trim();

    const metodoEncontrado = todosOsDados.find(item => item.id === termoBusca);

    if (metodoEncontrado) {
        result.innerHTML = `
        <div style="color: #15803d; margin-bottom: 10px;"><strong>✔ Encontrado via FIND! (O mais semântico)</strong></div>
        <div><span class="tagMainContent">Nome: </span>${metodoEncontrado.nome}</div>
        <div><span class="tagMainContent">Tipo: </span>${metodoEncontrado.tipo}</div>
        `;
    } else {
        result.innerHTML = `<div style="color: #b91c1c;"><strong>✖ Undefined:</strong> Nenhum objeto encontrado.</div>`;
    }
}