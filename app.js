alert('Bem vindo ao jogo do numero secreto');

let numeroMaximo = prompt('Qual o nomero máximo você deseja permitir?'); 
let numeroSecreto = parseInt(Math.random()*numeroMaximo+1);
let chute, tentativas = 1;

do{
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if(chute == numeroSecreto){
    alert(`Você acertou, o número secreto é ${numeroSecreto}`);
    alert(`Tentativas: ${tentativas}`)
  }else if(chute > numeroSecreto ){
    alert(`Você errou, o numero secreto é menor que ${chute}`)
  }else{
    alert(`Você errou o numero secreto é maior que ${chute}`)
  };
  tentativas++;
} while (chute != numeroSecreto);