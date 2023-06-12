function verificar() {
    let funcoLegolas = document.querySelector("#legolas").value;
    let fucoGon = document.querySelector("#gon").value;
    let funcoGroot = document.querySelector("#groot").value;

    let resultado = Number(funcoLegolas) + Number(fucoGon) + Number(funcoGroot);

    if (funcoLegolas === "" || fucoGon === "" || funcoGroot === "") {
        document.querySelector("#resultado").innerHTML =
            "&#128591  Rellene todos los campos para validar tu compra  ";
        document.querySelector("#resultado").style.color = "red";
    } else if (resultado <= 10) {
        document.querySelector("#resultado").innerHTML =
            "Llevas " + resultado + " funcos en tu carrito  &#128558;";
        document.querySelector("#resultado").style.color = "black";
    } else {
        document.querySelector("#resultado").innerHTML =
            "Sobrepasaste el limite de funcos recuerde que la capasidad maxima es de 10  &#128531; (" + resultado + ")";
        document.querySelector("#resultado").style.color = "red";
    }
}