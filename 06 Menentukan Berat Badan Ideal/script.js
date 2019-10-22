var a, b, c, d, e,
  tinggiBadan = document.getElementById("tinggiBadan"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = tinggiBadan.value;
  b = a - 100;
  c = 0.1 * b;
  e = b - c;

  result.innerHTML = " Berat badan Idealnya adalah " + e;
});