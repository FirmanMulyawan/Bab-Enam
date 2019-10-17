var a, b, c, d, e, f, g, h,
    input  = document.getElementById('input'),
    btn    = document.getElementById('btn'),
    result = document.getElementById('result');

btn.addEventListener('click', function(){
  a     = input.value;
  b     = a / 0.9144;
  c     = Math.floor(b); // Yard
  e     = a - (c * 0.9144);
  f     = Math.floor(e / 0.3048); // kaki
  g     = a - ((c * 0.9144)+ (f * 0.3048)); 
  h     = Math.floor (g / 0.0254);  // Inchi
  // g     = a - (b * 1000 + c * 500 + e * 100);
  // h     = g /50;
  // i     = a -(b * 1000 + c *500 + e * 100 + g * 50);
  // j     = i/25;
  
  result.innerHTML = c + ' Yard + ' + f + ' kaki + '+ h + ' Inchi ';
});