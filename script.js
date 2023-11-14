var numeroSecreto = parseInt(Math.random() * 1001)

while(chute != numeroSecreto) {
    var chute = prompt('Digite um numero entre 1 e 1000')
    //Se o chute for iugal ao numero secreto
    if (chute == numeroSecreto) {
        alert ('Parabens, voce acertou o numero secreto!')
    }
    else if (chute > numeroSecreto) {
        alert('Voce errou, seu numero é menor do que o seu chute.')
    }
    else if (chute < numeroSecreto) {
        alert('O numero secreto é maior do que o seu chute.')
    }
}