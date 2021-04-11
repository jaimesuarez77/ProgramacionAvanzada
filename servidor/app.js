const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

console.log(argv);

let nombre = argv.nombre;
let edad = argv.edad;
let estatura = argv.estatura;

// armar padawam
function crearAprendiz(nombre,edad,estatura){
    let aprendiz= {
        nombre:nombre,
        edad:edad,
        estatura:estatura
    }
    console.log(aprendiz);
}
