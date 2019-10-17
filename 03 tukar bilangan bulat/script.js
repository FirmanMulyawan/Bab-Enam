var X, Y, Z;
  (X = document.getElementById("x")),
  (Y = document.getElementById("y")),
  (Z = document.getElementById("z")),
  // (emigrasi = document.getElementById("emigrasi")),
  (btn = document.getElementById("btn")),
  (result = document.getElementById("result"));

btn.addEventListener("click", function() {
  Y = X.value;
  Z = Y.value;
  X = Z.value;
  


  result.innerHTML = 'Nilai X adalah '+ X ;
});
