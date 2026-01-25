// deklarasi variabel
const nama = "Yahya";
let umur = 28;
const isDeveloper = true;

// Operasi sederhana
umur += 1; // bertambah satu tahun

// Menggunakan Template Literals
console.log(`Nama saya ${nama}, umur saya ${umur} tahun`);
// Tugas membuat program kecil yang bisa menghitung umur berdasarkan tahun lahir.
const tahunSekarang = 2026;
let tahunLahir = 1996;
let hasilUmur = tahunSekarang - tahunLahir;
console.log(
  "Halo " + nama + ", kamu sekarang berumur " + hasilUmur + " tahun.",
);

let isAdult = hasilUmur >= 18;
console.log("Apakah kamu sudah dewasa? " + isAdult);

// Conditional statement
if (hasilUmur < 13) {
  console.log("Kamu masih anak-anak.");
} else if (hasilUmur >= 13 && hasilUmur <= 17) {
  console.log("Kamu sudah remaja.");
} else {
  console.log("Kamu sudah dewasa.");
}

// Logika yang lebih bersih
if (isAdult && isDeveloper) {
  console.log("Kamu dewasa yang hebat!");
}
