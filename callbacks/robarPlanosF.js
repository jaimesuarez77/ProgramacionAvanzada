
let aviso = "El plano robado es el: ";
let aviso1 = "Operación terminada...Despegar";
let advertencia = "Calleron en la trampa...plano equivocado ";
let advertencia1 = "Consigan uno valido... Negativo para el despegue ";
let idPlano = prompt("Ingrese el número del plano");
//let operacion = '';

let robarPlanosF = (idPlano,partir)=>{ 
    if(idPlano>0 && idPlano<=10){
        
       // console.log(aviso,idPlano);
       alert(aviso+idPlano);
        partir(aviso1,null);
    }else{
        //console.log(advertencia);
        alert(advertencia);
        partir(null,advertencia1);}}


robarPlanosF(idPlano,function(aviso,partir){ let operacion = (aviso) ? alert(aviso1) : alert(partir)
   /* if(aviso){
        //console.log(aviso1);
        alert(aviso1);
    }else{
        //console.log(partir)
        alert(partir);
    }*/
});



