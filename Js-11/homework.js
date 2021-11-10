// -----------------------   1


// data1 = { 
//     a: 1,
//     b: 1,
// }
// data2 = { 
//     a: 1,
//     b: 1,
// }
// data3 = { 
//     a: 1,
//     b: 2,
// }

// const result = (a1, a2) => {

//   if (Object.values(a1).toString() === Object.values(a2).toString()) {
//     console.log(true)
//   } 
//   else {
//     console.log(false)
//   }
// }

// result(data1, data2)

// -----------------------   2



// -----------------------   3

data1 = { 
    b: 2,
    a: 1, 
}
data2 = { 
    b: 2,
    c: 1,  
}
data3 = { 
    c: 3,
    b: 5,
}

result = (a1, a2) => {
  if(Object.values(a1).toString() === Object.values(a2).toString() || Object.keys(a1).toString() === Object.keys(a2).toString()){
    return true;
  } 
  else {
    return false;
  }
}

console.log(result(data1, data2));
console.log(result(data2, data3));