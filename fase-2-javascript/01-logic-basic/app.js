const tahunSekarang = 2026;

function cekStatusUser(nama, tahunLahirUser, isDev) {
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

  if (isAdult && isDev) {
    console.log(`Halo ${nama}, kamu dewasa yang hebat!`);
  }
}

// Data Array
// let daftarTahunLahir = [1990, 2005, 2012, 1985, 2004];

// Otomatisasi dengan Loop
// for (let i = 0; i < daftarTahunLahir.length; i++) {
//   cekStatusUser(daftarTahunLahir[i]);
// }

const dataUser = [
  { nama: "Yahya", tahunLahir: 1996, isDev: true },
  { nama: "Budi", tahunLahir: 2010, isDev: false },
  { nama: "Sari", tahunLahir: 2015, isDev: true },
];

for (let i = 0; i < dataUser.length; i++) {
  cekStatusUser(dataUser[i].nama, dataUser[i].tahunLahir, dataUser[i].isDev);
}
