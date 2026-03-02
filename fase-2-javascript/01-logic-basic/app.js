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

const listParent = document.getElementById("daftar-user");

// Fungsi khusus untuk membuat dan menempelkan elemen ke layar
function renderUser(userObj) {
  const item = document.createElement("li");
  item.innerText = `${userObj.nama} - Lahir: ${userObj.tahunLahir}`;

  let usiaUser = tahunSekarang - userObj.tahunLahir;

  // Tentukan class berdasarkan usia
  if (usiaUser >= 18) item.classList.add("dewasa");
  else if (usiaUser >= 13) item.classList.add("remaja");
  else item.classList.add("anak");

  listParent.appendChild(item);
}

// Sekarang Loop jadi jauh lebih bersih:
dataUser.forEach((user) => {
  renderUser(user);
  cekStatusUser(user.nama, user.tahunLahir, user.isDev);
});

// Dan Event Listener juga jadi sangat ringkas:
const tombol = document.getElementById("btn-tambah");
tombol.addEventListener("click", () => {
  const userBaru = { nama: "User Misterius", tahunLahir: 2000, isDev: false };
  renderUser(userBaru);
  cekStatusUser(userBaru.nama, userBaru.tahunLahir, userBaru.isDev);
});
