const QAReset = document.querySelector('#QA-reset');
const OthersReset =  document.querySelector('#Others-reset');
const links = document.querySelectorAll('a');
// funcao reset QA

// funcao reset Others

QAReset.addEventListener('click', ()=>{
   console.log('working');
});

OthersReset.addEventListener('click', ()=>{

});

links[0].addEventListener('click', ()=>{
   window.location.href = './pages/about/about.html';
});