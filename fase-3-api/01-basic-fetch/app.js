// Latihan 1

const postApi = "https://jsonplaceholder.typicode.com/posts/1";
const usersApi = "https://jsonplaceholder.typicode.com/users";
// Mengambil data dari API menggunakan fetch
fetch(postApi)
  // Mengubah response menjadi format JSON
  .then((response) => {
    return response.json();
  })
  // Menampilkan judul dan isi data yang telah diambil ke konsol
  .then((data) => console.log(`Judul: ${data.title}\nIsi: ${data.body}`))
  //   Menangani error jika terjadi kesalahan saat pengambilan data
  .catch((error) => console.error("Wah, gagal mengambil data: ", error));

// Latihan 2
// Mengambil data 10 orang dari API menggunakan fetch
fetch(usersApi)
  .then((response) => {
    return response.json();
  })
  .then((users) =>
    // Hanya tampilkan user yang nama perusahaannya (company.name) mengandung kata "Group" atau "LLC".
    users
      .filter((user) => {
        return (
          user.company.name.includes("Group") ||
          user.company.name.includes("LLC")
        );
      })
      .forEach((user) => {
        console.log(`[${user.id}] ${user.name} - Email: ${user.email}`);
      }),
  );
