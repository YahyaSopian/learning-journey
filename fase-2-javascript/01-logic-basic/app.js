// deklarasi variabel
const nama = "Yahya";
let umur = 28;
const isDeveloper = true;

// Operasi sederhana
umur += 1; // bertambah satu tahun

// Mwnampilkan hasil ke konsol
console.log("Nama saya " + nama + ", umur saya " + umur + " tahun");

// Tugas membuat program kecil yang bisa menghitung umur berdasarkan tahun lahir.
const tahunSekarang = 2026;
let tahunLahir = 1996;
let hasilUmur = tahunSekarang - tahunLahir;
console.log(
  "Halo " + nama + ", kamu sekarang berumur " + hasilUmur + " tahun.",
);

let isAdult = hasilUmur >= 18;
console.log("Apakah kamu sudah dewasa? " + isAdult);
