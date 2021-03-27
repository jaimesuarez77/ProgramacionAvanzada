
let aviso = "El plano robado es el: ";
let aviso1 = "Operación terminada...";
let advertencia = "Calleron en la trampa...plano equivocado ";
let advertencia1 = "Consigan uno valido...";
let idPlano = prompt("Ingrese el número del plano");

let robarPlanosF = (idPlano,partir)=>{ 
    if(idPlano>0 && idPlano<=10){
        
       // console.log(aviso,idPlano);
       alert(aviso+idPlano);
        partir(aviso1,null);
    }else{
        //console.log(advertencia);
        alert(advertencia);
        partir(null,advertencia1);}}


robarPlanosF(idPlano,function(aviso,partir){
    if(aviso){
        //console.log(aviso1);
        alert(aviso1);
    }else{
        //console.log(partir)
        alert(partir);
    }
});



