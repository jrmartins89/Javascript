const bills = [100, 125, 555, 44];

function calcTip(billAmount){
  if(billAmount > 50 && billAmount <300){
  return 0.15*billAmount;
  }
  else{
    return 0.20*billAmount;
  }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2], bills[3]+tips[3]];

console.log(bills);
console.log(tips);
console.log(total);
