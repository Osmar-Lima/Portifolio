// Criando um função para exibir e esconder o menu lateral quando houver click sobre o mesmo


var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");

});

// podemos simplificar o nosso codigo acima para que fique dessa forma

/*

document.querySelector(".hamburger").addEventListener("click", ()=>
    document.querySelector(".container").classList.toggle("show-menu"));
    */
