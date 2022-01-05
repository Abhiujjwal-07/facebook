us = [
  {
    name: "Raj",
    Age: "15",
    email: "ab121",
  },
  {
    name: "Aman",
    Age: "22",
    email: "bass",
  },
  {
    name: "Vivek",
    Age: "13",
    email: "2323",
  },
];

function array() {
  for (i = 0; i < us.length; i++) {
    if (us[i]["Age"] > 20) {
      console.log(us[i]);
    } else {
      console.log("");
    }
  }
}
array();
