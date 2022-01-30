const QAReset = document.querySelector('#QA-reset');
const OthersReset =  document.querySelector('#Others-reset');

QAReset.addEventListener('click', ()=>{
    runUpdateQA();
});

OthersReset.addEventListener('click', ()=>{
    runtUpdateOthers();
});
