var input = document.getElementById("quantidade");

var botaoIncrementa = document.querySelector("#btn-incrementa");

botaoIncrementa.addEventListener('click', incrementa)

function incrementa(){
    input.value++
}
incrementa();

var botaodecrementa = document.querySelector("#btn-decrementa");
botaodecrementa.addEventListener('click', decrementa)


function decrementa(){
    input.value--
}

decrementa();
