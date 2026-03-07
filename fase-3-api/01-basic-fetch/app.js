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
  )
  .catch((error) => console.error("Wah, gagal mengambil data: ", error));

// Latihan 1: Eksplorasi Endpoint & Data Filtering
const todosApi = "https://jsonplaceholder.typicode.com/todos";
fetch(todosApi)
  .then((response) => {
    return response.json();
  })
  //   hanya menampilkan todo yang belum selesai (completed: false)
  .then((todos) => {
    todos
      .filter((todo) => {
        return !todo.completed;
      })
      .forEach((todo) =>
        console.log(`[${todo.id}] ${todo.title} - Status: Belum Selesai`),
      );
  })
  .catch((error) => console.error("Wah, gagal mengambil data: ", error));

// Latihan 2: Dinamisasi DOM dengan Data API
// Tujuan: Menampilkan data asli dari internet ke layar browser secara rapi.
const container = document.getElementById("container-user");

fetch(usersApi)
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    const cardTemplate = users
      .map((user) => {
        return `
                <div class="card">
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <a href="${user.website}" target="_blank">Website: ${user.company.name}</a>
                </div>
            `;
      })
      .join("");
    container.innerHTML = cardTemplate;
  })
  .catch((error) => console.error("Wah, gagal mengambil data: ", error));
