var a, b, c, d, e,
  Kelahiran = document.getElementById('kelahiran'),
  Imigrasi = document.getElementById('imigrasi'),
  Kematian = document.getElementById('kematian'),
  Emigrasi = document.getElementById('emigrasi'),
  btn = document.getElementById('btn'),
  result = document.getElementById('result');

btn.addEventListener("click", function() {
  a = Number(Kelahiran.value);
  b = Number(Imigrasi.value);
  c = Number(Kematian.value);
  d = Number(Emigrasi.value);
  e = (a + b) - (c + d);

  result.innerHTML = " jumlah penduduk suatu negara adalah " + e;
});
