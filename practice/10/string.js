function longest(n) {
  n = n.split(" ");
  return n.sort((a, b) => b.length - a.length)[0];
}
console.log(longest("Web Development Tutorial"));
