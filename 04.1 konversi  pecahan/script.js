var a, b, c, d, e, f, g, h, i, j,k, l,
    input  = document.getElementById('input'),
    btn    = document.getElementById('btn'),
    result = document.getElementById('result');

btn.addEventListener('click', function(){
  a     = input.value;
  b     = a / 1000;
  c     = Math.floor(b); // 1000
  d     = a - (c * 1000);
  e     = d / 500;
  f     = Math.floor(e); // 500
  g     = a - ((c * 1000) + (f * 500));
  h     = Math.floor(g / 100); // 100
  i     = a - ((c * 1000) + (f * 500)+ (h * 100));
  j     = Math.floor(i / 50); //50
  k     = a - ((c * 1000) + (f * 500) + (h * 100)+ (j * 50));
  l     = Math.floor(k / 25); //25
  result.innerHTML = c + ' buah pecahan 1000 <br>' + f +' buah pecahan 500 <br>' + h + ' buah pecahan 100 <br>' + j +' buah pecahan 50 <br>' + l +' buah pecahan 25<br>';
});