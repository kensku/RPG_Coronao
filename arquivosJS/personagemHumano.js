function escolheuHumano() {
    alert("Você é apenas um traseunte tentando sovreviver. O Covid está se alastrando. Você terá que tomar decisões para poder sobreviver. Escolha de maneira sensata. Uma escolha errada pode significar o seu fim!!!");
    escolhaDoCaminho();
}

function escolhaDoCaminho() {
    var lancheOuExercicio = prompt("Você acabou de acordar. Antes de sair de casa, você gostaria de:\n 1 - Fazer um lanche \n 2 - Fazer umas flexões");
    if (lancheOuExercicio == 1) {
        alert("Você esqueceu de lavar as verduras do lanche! Estava tudo contamidado");
        document.write("<img src='IMAGENS/gameOver.jpg' alt='game over'>");
    } else if (lancheOuExercicio == 2) {
        pushUpsConta();
    }
}


function pushUpsConta() {
    var qtFlexoes = prompt("Quer fazer quantas flexoes?")
    var pushUps = 0;
    alert("Pode começar!");
    while (pushUps < qtFlexoes) {
        pushUps++;
        alert("Voce fez " + pushUps + " flexões");
    }
    alert("Muito bem! Voce venceu!!");
    document.write("<img src='IMAGENS/pessoaFelizWins.jpg' alt='feliz de mascara'>");
}