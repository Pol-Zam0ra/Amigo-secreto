// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigoAleatorio = document.getElementById('amigo').value;
    if (amigoAleatorio.trim() === '') {
        alert('Error, debe ingresar un nombre');
    }else if (/\d/.test(amigoAleatorio)){
        alert('Error, debe ingresar un nombre y no numeros');
    }else{
        amigos.push(amigoAleatorio);
        console.log(amigos);
        alert(`Amigo agregado: ${amigoAleatorio}`);
        document.getElementById('amigo').value = "";
    }
}

function sortearAmigo(){
    if (amigos.length === null) {
        alert('No hay amigos agregados');
    } else {
        let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
        alert(`Amigo aleatorio: ${amigoAleatorio}`);
        document.querySelector('#amigo').removeAttribute('disabled');
        document.getElementById('sortear').setAttribute('disabled', 'disabled');
        amigos = amigos.filter(amigo => amigo!== amigoAleatorio);
    }
}