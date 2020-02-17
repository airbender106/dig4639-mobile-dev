function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
    result = a + b
  }
  return result
}

function AddList(arr) {
  let reslt = undefined;
  if(arr.length > 0) {
    for(var i = 0; i < arr.length; i++){
      result = result + arr[i];
    }

  }
  return result;
}
//console.log(Sum(2,3)==5);
//console.log(Sum(-10,-20)==-30);



export { Sum };