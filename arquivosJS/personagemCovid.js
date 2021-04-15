function escolheuCovid() {
    alert("O Covidao veio para o planeta para dominar tudo!!!");
    escolhaContinentes();
}

var continentes = ["Africa", "America ", "Asia ", "Europa ", "Oceania "];

//funcao que ira verificar qual continente foi escolhido
function escolhaContinentes() {
    while (true) {
        //caso Europa ou Asia seja selecionado
        var continenteEscolhido = prompt("Qual continente ira dominar primeiro?\n " + continentes);
        if (continenteEscolhido == "Europa" || continenteEscolhido == "Asia") {
            var simNao = prompt("Tem certeza que ira iniciar iniciar nesse continente?\n Sim ou Nao?");
            if (simNao == "Sim") {
                alert("O continente que voce escolheu produziu as vacinas e voce morreu!!");
                document.write("<img src='IMAGENS/gameOver.jpg' alt='game over'>");
                break;
            } else if (simNao == "Nao") {
                alert("Qual sera sua escolha entao?");
            } else {
                alert("Não entendi sua resposta");
            }
        } else if (continenteEscolhido == "Oceania") {
            continenteOceania();
            break;
        } else if (continenteEscolhido === "Africa") {
            alert("Eles já tem problemas demais. Melhor escolher outro continente!");
        } else if (continenteEscolhido == "America") {
            alert("Voce escolheu America! Agora o bixo vai pegar")
            continenteAmerica();
            break;
        } else {
            alert("Opção selecionada não disponivel");
        }
    }
}

//Funcao executada caso oceania seja escolhida
function continenteOceania() {
    alert("Voce escolheu oceania");
    while (true) {
        var ondeAtacar = prompt("Onde atacar primeiro?\n - Hospital\n - Escola\n (Digite sua escolha)");
        if (ondeAtacar == "Hospital") {
            alert("Muito bem! Voce contaminou os velhos e todo mundo morreu");
            document.write("<img src='IMAGENS/covidWins.jpg' alt='Covid'>");
            break;
        } else if (ondeAtacar == "Escola") {
            alert("As crianças são imunes!!! Você foi destruido");
            document.write("<img src='IMAGENS/gameOver.jpg' alt='game over'>");
            break;
        } else {
            alert("Escolha um das duas opcoes");
        }
    }
}
// funcao executada caso america seja selecionada
function continenteAmerica() {
    alert("Voce acabou de chegar na America, aqui as pessoas parecem mais vulneraveis. Antes de atacar voce deve comecar a contaminar a todos. Voce começou a contaminar a todos, mas elas ainda não estao apresentando os sintomas. Melhor ficar incubado mais uns dias?");
    while (true) {
        var diasEncubado = prompt("Qual vai ser COVIDAo?\n 1 - Melhor esperar uns 5 dias, no maximo 14\n 2 - O negocio agir é agora!\n 3 - Vou esperar 1 mes.");
        if (diasEncubado == 1) {
            alert("Muito bem! Você conseguiu se espalhar sem nenhum problema! O mundo caiu ao seus pés");
            document.write("<img src='IMAGENS/covidWins.jpg' alt='Covid'>");
            break;
        } else if (diasEncubado == 2) {
            alert("Algumas pessoas começaram a apresentar os sintomas. Agora é sua chance de contaminar mais pessoas.");
            var comoEstaoAgindo = prompt("Como elas estão agindo com sua presença?\n 1 - Estão surtando!! Ora de atacar com força total e continuar assim\n 2 - Estão tomando cuidado e usando mascaras e praticando distanciamento social!!");
            if (comoEstaoAgindo == 1) {
                alert("Muito bem! Voce causou o caos e todos foram contaminados");
                document.write("<img src='IMAGENS/covidWins.jpg' alt='Covid'>");
                break;
            } else if (comoEstaoAgindo == 2) {
                alert("Eles foram mais espertos que você!! Você foi destruido!!");
                document.write("<img src='IMAGENS/gameOver.jpg' alt='game over'>");
                break;
            } else {
                alert("Opcao nao disponivel");
            }
        } else if (diasEncubado == 3) {
            alert("Você esperou muito tempo pra atacar. A vacina foi criada e você desapareceu da face da terra!!");
            document.write("<img src='IMAGENS/gameOver.jpg' alt='game over'>");
            break;
        } else {
            alert("Opção selecionada não disponivel.");
        }
    }
}