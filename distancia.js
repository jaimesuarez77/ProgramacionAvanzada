// entradas
let coordenadaFinalX = 70;
let coordenadaFinalY=-50;
let coordenadaInicialX= 0;
let coordenadaInicialY=0;

//funcion
function calcularDistancia(Xinicial, Xfinal, Yinicial,Yfinal){
    //1.restando cantidades
    let coordenadasX=xfinal-Xinicial;
    let coordenadasY=yfinal-Yinicial;    

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

