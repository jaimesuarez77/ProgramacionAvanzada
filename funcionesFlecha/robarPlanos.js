let robarPlanos = (idPlano)=>{

    if(idPlano>0 && idPlano<=10){
        let mensaje = 'el plano que  se consiguio fue el: ' + idPlano;
        return(mensaje);

    }else{
        let error= "Pilas!! no te has robado un plano real"
        return(error);
    }



}
console.log(robarPlanos(32));