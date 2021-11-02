// Local Storage - Armazenamento Local
// O propósito é não precisar carregar de novo quando carregar o site
// Limite do localStorage 5mb.

const buscarDadosStorage = (storageName) => {
    return localStorage.getItem(storageName);
}

const salvarDadosNoStorage = (storageName, dados) => {
    localStorage.setItem(storageName, dados);
}

const removerDados = (storageName) => {
    localStorage.removeItem(storageName);
}

const adicionarArrayAoStorage = (storageName, novosItems) => {
    const dadosAtuais = buscarDadosStorage(storageName) || [];
    const novaLista = novosItems.concat(dadosAtuais);
    salvarDadosNoStorage(storageName, novaLista);
}

/*
localStorage.setItem('nome', 'Luiz Henrique');
localStorage.getItem('nome');
console.log(nome);

console.log(buscarDadosStorage('nome'));
 */
