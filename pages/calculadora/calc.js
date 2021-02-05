var input = document.getElementById('valor');

 function add(numero) {
    input.value += numero;
}

var valor1=0;
var valor2=0;
var resposta;
var operacaoAtual = '+';

function operacao(op) {
    valor1 = input.value;
    input.value = "";
    operacaoAtual = op;
}

function executa() {
    valor2 = input.value

    valor1 = parseInt(valor1, 10);
    valor2 = parseInt(valor2, 10);

    switch(operacaoAtual) {
        case "+":
            resposta = valor1 + valor2
        break

        case "-":
            resposta = valor1 - valor2
        break

        case "x":
            resposta = valor1 * valor2
        break

        case "/":
            resposta = valor1 / valor2
        break
    }

    input.value = resposta;
    resposta = 0;
}