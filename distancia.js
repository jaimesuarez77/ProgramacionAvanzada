// entradas
let coordenadaFinalX = 70;
let coordenadaFinalY=-50;
let coordenadaInicialX= 0;
let coordenadaInicialY=0;

//funcion
function calcularDistancia(Xinicial, Xfinal, Yinicial,Yfinal){
    //1.restando cantidades
    let coordenadasX=Xfinal-Xinicial;
    let coordenadasY=Yfinal-Yinicial;    

    //2. Elevando al cuadrado cada resta
    let cuadradoX=Math.pow(coordenadasX,2);
    let cuadradoY=Math.pow(coordenadasY,2);

    //3.Suma de los cuadrados obtenidos
    let sumaTotal = cuadradoX + cuadradoY

    //4. obtengo la raiz cuadrada de la suma
    let distancia = Math.sqrt(sumaTotal);

    console.log("la distancia calculada es: "+ distancia);

    return(distancia);

}

console.log(calcularDistancia(coordenadaInicialX,coordenadaFinalX,coordenadaInicialY,coordenadaFinalY));
// función resumida
function calcularDistancia1(Xinicial, Xfinal, Yinicial,Yfinal){
    let distancia1= Math.sqrt(Math.pow(Xfinal-Xinicial)+Math.pow(Yfinal-Yinicial));
    console.log("la distancia es: " + distancia1);
    return(distancia1);
}

let distancia2=(Xinicial, Xfinal, Yinicial,Yfinal)=> Math.sqrt(Math.pow(Xfinal-Xinicial)+Math.pow(Yfinal-Yinicial));
console.log("la distancia es: " + distancia2);



