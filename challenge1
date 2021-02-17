const scoreDolphins1 = 85,
      scoreDolphins2 = 54, 
      scoreDolphins3 = 41,

      scoreKoalas1 = 23,
      scoreKoalas2 = 34,
      scoreKoalas3 = 27;

let avgDolphins, avgKoalas;

const calcAverage = (firstScore, secondScore, thirdScore)  => (firstScore + secondScore + thirdScore/3);
avgDolphins = calcAverage(scoreDolphins1, scoreDolphins2, scoreDolphins3);
avgKoalas = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

console.log(avgDolphins, avgKoalas);

console.log(checkWinner(avgDolphins,avgKoalas));

function checkWinner (avgDolphins, avgKoalas){
  if (avgKoalas >= 2*avgDolphins){
     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }
  else if(avgDolphins >= 2* avgKoalas){
     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  }
  else{
    console.log(`No team wins!`);
  }
}

