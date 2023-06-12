function contraseña() {
    let num1 = document.querySelector("#opcion1").value;
    let num2 = document.querySelector("#opcion2").value;
    let num3 = document.querySelector("#opcion3").value;

    if (num1 === "0" || num2 === "0" || num3 === "0") {
        document.querySelector("#textValidacion").innerHTML =
            "<--Debes ingresar una contraseña rellenando todos los campos-->";
        document.querySelector("#textValidacion").style.color = "white";
        document.querySelector("#textValidacion").style.backgroundColor = "red";
    } else if (num1 === "9" && num2 === "1" && num3 === "1") {
        document.querySelector("#textValidacion").innerHTML = " \" CONTRASEÑA  1  CORRECTA ☺ &#10004;  \" ";
        document.querySelector("#textValidacion").style.color = "white";
        document.querySelector("#textValidacion").style.backgroundColor = "green";
    } else if (num1 === "7" && num2 === "1" && num3 === "4") {
        document.querySelector("#textValidacion").innerHTML = "\" CONTRASEÑA  2  CORRECTA ☻ &#10004;  \"";
        document.querySelector("#textValidacion").style.color = "white";
        document.querySelector("#textValidacion").style.backgroundColor = "green";
    } else {
        document.querySelector("#textValidacion").innerHTML =
            "Tu contraseña no es valida \"INGRESE  OTRA  POR  FAVOR\"";
        document.querySelector("#textValidacion").style.backgroundColor = "red";
        document.querySelector("#textValidacion").style.color = "white";
    }
}