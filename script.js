const form = document.getElementById("formLogin");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const akun = document.getElementById("akun").value.trim();
  const sandi = document.getElementById("sandi").value;
  const galat = [];

  if (akun === "") galat.push("Username atau email tidak boleh kosong.");
  else if (akun.includes("@") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(akun))
    galat.push("Format email tidak valid.");

  if (sandi === "") galat.push("Password tidak boleh kosong.");
  else if (sandi.length < 8) galat.push("Password minimal 8 karakter.");

  if (galat.length > 0) {
    pesan.innerHTML = '<div class="alert alert-danger">' + galat.join("<br>") + "</div>";
  } else {
    pesan.innerHTML = '<div class="alert alert-success">Validasi berhasil.</div>';
    form.reset();
  }
});