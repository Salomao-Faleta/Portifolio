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


//Sessão-Contato

const form = document.querySelector('#form');
const campos = document.querySelectorAll('.required')
const spanErro = document.querySelectorAll('.span-erro');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//colocanso erros
function setError(index){
    spanErro[index].style.display = 'block';
}

//removendo erros
function removeError(index){
    spanErro[index].style.display = 'none';
}

//fazendo as validações em cada campo e no form


form.addEventListener('submit',(event)=>{
    event.preventDefault();

    nameValidate();
    emailValidate();
    msgValidate();
})



function nameValidate(){
    if(campos[0].value.length < 2){
        setError(0);
    }else{
        removeError(0);
    }
}


function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
}


function msgValidate(){
    if(campos[2].value == ''){
        setError(2);
    }else{
        removeError(2);
    }
}













//Sessao-orçamento

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