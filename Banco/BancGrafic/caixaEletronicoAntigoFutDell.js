"use strict"

//Sistema de login
function nick() { // não podemos usar a palavra nome, nem name como Nome da função... erro de tipagem(TypeError)
    let nomeNSeguro = prompt("Qual o seu nome de usuario?");
    const nome = nomeNSeguro.replace(/[^\w\s]/gi, "");
    let senha = prompt("Senha: ");
    if (!senha) {
        alert("Desculpe, mas aparentemente ocorreu algum erro!(Provavelmente na senha)");
        nick();
    } else {
        alert(`Olá ${nome}. É um prazer ter você por aqui!`);
        inicio();
    }
}

//Opções
function inicio() {
    let escNSeguro = prompt("Digite o numero de uma opção;\n1 > Saldo disponivel\n2 > Ver extrato\n3 > Saque\n4 > Depositar\n5 > Transferir\n6 > Sair");
    const esc = parseInt(escNSeguro.replace(/[^\w\s]/gi, ""));
    switch (esc) {
        case 1:
            saldo();
            break;
        case 2:
            extrato();
            break;
        case 3:
            saque();
            break;
        case 4:
            deposito();
            break;
        case 5:
            transferir();
            break;
        case 6:
            sair();
            break;
        default:
            alert("Erro desconhecido! Tente novamente.");
            inicio();
            break;
    }
}

//Ver saldo
var saldoT = 10;
function saldo() {
    alert(`Seu saldo disponivel é\n${saldoT}`);
    inicio();
}

//Acompanhamento de saque e depositos; OBJETO o.o
var extratos = {
    depositado: [0],
    retirado: [0],
    transferencias: [0],
    conta: ["Nenhuma"]
}
function extrato() {
    //exemplo
    // Alias da para abrir chave e colocar outros objetos dentro desse objeto nomeando o valor key dele e colocando chave como value...
    alert("Depositos: "  + extratos.depositado);
    alert("Saques: "  + extratos.retirado);
    alert("Transferencias: "  + extratos.transferencias + "\nPara as respectivas pessoas: " + extratos.conta);
    inicio();
}

//Retirar algum valor
function saque() {
    var ret = prompt(`Digite o valor para ser retirado.\nMax: ${saldoT}\nDesistir?(0)`);// as vezes precisa e as vezes não precisa tornar em um numero float
    if (isNaN(ret) || !ret) {
        alert("Ocorreu algum erro!(Provavelmente de digitação)"); // poderiamos deixar sem o alert
        saque();
    } else if (ret >= 0 && ret <= saldoT) {
        saldoT -= Number(ret);
        if (ret != 0) {
            if (extratos.retirado[0] == 0) {
                extratos.retirado.splice(0, 1, Number(ret)); 
                inicio();
                }
            else {
                extratos.retirado.push(Number(ret));
                inicio(); 
            }
        } else {
            inicio();
        }
    } else {
        alert("Erro Fatal! Operação não autorizada.");
        saque();
    }
}

//Colocar ou Guardar algum valor
function deposito() {
    var depos = prompt(`Digite o valor para ser retirado.\nDesistir?(0)`);
    if (isNaN(depos) || !depos) {
        alert("Ocorreu algum erro!(Provavelmente de digitação)");
        deposito();
    } else if (depos >= 0) {
        saldoT += Number(depos);
        if (depos != 0) {
            if (extratos.depositado[0] == 0) {
                extratos.depositado.length--;
                extratos.depositado.push(Number(depos)); 
                inicio();
                }
            else {
                extratos.depositado.push(Number(depos)); 
                inicio();
            }
        } else {
            inicio();
        }
    } else {
        alert("Erro Fatal! Operação não autorizada.");
        deposito();
    }
}

//Transferencia?
function transferir() {
    let pessoa = prompt("Para quem voce quer transferir?(pix, codigo, nome, cpf, chave unica, etc.)")
    var transf = prompt(`Digite o valor que será transferido para a conta ${pessoa}.\nMax: ${saldoT}\nDesistir?(0)`);
    if (isNaN(transf) || !transf) {
        alert("Ocorreu algum erro!(Provavelmente de digitação)");
        saque();
    } else if (transf >= 0 && transf <= saldoT) {
        saldoT -= transf;
        if (transf != 0) {
            if (extratos.transferencias[0] == 0 && extratos.conta[0] == "Nenhuma") {
                extratos.transferencias.splice(0, 1, transf); 
                extratos.conta.splice(0, 1, pessoa); 
                inicio();
                }
            else {
                extratos.transferencias.push(transf);
                inicio(); 
            }
        } else {
            inicio();
        }
    } else {
        alert("Erro Fatal! Operação não autorizada.");
        saque();
    }
}

//sair
function sair() {
    let exitNSeguro = prompt("Tem certeza que quer sair?(S/N)");
    const exit = exitNSeguro.replace(/[^\w\s]/gi, "");
    if (exit == "Sim" || exit == "S" || exit == "sim" || exit == "s") {
        window.close();
    } else if (exit == "Não" || exit == "N" || exit == "nao" || exit == "não" || exit == "Nao" || exit == "n") {
        inicio();
    } else {
        alert("Ocorreu algum erro, tente novamente!");
        sair();
    }
}


nick();