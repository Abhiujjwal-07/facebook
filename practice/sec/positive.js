function even(n) {
  if (n % 2 == 0)
    if (n > 0) {
      console.log("number is possitive and even");
    } else {
      console.log("number is negative and even");
    }
  else {
    if (n < 0) {
      console.log("number is negative and odd");
    } else {
      console.log("number is positive and odd");
    }
  }
}
even(-22);
