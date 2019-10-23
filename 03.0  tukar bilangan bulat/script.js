var x, y, z, a,
  x = document.getElementById("x"),
  y = document.getElementById("y"),
  z = document.getElementById("z"),

  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  x = x.value;
  y = y.value;
  z = z.value;
  a = x;
  x = y;
  y = z;
  z = a;
  result.innerHTML = 'Nilai X = Y adalah ' + x + '<br> Nilai Y = Z adalah ' + y + ' <br> Nilai Z = X adalah ' + z;
});