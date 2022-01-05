a = 5;
b = 10;
function mak(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("after swap", "a=", a, "b =", b);
}
mak(a, b);
