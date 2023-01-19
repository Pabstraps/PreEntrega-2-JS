alert("Inicia el juego" + "\nSelecciona tu personaje")

//Seleccion del personaje y muestra de stats

let selector = parseInt (prompt("1.Volkor" + "\n2.Jaina" + "\n3.Mclovin"));


function Personajes (nombre, edad, nivel,clase){
      this.nombre = nombre;
      this.edad = edad;
      this.nivel = nivel;
      this.clase = clase;
}

const pj1 = new Personajes ("Volkor",29,60,"Barbarian")
const pj2 = new Personajes ("Jaina",31,80,"Mage")
const pj3 = new Personajes ("Mclovin",20,5,"Student")



 if (selector == 1) {
       alert("Seleccionaste a " + pj1.nombre)
       alert("Caracteristicas: \n" + "\nEdad del personaje: " + (pj1 ["edad"]) + "\nNivel del personaje: " + (pj1["nivel"]) + "\nClase del personaje: " + (pj1["clase"])); 
       }
       else if (selector == 2){
       alert("Seleccionaste a " + pj2.nombre)
       alert("Caracteristicas: \n" + "\nEdad del personaje: " + (pj2 ["edad"]) + "\nNivel del personaje: " + (pj2["nivel"]) + "\nClase del personaje: " + (pj2["clase"])); 
       }
       else if (selector == 3){
       alert("Seleccionaste a " + pj3.nombre)
       alert("Caracteristicas: \n" + "\nEdad del personaje: " + (pj3 ["edad"]) + "\nNivel del personaje: " + (pj3["nivel"]) + "\nClase del personaje: " + (pj3["clase"]));
       }



//Seleccion de armas y asigacion de objetos esenciales


const objetosEsenciales = ["POCION ","COMIDA ","BOLSA BASICA "];
const armas = [];
let cantidad = 3;
const rtg = [];

do{   
      let seleccionDeArmas = prompt("Que armas deseas llevar?");
      armas.push (seleccionDeArmas.toUpperCase());
      
}while (armas.length != cantidad){
      const rtg = armas.concat(objetosEsenciales);
      alert ("Tu inventario es el siguiente: \n" + objetosEsenciales + "\n" + armas);
      console.log(rtg);
}


//Seleccion de hechizos

const hechizos =[];
let cantidadh = 2;

do{
      let selectorh = prompt ("Selecciona tus hechizos iniciales:\n" + "Furia Sangrienta\n" + "Toque de la Tumba\n" + "Regeneracion");
      hechizos.push (selectorh);

      
}while(hechizos.length != cantidadh);

hechizos.forEach(element => {
      alert("Te haz equipado: \n" + (element))
});









  
            
      
     

