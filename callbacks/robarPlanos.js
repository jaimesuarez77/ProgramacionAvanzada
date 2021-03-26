function robarPlanos(idPlano,despegar){

    if(idPlano>0 && idPlano<=10){
        let mensaje = 'el plano que  se consiguio fue el: ' + idPlano;
        despegar(null,mensaje);

    }else{
        let error= "Pilas!! no te has robado un plano real"
        despegar(error,null);
    }



}


robarPlanos(2,function(error, mensajeOK){
    if(error){
        console.log(error);
        console.log("Nos quedamos camellando");
    }else{
        console.log(mensajeOK);
       console.log("Estamos despegando")

    }
    
});