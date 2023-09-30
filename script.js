//Abrir e Fechar menu

let hambuger = document.querySelector('.hambuger');
hambuger.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
});

//Fazer o scroll subir

document.querySelector('#linkTopo').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})


//Dinâmicas do site

document.querySelector('#qtde').addEventListener('change', atualizaPreco);
document.querySelector('#Js').addEventListener('change', atualizaPreco);
document.querySelector('#layout-sim').addEventListener('change', atualizaPreco);
document.querySelector('#layout-nao').addEventListener('change', atualizaPreco);
document.querySelector('#prazo').addEventListener('change', () => {

    const prazo = document.querySelector('#prazo').value;
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semanas`;

    atualizaPreco();

});

function atualizaPreco() {
    const qtde = Number(document.querySelector('#qtde').value);
    const temJS = document.querySelector('#Js').checked;
    const incluiLayout = document.querySelector('#layout-sim').checked;
    const prazo = document.querySelector('#prazo').value;
    let preço = qtde * 100;

    if (temJS) {
        preço = preço + (preço * 10 / 100);
    } else {
        preço = preço;
    }

    if (incluiLayout) {
        preço = preço + 500;
    } else {
        preço = preço
    }

    let taxaUrgencia = 1 - prazo * 0.1;
    preço *= 1 + taxaUrgencia;

    document.querySelector("#preco").innerHTML = `R$${preço.toFixed(2).replace('.', ',')}`;
}