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



    // tratamento de evento no campo de qts paginas o cliente vai precisar
document.querySelector("#qtde").addEventListener("change", atualizarPreco)


document.querySelector("#js").addEventListener("change", atualizarPreco)

document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)

document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)



document.querySelector("#prazo").addEventListener("change", function(){
    const semana = "semana"
    const semanas = "semanas"
    const prazo = document.querySelector("#prazo").value
    if(prazo == 1){
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana` 
        atualizarPreco()} else{
            document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas` 
        atualizarPreco()}
    })
    

function atualizarPreco(){

    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100
    if (temJS) preco *= 1.1
    if (incluiLayout) preco+= 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco*=1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

