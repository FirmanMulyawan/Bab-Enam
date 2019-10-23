var a, b, c, d, e, f, g,
  input = document.getElementById('input'),
  btn = document.getElementById('btn'),
  result = document.getElementById('result');

btn.addEventListener('click', function () {
  a = input.value;
  b = a / 365;
  c = Math.floor(b); // tahun
  e = a - (c * 365);
  f = Math.floor(e / 30); // bulan
  g = a - ((c * 365) + (f * 30));
  // e     = c - (d * 30);

  result.innerHTML = c + ' tahun ' + f + ' Bulan ' + g + ' Hari ';
});