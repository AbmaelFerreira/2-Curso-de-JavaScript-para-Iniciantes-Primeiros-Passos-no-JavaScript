var input = document.getElementById("quantidade");

/*Implementação do Botão Incrementa*/
var botaoIncrementa = document.querySelector("#btn-incrementa");
    botaoIncrementa.addEventListener('click', incrementa)

    
/*Implementação do Botão Decrementa*/
var botaodecrementa = document.querySelector("#btn-decrementa");
botaodecrementa.addEventListener('click', decrementa)


/*Funções do botão Incrementa */

function incrementa(){
    input.value++;
    var item = botaoIncrementa.closest('.item');
    var preco = pegaPrecoItem(item);
    adicionaTotal(preco)
  }


/*Funções do botão Decrementa */
function decrementa(){
    input.value--;
    var item = botaodecrementa.closest('.item');

    var preco = pegaPrecoItem(item);
    subtraiTotal(preco)
}

/*Funções Gerais */
function pegaPrecoItem(item){
    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

function adicionaTotal(valor){
    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}

function subtraiTotal(valor){
    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = valor - Number(elementoTotal.textContent);
}

