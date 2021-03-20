
function uno(){
    setTimeout(
        function(){
            console.log("uno");
        },2000
    );
    
}

function dos(){
    console.log("dos");

}
uno();
dos();