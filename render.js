const QAReset = document.querySelector('#QA-reset');
const OthersReset =  document.querySelector('#Others-reset');
const links = document.querySelectorAll('a');

QAReset.addEventListener('click', ()=>{
    runUpdateQA();
});

OthersReset.addEventListener('click', ()=>{
    runtUpdateOthers();
});

links[0].addEventListener('click', ()=>{
   window.location.href = './pages/about/about.html';
});