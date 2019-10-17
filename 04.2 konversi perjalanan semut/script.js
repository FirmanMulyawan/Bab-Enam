var a, b, c, d, e, f, g,
    input  = document.getElementById('input'),
    btn    = document.getElementById('btn'),
    result = document.getElementById('result');

btn.addEventListener('click', function(){
  a     = input.value;
  b     = a / 100000;
  c     = Math.floor(b); // kilometer
  e     = a - (c * 100000);
  f     = Math.floor(e / 100); // meter
  g     = a - ((c * 100000)+ (f * 100)); // centimeter
  
  result.innerHTML = c + ' kilometer + ' + f + ' meter + '+ g + ' centimeter ';
});