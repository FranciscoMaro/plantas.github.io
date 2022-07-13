let Nombre= prompt("decime tu nombre");

let Apellido= prompt ("decime tu apellido");

let NumeroDeCompetidor= parseInt(prompt("Ingrese su numero de competidor"));

alert ("Bienvenido " + " " + Nombre + " " + Apellido + " al ingreso" );

let camiseta = 0;

let grupoA = "";

let grupoB= "";





if (NumeroDeCompetidor <= 50) {
   alert ("sos del grupo A")

   

  } else {
    alert ( " sos del Grupo B")

   

}


for (camiseta = 1; camiseta <= 50; camiseta++) {
  console.log(camiseta);
  
}


for (camiseta = 1; camiseta >= 50; camiseta++) {
  console.log(camiseta);
  
}


console.log (Nombre);
console.log (Apellido);
console.log ( NumeroDeCompetidor)

