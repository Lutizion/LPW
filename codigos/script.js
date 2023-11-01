function CalcularMedia() {

    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let num3 = Number(document.getElementById("numero3").value);
    let num4 = Number(document.getElementById("numero4").value);
    let num5 = Number(document.getElementById("numero5").value);

    let media = (num1 + num2 + num3 + num4 + num5) / 5;
    document.getElementById("resultado").innerHTML = "A média dos números é " + media;
}

function calculadora() {
    let numero1; // primeiro número a ser digitado
    let numero2; // segundo número a ser digitado

    let resultado; // resultado da soma dos números digitado
    let check = document.getElementsByName("botao");

    numero1 = Number(document.getElementById("num1").value);
    numero2 = Number(document.getElementById("num2").value);



    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {


            if (document.getElementById("somar").checked) {
                resultado = "O Resultado da soma foi: " + (numero1 + numero2) + " !!!"

            }
            if (document.getElementById("subtrair").checked) {
                resultado = "O Resultado da subtração foi: " + (numero1 - numero2) + " !!!"

            }
            if (document.getElementById("multiplicar").checked) {
                resultado = "O Resultado da  multiplicação foi: " + (numero1 * numero2) + " !!!"

            }
            if (document.getElementById("dividir").checked) {

                if (numero2 == 0) {
                    resultado = "Não existe divisão por zero";
                }
                else {
                    resultado = "O Resultado da divisão foi: " + (numero1 / numero2) + " !!!"
                }
            }
        }
    }
    document.getElementById("resultado").innerHTML = resultado;

}

function Alterah1() {
    document.getElementById("titulo").innerHTML = "Bem-Vindo!!!";

}
function Alterah5() {
    document.getElementById("sub").innerHTML = "Espero que goste do site!!!";

}
function Alterap() {
    document.getElementById("paraf").innerHTML = "Aprendendo sempre mais";

}
function Novotitulo() {
    document.getElementById("titulo").innerHTML = "novo título";

}

function listar() {
    i = 0;
    let listpara = document.getElementsByTagName("p");
    
    for (let i = 0; i < 4; i++) {
        listpara[i].textContent = "Exercicio";
            
}
}