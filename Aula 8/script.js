function CalcularMedia(){

    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let num3 = Number(document.getElementById("numero3").value);
    let num4 = Number(document.getElementById("numero4").value);
    let num5 = Number(document.getElementById("numero5").value);

    let media = (num1+num2+num3)/3;
    document.getElementById("resultado").innerHTML = media;
}