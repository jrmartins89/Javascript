function calcTip(billAmount){
  if(billAmount > 50 && billAmount <300){
  return 0.15*billAmount;
  }
  else{
    return 0.20*billAmount;
  }
}

function calcAverage(arr){
  var i, sum =0;
  // console.log(arr);
  // console.log(arr.length);

  for(i=0;i<arr.length;i++){
    sum = sum + arr[i];
  }
  return sum/arr.length;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let totals =[];
for(i=0; i<bills.length;i++){
  totals[i]=(calcTip(bills[i])+bills[i]);
}

for(i=0; i<bills.length;i++){
  console.log(`totals[${i+1}] =  ${totals[i]}`);
}

calcAverage(totals);
