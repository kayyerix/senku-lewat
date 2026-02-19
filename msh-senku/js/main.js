// ======================================================
// SETUP AWAL GAME
// ======================================================

// Pastikan nyawa selalu ada
if (!localStorage.getItem("nyawa")) {
  localStorage.setItem("nyawa", 3);
}

// ======================================================
// FUNGSI TAMPILAN (UI)
// ======================================================

// Tampilkan jumlah nyawa
function updateNyawaDisplay() {
  const el = document.getElementById("nyawa");
  if (el) {
    el.textContent = "❤️ Nyawa: " + localStorage.getItem("nyawa");
  }
}

// Atur progress bar
function setProgress(persen) {
  const bar = document.getElementById("bar");
  if (bar) {
    bar.style.width = persen + "%";
  }
}

// Tampilkan jumpscare emoji
function tampilkanJumpscare() {
  const el = document.getElementById("jumpscare");
  if (!el) return;

  el.classList.add("show");

  setTimeout(function () {
    el.classList.remove("show");
  }, 700);
}

// Kurangi nyawa
function kurangNyawa() {
  let nyawa = parseInt(localStorage.getItem("nyawa"));
  nyawa--;

  localStorage.setItem("nyawa", nyawa);

  tampilkanJumpscare();
  updateNyawaDisplay();

  if (nyawa <= 0) {
    setTimeout(function () {
      alert("Nyawa habis. Misi gagal.");
      window.location.href = "index.html";
    }, 800);
  }
}

// ======================================================
// HELPER ERROR MESSAGE
// ======================================================

function tampilkanError(id, pesan) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = pesan;
  }
}

// ======================================================
// HALAMAN INDEX (MULAI GAME)
// ======================================================

function mulaiGame() {
  const namaInput = document.getElementById("namaInput");
  const nama = namaInput.value.trim();

  if (nama === "") {
    tampilkanError("errorNama", "Nama Agent tidak boleh kosong.");
    return;
  }

  // Simpan nama player
  localStorage.setItem("namaPlayer", nama);

  // Reset nyawa dan progress
  localStorage.setItem("nyawa", 3);
  localStorage.removeItem("misi1");
  localStorage.removeItem("misi2");
  localStorage.removeItem("misi3");

  window.location.href = "briefing.html";
}

// ======================================================
// HALAMAN BRIEFING
// ======================================================

function tampilkanNama() {
  const nama = localStorage.getItem("namaPlayer");

  if (!nama) {
    window.location.href = "index.html";
    return;
  }

  const salam = document.getElementById("salam");
  if (salam) {
    salam.textContent = "Selamat datang, Agent " + nama + ".";
  }
}

function lanjutKeMisi1() {
  window.location.href = "misi1.html";
}

// ======================================================
// CEK AKSES HALAMAN
// ======================================================

function cekAkses(key, redirect) {
  if (!localStorage.getItem(key)) {
    window.location.href = redirect;
  }
}

// ======================================================
// MISI 1
// ======================================================

function cekMisi1() {
  const input = document.getElementById("jawabanMisi1");
  const jawaban = input.value.trim().toLowerCase();

  if (jawaban === "anjar2012") {
    localStorage.setItem("misi1", "selesai");
    window.location.href = "misi2.html";
  } else {
    tampilkanError("errorMisi1", "Password salah. Analisis lagi.");
    kurangNyawa();
  }
}

// ======================================================
// MISI 2
// ======================================================

function cekMisi2() {
  const input = document.getElementById("jawabanMisi2");
  const jawaban = input.value.trim();

  if (jawaban === "X9-27Z") {
    localStorage.setItem("misi2", "selesai");
    window.location.href = "misi3.html";
  } else {
    tampilkanError("errorMisi2", "Kode salah. Teliti lagi.");
    kurangNyawa();
  }
}

// ======================================================
// MISI 3
// ======================================================

function cekMisi3(pilihan) {
  if (pilihan === "C") {
    localStorage.setItem("misi3", "selesai");
    window.location.href = "final.html";
  } else {
    tampilkanError(
      "errorMisi3",
      "Pilihan kurang tepat. Jangan mudah tertipu."
    );
    kurangNyawa();
  }
}

// ======================================================
// HALAMAN FINAL
// ======================================================

function tampilkanBadge() {
  const nama = localStorage.getItem("namaPlayer");

  if (!nama) {
    window.location.href = "index.html";
    return;
  }

  const el = document.getElementById("namaPlayer");
  if (el) {
    el.textContent = "Agent " + nama + " - 100% Berotak Senku";
  }
}

// ======================================================
// RESET GAME
// ======================================================

function resetGame() {
  localStorage.clear();
  window.location.href = "index.html";
}