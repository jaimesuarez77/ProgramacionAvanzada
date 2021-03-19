// entradas
let coordenadaFinalX = 70;
let coordenadaFinalY=-50;
let coordenadaInicialX= 0;
let coordenadaInicialY=0;
let puntoInicial1 = 0;
let puntoFinal1 = 70;
let puntoInicial2 = 0;
let puntoFinal2 = -50;


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
function calcularDistancia1(puntoInicial1, puntoFinal1, puntoInicial2,puntoFinal2){
    let distancia1 = Math.round(Math.sqrt( Math.pow((puntoFinal1-puntoInicial1),2)+Math.pow((puntoFinal2-puntoInicial2),2)));
   
    console.log(`La distancia calculada con funcion tradicional ${distancia1}`);
    return(distancia1);
    
}
console.log(calcularDistancia1(puntoInicial1, puntoFinal1, puntoInicial2,puntoFinal2));






