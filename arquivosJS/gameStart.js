function inicio() {
    alert("Seja bem vindo ao Jogo do COVID-19");
    alert("Selecione seu Personagem");
    escolhaDoPersonagem();
}


function escolhaDoPersonagem(escolha) {
    while (true) {
        var escolha = prompt("1 - Covidao\n 2 - Doutore\n 3 - Transeunte");
        if (escolha != 1 && escolha != 2 && escolha != 3) {
            alert("Personagem nao disponivel");
        }
        else if (escolha == 1) {
            alert("Voce escolheu o Covidao");
            escolheuCovid();
            break;
        }
        else if (escolha == 2) {
            alert("Voce escolheu o Doutore");
            escolheuMedico();
            break;
        } else if (escolha == 3) {
            alert("Voce escolheu o Traseunte");
            escolheuHumano();
            break;
        }
    }
}