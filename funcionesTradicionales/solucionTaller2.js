
//let fuerza = `El Padawan ${padawan.nombre} se asigna a las clases de manejo de la fuerza...`;
//let sable = `El Padawan ${padawan.nombre} se asigna a las clases de manejo del sable de luz...`;
let fuerza = " se asigna a las clases del manejo de la fuerza...";
let sable = " esta listo para el manejo del 'sable de luz' ...";
let limite = 15;

function matricularAprendiz(nombre,planeta,edad,estatura, clasificar){
    let padawan= {
        nombre:nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura
    }
  clasificar(padawan)
}


matricularAprendiz('jaime','tierra',43,1.79, padawan=>{
     (padawan.edad < limite) ? console.log(`EL Padawan ${padawan.nombre + fuerza}`) : console.log(`EL Padawan ${padawan.nombre + sable}` )})