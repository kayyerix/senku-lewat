// =============================
// SETUP AWAL (NYAWA + PROGRESS)
// =============================
if (!localStorage.getItem("nyawa")) {
  localStorage.setItem("nyawa", 3);
}

function updateNyawaDisplay() {
  const el = document.getElementById("nyawa");
  if (el) {
    el.textContent = "❤️ Nyawa: " + localStorage.getItem("nyawa");
  }
}

function kurangNyawa() {
  let nyawa = parseInt(localStorage.getItem("nyawa"));
  nyawa--;
  localStorage.setItem("nyawa", nyawa);

  updateNyawaDisplay();

  if (nyawa <= 0) {
    window.location.href = "index.html";
  }
}

function setProgress(persen) {
  const bar = document.getElementById("bar");
  if (bar) {
    bar.style.width = persen + "%";
  }
}

// =============================
// HELPER FUNCTION
// =============================
function tampilkanError(id, pesan) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = pesan;
  }
}

// =============================
// MULAI GAME
// =============================
function mulaiGame() {
  const nama = document.getElementById("namaInput").value.trim();

  if (nama === "") {
    tampilkanError("errorNama", "Nama Agent tidak boleh kosong.");
    return;
  }

  tampilkanError("errorNama", "");

  localStorage.setItem("namaPlayer", nama);

  // Reset progress + nyawa
  localStorage.setItem("nyawa", 3);
  localStorage.removeItem("misi1");
  localStorage.removeItem("misi2");
  localStorage.removeItem("misi3");

  window.location.href = "briefing.html";
}

// =============================
// TAMPILKAN NAMA
// =============================
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

// =============================
// CEK AKSES HALAMAN
// =============================
function cekAkses(key, redirect) {
  if (!localStorage.getItem(key)) {
    window.location.href = redirect;
  }
}

// =============================
// MISI 1
// =============================
function cekMisi1() {
  const jawaban = document
    .getElementById("jawabanMisi1")
    .value
    .trim()
    .toLowerCase();

  if (jawaban === "anjar2012") {
    localStorage.setItem("misi1", "selesai");
    window.location.href = "misi2.html";
  } else {
    tampilkanError("errorMisi1", "Password salah. Analisis lagi.");
    kurangNyawa();
  }
}

// =============================
// MISI 2
// =============================
function cekMisi2() {
  const jawaban = document
    .getElementById("jawabanMisi2")
    .value
    .trim();

  if (jawaban === "X9-27Z") {
    localStorage.setItem("misi2", "selesai");
    window.location.href = "misi3.html";
  } else {
    tampilkanError("errorMisi2", "Kode salah. Teliti lagi.");
    kurangNyawa();
  }
}

// =============================
// MISI 3
// =============================
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

// =============================
// FINAL PAGE
// =============================
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

// =============================
// RESET GAME
// =============================
function resetGame() {
  localStorage.clear();
  window.location.href = "index.html";
}
