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

    for (let i = 0; listpara.length - 1; i++) {
        listpara[i].textContent = "LPW";

    }
}

function listarNP() {
    i = 0;
    let listpara = document.getElementsByTagName("p");

    for (let i = 0; listpara.length - 1; i++) {
        if (listpara[i].id % 2 == 0) {
            listpara[i].textContent = listpara[i].id;
        }


    }
}
function tabuada() {
    let num = document.getElementById("num1");
    let resultado = document.getElementById("resultado")
    resultado.innerText = "";
    for (let i = 1; i <= 10; i++) {
        let div = document.createElement("div");
        div.innerText = num.value * i;
        resultado.appendChild(div);
    }
}

function MostrarM() {
    let palavra = document.getElementById("nome").value;
    document.getElementById("nome").value = palavra.toUpperCase();


}

function VerificarPalindromo() {
    palavra1 = document.getElementById('palavra').value.toUpperCase();
    let nomeinvertido = "";
    resultado = document.getElementById("resultado");

    for (let i = palavra1.length - 1; i >= 0; i--) {
        nomeinvertido += palavra1[i];
    }
    if (palavra1 === nomeinvertido) {
        resultado.innerHTML = "A palavra é um palíndromo";
    }
    else {
        resultado.innerHTML = "A palavra não é um palíndromo";
    }
}

function VerificarVogais() {
    palavra1 = document.getElementById('vogais').value.toUpperCase();
    resultado = document.getElementById("resultado");
    cont = 0;
    for (let i = 0; i < palavra1.length; i++) {
        let letrav = palavra1[i];
        if (letrav == 'A') {
            cont++;
        }
        if (letrav == "E") {
            cont++;
        }
        if (letrav == "I") {
            cont++;
        }
        if (letrav == "O") {
            cont++;
        }
        if (letrav == "U") {
            cont++;
        }
    }

    resultado.innerHTML = "O total de vogais que tem nessa palavra é:  " + cont;
}
function Somar(){
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);

    resultado = document.getElementById("resultado");
    resultado.textContent = "A soma desses numeros é: " + (num1 + num2);
}

function MostrarHorario(){
    let data = new Date().toLocaleString();
    resultado = document.getElementById("resultado");
    resultado.textContent = data;
}
function EsconderHorario(){
    resultado = "";
    resultado.textContent = resultado;
}