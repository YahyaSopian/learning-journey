const container = document.getElementById("container-user");
const inputCari = document.getElementById("input-cari");

// Variabel "Gudang" untuk menyimpan data asli dari API
let dataSemuaUser = [];

// 1. Fungsi untuk Mengambil Data (Fetch)
const ambilData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Gagal mengambil data");

    const users = await response.json();

    // Simpan ke gudang agar bisa difilter nanti
    dataSemuaUser = users;

    // Tampilkan semua user untuk pertama kali
    renderUser(dataSemuaUser);
  } catch (error) {
    container.innerHTML = `<p class="error">${error.message}</p>`;
  }
};

// 2. Fungsi untuk Menampilkan ke Layar (Render)
const renderUser = (daftarUser) => {
  // Jika hasil pencarian kosong
  if (daftarUser.length === 0) {
    container.innerHTML = "<p>User tidak ditemukan.</p>";
    return;
  }

  const htmlString = daftarUser
    .map(
      (user) => `
        <div class="card-user">
            <h3>${user.name}</h3>
            <p>📧 ${user.email}</p>
            <p>🏢 ${user.company.name}</p>
        </div>
    `,
    )
    .join("");

  container.innerHTML = htmlString;
};

// 3. Fungsi Event Listener untuk Pencarian
inputCari.addEventListener("input", (e) => {
  const kataKunci = e.target.value.toLowerCase(); // Ambil ketikan user dan buat huruf kecil

  // Filter dari gudang dataSemuaUser
  const hasilFilter = dataSemuaUser.filter((user) => {
    return user.name.toLowerCase().includes(kataKunci);
  });

  // Render ulang hanya data yang cocok
  renderUser(hasilFilter);
});

// Jalankan pengambilan data saat aplikasi dimulai
ambilData();
