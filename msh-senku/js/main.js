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

  // Simpan nama
  localStorage.setItem("namaPlayer", nama);

  // Reset progress
  localStorage.removeItem("misi1");
  localStorage.removeItem("misi2");
  localStorage.removeItem("misi3");

  window.location.href = "briefing.html";
}

// =============================
// TAMPILKAN NAMA DI BRIEFING
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
// LANJUT KE MISI 1
// =============================
function lanjutKeMisi1() {
  window.location.href = "misi1.html";
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
    tampilkanError("errorMisi1", "");
    localStorage.setItem("misi1", "selesai");
    window.location.href = "misi2.html";
  } else {
    tampilkanError("errorMisi1", "Password salah. Analisis lagi.");
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
    tampilkanError("errorMisi2", "");
    localStorage.setItem("misi2", "selesai");
    window.location.href = "misi3.html";
  } else {
    tampilkanError("errorMisi2", "Kode salah. Teliti lagi.");
  }
}

// =============================
// MISI 3
// =============================
function cekMisi3(pilihan) {
  if (pilihan === "C") {
    tampilkanError("errorMisi3", "");
    localStorage.setItem("misi3", "selesai");
    window.location.href = "final.html";
  } else {
    tampilkanError(
      "errorMisi3",
      "Pilihan kurang tepat. Jangan mudah tertipu."
    );
  }
}

// =============================
// FINAL PAGE BADGE
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
