function linea (){
    let imagen = document.querySelector("img");
    if (imagen.style.border === "2px solid red") {
        imagen.style.border = "2px solid azure";
    }else{
        imagen.style.border = "2px solid red";
        imagen.style.borderRadius = "10px "
    }
}




   