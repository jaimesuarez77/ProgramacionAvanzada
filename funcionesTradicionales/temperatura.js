//let temperaturaIni = int(prompt("ingrese la temperatura tomada en la mañana: "));
let temperatura1 = 26;
let temperatura2 = 25;

function promedioTemperatura  (temperatura1,temperatura2) {
    return((temperatura2+temperatura1)/2);

} 
console.log("La temperatura promedio del dia es: "+ promedioTemperatura(temperatura2,temperatura1));
