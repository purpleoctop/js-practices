let arr=[1, 2, -4, 3, -9, -1, 7];
let posNum=[]

for (let i = 0; i < 7; i++) {
  if(isPositive(arr[i]) ) {
      posNum.push(arr[i]);
  }
}

function isPositive(n) {
  if(typeof n !=='number') {
      throw new Error("parameter type is not a Number ");
  }
  if(n > 0) {
      return true;
  }

  else {
      return false;
  }
}


console.log(isPositive(3))

