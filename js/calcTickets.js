const PRECIO = 200;
const ESTUDIANTE = 0.2;
const TRAINEE = 0.5;
const JUNIOR = 0.85;

function calculoPrecio() {
let cant = document.getElementById("fcant").value;
let cat = document.getElementById("categorias").value;
let total;
document.getElementById("tot").innerHTML = ("")
if(cat === "Estudiante") {
    total=(cant*PRECIO)*ESTUDIANTE;
}
else if (cat === "Trainee") {
    total=(cant*PRECIO)*TRAINEE;
}
else if (cat === "Junior") {
    total=(cant*PRECIO)*JUNIOR;
}
document.getElementById("tot").innerHTML += (`${total}`)
console.log(`El total es ${total}`);
}

function borrar() {
    document.getElementById("nom").value = ("");
    document.getElementById("ap").value = ("");
    document.getElementById("email").value = ("");
    document.getElementById("fcant").value = ("");
    document.getElementById("tot").innerHTML = ("");
}