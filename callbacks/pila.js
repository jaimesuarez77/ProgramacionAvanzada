/*console.log("cero")


function uno(){
    setTimeout(
        function(){
            console.log("uno");
        },0
    );
    
}
console.log("dos");
function tres(){
    console.log("tres");

}*/

// se colocan dos parametros, un parametro y el otro es una función
function uno(auxiliar,dos){
    setTimeout(function(){
        console.log("uno"+auxiliar);
        // llamado a una función
        dos();
    },2000);
    
}
/*function dos(){
    console.log("dos")

}*/
uno(5,function(){console.log("dos")});
