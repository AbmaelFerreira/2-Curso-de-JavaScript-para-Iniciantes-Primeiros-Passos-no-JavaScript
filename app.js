var input = document.getElementById("quantidade");

var botaoIncrementa = document.querySelector("#btn-incrementa");

botaoIncrementa.addEventListener('click', incrementa)

function incrementa(){
    input.value++
}

incrementa();


