var dd1, mm1, yy1, dd2, mm2, yy2, dd3, mm3, yy3, total_hari1, total_hari2, a,
  dd1 = document.getElementById('dd1'),
  mm1 = document.getElementById('mm1'),
  yy1 = document.getElementById('yy1'),
  dd2 = document.getElementById('dd2'),
  mm2 = document.getElementById('mm2'),
  yy2 = document.getElementById('yy2'),
  btn = document.getElementById('btn'),
  result = document.getElementById('result');

btn.addEventListener('click', function () {
  dd1 = Number(dd1.value);
  mm1 = Number(mm1.value);
  yy1 = Number(yy1.value);
  dd2 = Number(dd2.value);
  mm2 = Number(mm2.value);
  yy2 = Number(yy2.value);
  var total = 0;
  total_hari1 = Number((yy1 * 365) + (mm1 * 30) + dd1);
  total_hari2 = Number((yy2 * 365) + (mm2 * 30) + dd2);
  if (total_hari2 > total_hari1) {
    total = Number(total_hari2) - Number(total_hari1);
    yy3 = Math.floor(total / 365); // tahun
    a = total - (yy3 * 365);
    mm3 = Math.floor(a / 30); // bulan
    dd3 = total - ((yy3 * 365) + (mm3 * 30));



  }
  result.innerHTML = yy3 + " Tahun <br>" + mm3 + " Bulan <br>" + dd3 + " Hari ";



});