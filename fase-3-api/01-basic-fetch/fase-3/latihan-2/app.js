const postApi = "https://jsonplaceholder.typicode.com/posts?_limit=5";
const btnMuat = document.getElementById("btn-muat");
const container = document.getElementById("container-berita");

// Fungsi Utama
const muatBerita = async () => {
  // 1. Tampilkan Loading State (Feedback visual untuk user)
  container.innerHTML =
    "<p class='loading'>Sedang memuat berita, mohon tunggu...</p>";
  btnMuat.disabled = true; // Matikan tombol agar tidak diklik berkali-kali

  try {
    // 2. Ambil data (Fetch) - Kita batasi hanya 5 berita (?_limit=5)
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );

    // Cek jika koneksi ke server bermasalah
    if (!response.ok) throw new Error("Gagal terhubung ke server berita.");

    const daftarBerita = await response.json();

    // 3. Render data ke HTML menggunakan .map()
    const htmlBerita = daftarBerita
      .map(
        (berita) => `
      <div class="news-item">
        <h3>${berita.title}</h3>
        <p>${berita.body.substring(0, 100)}...</p>
      </div>
    `,
      )
      .join("");

    container.innerHTML = htmlBerita;
  } catch (error) {
    // 4. Tangani jika terjadi Error
    container.innerHTML = `<p class="error">Waduh! ${error.message}</p>`;
  } finally {
    // 5. Kembalikan tombol ke keadaan aktif
    btnMuat.disabled = false;
  }
};

// Pasang Event Listener
btnMuat.addEventListener("click", muatBerita);
