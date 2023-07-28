const number = document.querySelector("#number");

function Aposta() {

    const random = Math.floor(Math.random()*100)+1;

    if (number.value==random){
        alert("Você Ganhou !");
    } else {
        alert("Tomei seu dinheiro ! ");
        alert("O numero era: " + random);   
    }
}