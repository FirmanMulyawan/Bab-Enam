var a, b, c, d, e, f, g, h,i,
    input  = document.getElementById('input'),
    btn    = document.getElementById('btn'),
    result = document.getElementById('result');

btn.addEventListener('click', function(){
  a     = input.value;
  b     = a / 86400;
  c     = Math.floor(b); // hari
  d     = a - (c * 86400);
  e     = d / 3600;
  f     = Math.floor(e); // jam
  g     = a - ((c * 86400) +(f * 3600));
  h     = Math.floor(g / 60); // menit
  i     = a - ((c * 86400) +(f * 3600)+ (h * 60)); // detik
  
  result.innerHTML = c + ' hari '+ f +' Jam ' + h + ' Menit ' + i +' Detik';

});