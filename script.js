
var Formulaire = document.querySelector('.fm');
var SubscribeBtn = document.querySelector('.js');

SubscribeBtn.addEventListener('click', afficheFormulaire)
function afficheFormulaire(){
    Formulaire.classList.toggle('visible')
}
