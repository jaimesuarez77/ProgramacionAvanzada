let transformarVelocidad = ()=>{
    calcularAltura((velocidadInicial * 1000/3600),angulo,gravedad);
}

transformarVelocidad(100,velocidadInicial=>{
    const PI = 3.1416;
    
    let alturaMaxima = (Math.pow(velocidadInicial,2) * Math.pow(Math.sin(PI/3),2)) / 2*50;
    console.log("La altura Máxima es: ", alturaMaxima);
});
