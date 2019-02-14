var input = document.getElementById("quantidade");

/*Implementação do Botão Incrementa*/
var botaoIncrementa = document.querySelector("#btn-incrementa");
botaoIncrementa.addEventListener('click', incrementa)

function incrementa(){
    input.value++;

    var item = botaoIncrementa.closest('.item');
    var precoItem = item.querySelector('.preco-item');
    var preco = Number(precoItem.textContent);

    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = preco + Number(elementoTotal.textContent);


}
incrementa();





/*Implementação do Botão Decrementa*/
var botaodecrementa = document.querySelector("#btn-decrementa");
botaodecrementa.addEventListener('click', decrementa)

function decrementa(){
    input.value--
}
decrementa();
