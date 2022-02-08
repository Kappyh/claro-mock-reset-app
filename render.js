const QAReset = document.querySelector('#QA-reset');
const OthersReset =  document.querySelector('#Others-reset');

const spinner = document.querySelector('#spinner-feedback');

/*
* Executa o spinner em tela no tempo de
* 1min e meio, deixando os botoes para uma
* nova requisicao desabilitados.
*/
function executeLoader(){
    spinner.style.display = 'flex';
    QAReset.disabled = true;
    OthersReset.disabled = true;
    setTimeout(()=>{
        spinner.style.display = 'none';
        QAReset.removeAttribute('disabled');
        OthersReset.removeAttribute('disabled');
    }, 60500);
}

QAReset.addEventListener('click', ()=>{
    executeLoader();
    runUpdateQA();
});

OthersReset.addEventListener('click', ()=>{
    executeLoader();
    runtUpdateOthers();
});