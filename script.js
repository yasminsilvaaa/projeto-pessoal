function menuHandebol() {
  do {
  let escolha = prompt(`
    Escolha uma opção sobre as características do Handebol:
    1. Número de jogadores
    2. Duração do jogo
    3. Regras principais
    4. Objetivo do jogo
    5. Sair`);

  switch (escolha) {
    case "1":
      alert("O número de jogadores por equipe no handebol é 7, sendo 6 jogadores de linha e 1 goleiro.");
      break;
    case "2":
      alert("A duração do jogo de handebol é de 2 tempos de 30 minutos, com intervalo de 10 a 15 minutos entre eles.");
      break;
    case "3":
      alert("As principais regras do handebol incluem: cada jogador pode dar até 3 passos com a bola, deve-se driblar ou passar a bola, e a defesa pode bloquear mas não pode empurrar o adversário.");
      break;
    case "4":
      alert("O objetivo do handebol é marcar o maior número de gols, jogando a bola com as mãos e lançando-a no gol adversário.");
      break;
    case "5": 
      alert("Saindo...")
      break
    default:
      alert("Opção inválida! Tente novamente.");
      menuHandebol();
      break;
  }
}while(escolha !== "5 ")

}


menuHandebol();


