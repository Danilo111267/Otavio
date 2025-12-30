let modoEscolha = false;

function trocarModo() {
    modoEscolha = !modoEscolha;

    const pergunta = document.getElementById("pergunta");
    const modo = document.getElementById("modo-escolha");
    const respostaDiv = document.getElementById("resposta");
    const botao = document.getElementById("modoBtn");

    respostaDiv.innerText = "";

    if (modoEscolha) {
        pergunta.style.display = "none";
        modo.style.display = "block";
        botao.innerText = "Modo Pergunta";

        document.getElementById("opcao1").value = "";
        document.getElementById("opcao2").value = "";
    } else {
        pergunta.style.display = "block";
        modo.style.display = "none";
        botao.innerText = "Modo Escolha";

        pergunta.value = "";
    }
}


function perguntar() {
    if (modoEscolha) {
        escolherOpcao();
    } else {
        responderPergunta();
    }
}

function escolherOpcao() {
    const op1 = document.getElementById("opcao1").value.trim();
    const op2 = document.getElementById("opcao2").value.trim();
    const respostaDiv = document.getElementById("resposta");

    if (op1 === "" || op2 === "") {
        respostaDiv.innerText = "Preencha as duas opções ";
        return;
    }

    respostaDiv.innerText = " Octavius está escolhendo...";
    
    setTimeout(() => {
        const escolha = Math.random() < 0.5 ? op1 : op2;
        respostaDiv.innerText = " Octavius escolheu: " + escolha;
    }, 1200);
}




const respostas = [
    "Sim",
    "Não",
    "Talvez",
    "Com certeza!",
    "Não conte com isso",
    "O futuro é incerto",
    "Nem Fudendo kkkjjj",
    "NÃÃÃÃÃÃÃÃÃOOOOOO",
    "Minha punheta diz que sim",
    "Minha punheta diz que não"

];


function perguntar() {
    const respostaDiv = document.getElementById("resposta");

    if (modoEscolha) {
        escolherOpcao();
    } else {
        responderPergunta();
    }
}

function responderPergunta() {
    const pergunta = document.getElementById("pergunta").value;
    const respostaDiv = document.getElementById("resposta");

    if (pergunta.trim() === "") {
        respostaDiv.innerText = "Faça uma pergunta primeiro animal primata    ";
        return;
    }

    respostaDiv.innerText = " Pensando com o pau...";
    setTimeout(() => {
        const r = respostas[Math.floor(Math.random() * respostas.length)];
        respostaDiv.innerText = r;
    }, 1200);
}
