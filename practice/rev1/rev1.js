function rev() {
  var num = 32243;
  var digits = num.toString().split("");
  num.reverse(num);
  var realDigits = digits.map(Number);
  console.log(realDigits);
}
rev();
