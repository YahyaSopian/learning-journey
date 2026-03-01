const isDeveloper = true;
const tahunSekarang = 2026;

function cekStatusUser(tahunLahirUser) {
  let hasilUmur = tahunSekarang - tahunLahirUser;
  let isAdult = hasilUmur >= 18;

  console.log(`--- Memproses Tahun Lahir: ${tahunLahirUser} ---`);
  console.log(`Umur: ${hasilUmur} tahun`);

  if (hasilUmur < 13) {
    console.log("Status: Anak-anak");
  } else if (hasilUmur >= 13 && hasilUmur <= 17) {
    console.log("Status: Remaja");
  } else {
    console.log("Status: Dewasa");
  }

  if (isAdult && isDeveloper) {
    console.log("💡 Pesan: Kamu dewasa yang hebat!");
  }
}

// Data Array
let daftarTahunLahir = [1990, 2005, 2012, 1985, 2004];

// Otomatisasi dengan Loop
for (let i = 0; i < daftarTahunLahir.length; i++) {
  cekStatusUser(daftarTahunLahir[i]);
}
