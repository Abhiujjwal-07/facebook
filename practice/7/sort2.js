function no() {
  const nom = [40, 100, 1, 5, 25, 10];
  nom.sort(function (a, b) {
    return a - b;
  });
  console.log("acc order:", nom);
  nom.reverse(nom);
  console.log("dec order:", nom);
}
no();
