function isFive(num) {
  // Your code here
  if (num === 5) return true;
  return false
}

function isOdd(number) {
  // Your code here
  if (typeof number === "number"){
    if (number % 2 !== 0){
      return true
    }else{
      return false;
    };
  }else{
    throw Error("Input not valid!")
  }



}

function myRange(min, max, step = 1) {
  // Your code here
  let arr = [];
  for (let i = min; i <= max; i+= step){
    arr.push(i);
  }
  return arr;
}


module.exports = { isFive, isOdd, myRange };
