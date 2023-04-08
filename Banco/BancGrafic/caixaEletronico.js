/* "use strict" */

var pagLogin = "<main id='pagLogin'> <section> <h1>Login</h1> <form> <label for='nomeUser'>Nome de usuário</label> <input placeholder='Qual o seu nome de usuario?' type='text' id='nomeUser' name='nomeUser'> <label for='senha'>Senha</label> <input placeholder='3589' type='password' id='senha' name='senha'> <button id='but'>Entrar</button> </form> </section> </main>";

var pagOpt = "<main id='opções'> <h1>Escolhas</h1> <div class='row'> <button id='but1' class='btn'>Saldo = 1</button> <button id='but2' class='btn'>Extrato = 2</button> </div> <div class='row'> <button id='but3' class='btn'>Saque = 3</button> <button id='but4' class='btn'>Depósito = 4</button> </div> <div class='row'> <button id='but5' class='btn'>Transferência = 5</button> </div> <button id='but6' class='btn sair correction'>Sair = 6</button> </main>"

var pagSaldo = "<main id='saldo'> <span id='text'></span> <button id='ok'>OK</button> </main>";

var pagExtrato = "<main id='extract'> <div class='box'> <span id='sp1'></span> </div> <div id='boxD' class='box'> <span id='sp2'></span> <button id='continue'>Continuar</button> </div> <div class='box'> <span id='sp3'></span> </div> <div class='box'> <span id='sp4'></span> </div> </main>";

var pagTransferir = "<main id='transfi'> <div id='pai'> <h2>Para quem voce quer transferir?</h2> <h5>Chaves: pix, codigo, nome, cpf, chave unica, etc.</h5> <input id='inputFilho1' name='inputFilho' type='text' placeholder='chave'> <h2>Qual o valor?</h2> <h5 id='txValue2'></h5> <input id='inputFilho2' name='inputFilho' type='text' placeholder='R$??,00'> <h2 id='txValue'></h2> <button id='buutun'>Confirmar?</button> <button id='volt'>Voltar</button> </div> </main>";


/* onclick='paginas(pag1)' OR onclick='button(pag1)' */

//get
var divInsert = document.querySelector("#insert");

/* but.addEventListener('click', (evet) => {
    evet.preventDefault();
}) */


//Sistema de login
function nick() {
    divInsert.innerHTML = pagLogin; // gera conteudo  
    var but = document.querySelector("#but"); // pega o botão
    /* document.onkeydown = checkKey; */ // verifica as teclas e - normalmente envia a tecla como parametro para function ou melhor, ativa a funtion
    document.querySelector('#nomeUser').addEventListener('keydown', (e) => {
        if (e.keyCode == '13' || e.key === 'Enter') {
            e.preventDefault(); // !important
            document.querySelector('#senha').focus();
        }
    });
    console.log(window.event);
    document.querySelector('#senha').addEventListener('keydown', function checkKey(e) { // gera uma ação apartir 
        e = e || window.event; // confirma que o e recebeu o parametro do onkeydown, ou se é um window.event 
        if (e.keyCode == '13' || e.key === 'Enter') { // gera a ação se o enter for pressionado
            but.click();
        }
    })
    but.addEventListener('click', function activ(evet) { // da ultilidade para os value dos input - Ação login - next pag or error
        evet.preventDefault(); // evita o comportamento padrão do botão
        var nomeNSeguro = document.querySelector("#nomeUser").value;
        const nome = nomeNSeguro.replace(/[^\w\s]/gi, "");
        let senha = document.querySelector("#senha").value;
        if (!senha) {
            alert("Desculpe, mas aparentemente ocorreu algum erro!(Provavelmente na senha)");
            nick();
        } else {
            alert(`Olá ${nome}. É um prazer ter você por aqui!`);
            /* divInsert.innerHTML = pagOpt; */
            inicio();
        }
    });
}


//Opções
function inicio() {
    divInsert.innerHTML = pagOpt;
    let esc = 0;

    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.key == '1') {
            esc = 1;
            escolha(esc);
        }
        else if (e.key == '2') {
            esc = 2;
            escolha(esc);
        }
        else if (e.key == '3') {
            esc = 3;
            escolha(esc);
        }
        else if (e.key == '4') {
            esc = 4;
            escolha(esc);
        }
        else if (e.key == '5') {
            esc = 5;
            escolha(esc);
        }
        else if (e.key == '6') {
            esc = 6;
            escolha(esc);
        }
    }

    document.querySelector('#but1').addEventListener('click', () => {
        esc = 1;
        escolha(esc);
    });
    document.querySelector('#but2').addEventListener('click', () => {
        esc = 2;
        escolha(esc);
    });
    document.querySelector('#but3').addEventListener('click', () => {
        esc = 3;
        escolha(esc);
    });
    document.querySelector('#but4').addEventListener('click', () => {
        esc = 4;
        escolha(esc);
    });
    document.querySelector('#but5').addEventListener('click', () => {
        esc = 5;
        escolha(esc);
    });
    document.querySelector('#but6').addEventListener('click', () => {
        esc = 6;
        escolha(esc);
    });

    function essenci() {
        if (document.querySelector('#novoInputB') !== null) {
            document.querySelector('#novoInputB').remove();
        }
        if (document.querySelector('#novoInputA') !== null) {
            document.querySelector('#novoInputA').remove();
        }
    }

    function escolha(esc) {
        switch (esc) {
            case 1:
                essenci();
                saldo();
                break;
            case 2:
                essenci();
                extrato();
                break;
            case 3:
                /* essenci(); */
                saque();
                break;
            case 4:
                /* essenci(); */
                deposito();
                break;
            case 5:
                essenci();
                transferir();
                break;
            case 6:
                essenci();
                sair();
                break;
            default:
                alert("Erro desconhecido! Tente novamente.");
                inicio();
                break;
        }
    }
}


//Ver saldo
var saldoT = 10;
function saldo() {
    divInsert.innerHTML = pagSaldo;
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '13' || e.key == 'Enter') {
            inicio();
        }
    };
    document.querySelector('#text').textContent = `Saldo Disponível: R$ ${saldoT.toFixed(2)}`;
    document.querySelector('#ok').addEventListener('click', () => {
        inicio();
    })
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
    /* alert("Depositos: " + extratos.depositado);
    alert("Saques: " + extratos.retirado);
    alert("Transferencias: " + extratos.transferencias + "\nPara as respectivas pessoas: " + extratos.conta); */
    divInsert.innerHTML = pagExtrato;
    var boxes = document.querySelectorAll('.box');
    var textos = ['Entradas: ', 'Saídas: ', 'Transferências: ', 'ContasT: '];
    boxes.forEach((box, i) => {
        box.insertAdjacentHTML('beforebegin', `<h2 class="tx">${textos[i]}</h2>`);
    });
    document.querySelector('#sp1').textContent = extratos.depositado;
    document.querySelector('#sp2').textContent = extratos.retirado;
    document.querySelector('#sp3').textContent = extratos.transferencias;
    document.querySelector('#sp4').textContent = extratos.conta;
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '13' || e.key == 'Enter') {
            inicio();
        }
    };
    document.querySelector('#continue').addEventListener('click', () => {
        inicio();
    })
}

//Retirar algum valor
function saque() {
    var ret;
    function criarInput() {
        document.onkeydown = checkKey;
        function checkKey(e) {
            e = e || window.event;
            if (e.keyCode == '13' || e.key == 'Enter') {
                ret = novoInput.value;
                response()
            }
        };
        // Crie um novo elemento input
        var novoInput = document.createElement('input');

        // Defina os atributos do elemento input
        novoInput.type = 'text';
        novoInput.id = 'novoInputA';
        novoInput.name = 'novoInputA';
        novoInput.placeholder = 'Retirar? (0) to cancel'

        var botao = document.querySelector('#but3');
        var posicao = botao.offsetTop + botao.offsetHeight;

        novoInput.style.position = 'absolute';
        novoInput.style.top = posicao + 'px';
        novoInput.style.left = botao.offsetLeft + 'px';
        novoInput.style.width = botao.offsetWidth + "px";
        document.querySelector('#but3').style.marginTop = "-30px";
        document.querySelector('#but3').style.pointerEvents = "none";
        document.querySelector('#but3').style.opacity = "0";
        novoInput.style.height = "25px";
        novoInput.style.marginTop = "-35px";

        document.body.appendChild(novoInput);
        novoInput.focus();
    }
    criarInput();

    function response() {
        if (isNaN(ret) || !ret) {
            alert("Ocorreu algum erro!(Provavelmente de digitação)"); // poderiamos deixar sem o alert
        } else if (ret >= 0 && ret <= saldoT) {
            alert("O Saque foi um Sucesso!")
            saldoT -= Number(ret);
            if (ret != 0) {
                if (extratos.retirado[0] == 0) {
                    extratos.retirado.splice(0, 1, Number(ret));
                    document.querySelector('#novoInputA').remove();
                    document.querySelector('#but3').style.marginTop = "10px";
                    document.querySelector('#but3').style.pointerEvents = "auto";
                    document.querySelector('#but3').style.opacity = "1";
                }
                else {
                    extratos.retirado.push(Number(ret));
                    document.querySelector('#novoInputA').remove();
                    document.querySelector('#but3').style.marginTop = "10px";
                    document.querySelector('#but3').style.pointerEvents = "auto";
                    document.querySelector('#but3').style.opacity = "1";
                }
            } else {
                document.querySelector('#novoInputA').remove();
                document.querySelector('#but3').style.marginTop = "10px";
                document.querySelector('#but3').style.pointerEvents = "auto";
                document.querySelector('#but3').style.opacity = "1";
            }
        } else {
            alert("Erro Fatal! Operação não autorizada.");
        }
    }
}

//Colocar ou Guardar algum valor
function deposito() {
    var depos;
    function criarInput() {
        document.onkeydown = checkKey;
        function checkKey(e) {
            e = e || window.event;
            if (e.keyCode == '13' || e.key == 'Enter') {
                depos = novoInput.value;
                response()
            }
        };
        // Crie um novo elemento input
        var novoInput = document.createElement('input');

        // Defina os atributos do elemento input
        novoInput.type = 'text';
        novoInput.id = 'novoInputB';
        novoInput.name = 'novoInputB';
        novoInput.placeholder = 'Guardar? (0) to cancel'

        var botao = document.querySelector('#but4');
        var posicao = botao.offsetTop + botao.offsetHeight;

        novoInput.style.position = 'absolute';
        novoInput.style.top = posicao + 'px';
        novoInput.style.left = botao.offsetLeft + 'px';
        novoInput.style.width = botao.offsetWidth + "px";
        document.querySelector('#but4').style.marginTop = "-30px";
        document.querySelector('#but4').style.pointerEvents = "none";
        document.querySelector('#but4').style.opacity = "0";
        novoInput.style.height = "25px";
        novoInput.style.marginTop = "-35px";

        document.body.appendChild(novoInput);
        novoInput.focus();
    }
    criarInput();

    function response() {
        if (isNaN(depos) || !depos) {
            alert("Ocorreu algum erro!(Provavelmente de digitação)");
        } else if (depos >= 0) {
            alert("O Deposito foi um Sucesso!");
            saldoT += Number(depos);
            document.querySelector('#novoInputB').remove();
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
        }
    }
}

//Transferencia?
function transferir() {
    divInsert.innerHTML = pagTransferir;
    var pessoa;
    var transf;
    document.querySelector('#txValue').textContent = `Quem? > Quanto?`;
    document.querySelector('#txValue2').textContent = `Máximo: R$${saldoT},00`;
    /*document.onkeydown = checkKey;
     function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '13' || e.key == 'Enter') {
            pessoa = document.querySelector('#inputFilho1').value;
            document.querySelector('#txValue').textContent = `${pessoa} > Quanto?`;
            document.querySelector('#inputFilho2').focus()
            document.onkeydown = cK;
        }
    }; */
    document.querySelector('#inputFilho1').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            pessoa = document.querySelector('#inputFilho1').value;
            document.querySelector('#txValue').textContent = `${pessoa} > Quanto?`;
            document.querySelector('#inputFilho2').focus();
        }
    });
    document.querySelector('#inputFilho2').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            transf = document.querySelector('#inputFilho2').value;
            document.querySelector('#buutun').focus();
        }
    });
    /*    function cK(e) {
           e = e || window.event;
           if (e.keyCode == '13' || e.key == 'Enter') {
               transf = document.querySelector('#inputFilho2').value;
               document.querySelector('#buutun').focus()
           }
       }; */
    /* var pessoa = prompt("Para quem voce quer transferir?(pix, codigo, nome, cpf, chave unica, etc.)")
    var transf = prompt(`Digite o valor que será transferido para a conta ${pessoa}.\nMax: ${saldoT}\nDesistir?(0)`); */
    document.querySelector('#buutun').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            pessoa = document.querySelector('#inputFilho1').value;
            transf = document.querySelector('#inputFilho2').value;
            if (isNaN(transf) || !transf || pessoa == "") {
                alert("Ocorreu algum erro!(Provavelmente de digitação)");
                console.log(pessoa);
            } else if (transf >= 0 && transf <= saldoT) {
                document.querySelector('#txValue').textContent = `${pessoa} > R$${transf},00`;
                document.querySelector('#buutun').focus();
                /* document.querySelector('#buutun').click(); */
                saldoT -= transf;
                if (transf != 0) {
                    if (extratos.transferencias[0] == 0 && extratos.conta[0] == "Nenhuma") {
                        extratos.transferencias.splice(0, 1, transf);
                        extratos.conta.splice(0, 1, pessoa);
                        document.querySelector('#txValue2').textContent = `Máximo: R$${saldoT},00`;
                    }
                    else {
                        extratos.transferencias.push(transf);
                        extratos.conta.push(pessoa);
                        document.querySelector('#txValue2').textContent = `Máximo: R$${saldoT},00`;
                    }
                } else {
                    document.querySelector('#txValue2').textContent = `Máximo: R$${saldoT},00`;
                }


            } else {
                alert("Erro Fatal! Operação não autorizada.");
                saque();
            }
        }
    })
    document.querySelector('#volt').addEventListener('click', () => {
        inicio();
    })
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