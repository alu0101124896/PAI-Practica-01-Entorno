for (let i = 1; i < 100; i++) {
  let txt = "";
  if (i % 3 === 0) {
    txt += "Fizz";
    if (i % 5 === 0){
      txt += "Buzz";
    }
  }else if (i % 5 === 0){
     txt += "Buzz";
  }else{
    txt += i;
  }
  console.log(txt);
}
