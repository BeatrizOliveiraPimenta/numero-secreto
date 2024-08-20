alert('Bem vindo! Adivinhe o número secreto ');
let numeroMaximo = 390;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
let chute
console.log ('numero secreto', numeroSecreto);
console.log('chute', chute);
let tentativas = 1;
 
while (chute != numeroSecreto){
    
    chute = prompt(`Digite um numero de 1 a ${numeroMaximo}`);
    if(chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert ('O numero secreto é menor que ' + chute);
        }
        else{
            alert('O numero secreto maior que ' + chute);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`vc acertou ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);