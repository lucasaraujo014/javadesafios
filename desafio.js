const nota_1 = 5;
const nota_2 = 6;
const nota_3 = 7;
const media = (nota_1 + nota_2 + nota_3) / 3;
alert(`Sua média é , ${media}`);
  if (media < 5) {
    alert(`Reprovada`);
  } else if (media >= 5 && media < 6.9) {
    alert(`Recuperação`);
  } else {
//   (media >= 7 && media <= 10);
    alert(`Aprovada`);
  
}
