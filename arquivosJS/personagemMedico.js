function escolheuMedico() {
    alert("O seu objetivo é conseguir desenvolver a vacina para salvar a humanidade");
    escolhaDePaises();
}

var paises = ["Estados Unidos", " Reino Unido", " China"];


//funcao que ira verificar qual pais ira inciar as pesquisas para vacina
function escolhaDePaises() {
    while (true) {
        var paisEscolhido = prompt("Qual pais você irá iniciar suas pesquisas?\n " + paises);
        if (paisEscolhido == "Estados Unidos") {
            alert("Estados Unidos");
            paisEstadosUnidos();
            break;
        } else if (paisEscolhido == "Reino Unido") {
            alert("Reino Unido");
            paisReinoUnido();
            break;
        } else if (paisEscolhido == "China") {
            alert("China");
            paisChina();
            break;
        } else {
            alert("Opção não disponível. Tente novamente.");
        }
    }
}


function paisEstadosUnidos() {
    while (true) {
        var verbaPesquisa = prompt("Qual a sua verba de pesquisa? (digite um valor)");
        if (parseInt(verbaPesquisa) > 50000) {
            alert("Com a verba de $" + verbaPesquisa + "Você criou a vacina! Muito bem! O mundo foi salvo");
            document.write("<img src='IMAGENS/doctorWins.jpg' alt='doctor'>");
            break
        } else if (parseInt(verbaPesquisa) < 50000) {
            alert("A verba de $" + verbaPesquisa + " não é suficiente. Você não conseguiu criar a vacina. Todos Morreram.");
            document.write("<img src='IMAGENS/gameOver.jpg' alt='game over'>");
            break;
        } else {
            alert("Informacao invalida. Digite um valor.");
        }
    }
}

function paisReinoUnido() {
    var tomaCha = prompt("Você toma chá?");
    if (tomaCha == "Sim") {
        alert("Muito bem. A rainha te deu todo o dinheiro pra criar uma vacina! O mundo foi salvo");
        document.write("<img src='IMAGENS/doctorWins.jpg' alt='doctor'>");
    } else if (tomaCha == "Nao") {
        alert("Voce irritou a rainha. Nada de vacina! Fim do mundo!!")
        document.write("<img src='IMAGENS/gameOver.jpg' alt='game over'>");
    }
}

function paisChina() {
    while (true) {
        var paisLivre = prompt("você considera a China um pais livre?\n Sim ou Nao");
        if (paisLivre == "Sim") {
            alert("Muito bem. China é o melhor pais! A vacina já existe! Todos foram salvos");
            document.write("<img src='IMAGENS/doctorWins.jpg' alt='doctor'>");
            break;
        } else if (paisLivre == "Nao") {
            alert("Comunista!!!! Fim da vida pra você!!")
            document.write("<img src='IMAGENS/gameOver.jpg' alt='game over'>");
            break;
        } else {
            alert("Escreva em português, não em chines! lol")
        }
    }
}