
let aviso = "El plano robado es el: ";
let aviso1 = "Operación terminada...";
let advertencia = "Calleron en la trampa...plano equivocado ";
let advertencia1 = "Consigan uno valido...";

let robarPlanosF = (idPlano,partir)=>{ 
    if(idPlano>0 && idPlano<=10){
        console.log(aviso,idPlano);
        partir(aviso1,null);
    }else{
        console.log(advertencia);
        partir(null,advertencia1);}}


robarPlanosF(12,function(aviso,partir){
    if(aviso){
        console.log(aviso1);
    }else{
        console.log(partir)
    }
});



