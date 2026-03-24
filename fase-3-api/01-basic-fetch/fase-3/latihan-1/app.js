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
const listUser = async () => {
  const container = document.getElementById("container-user");

  // 1. Tampilkan loading sebelum fetch mulai
  container.innerHTML = "<p>Sedang mengambil data...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Cek jika response sukses (status 200-299)
    if (!response.ok) throw new Error("Gagal mengambil data dari server");

    const users = await response.json();

    // 2. Jika sukses, ganti isi container dengan data
    container.innerHTML = users
      .map(
        (user) => `
      <div class="card">
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <a href="https://${user.website}" target="_blank">Website: ${user.website}</a>
      </div>
    `,
      )
      .join("");
  } catch (error) {
    // 3. Jika gagal, tampilkan pesan error ke user
    container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
};

listUser();

// Latihan 1: Refactoring ke async/await dan Error Handling
const todosApi = "https://jsonplaceholder.typicode.com/todos";
const fetchTodos = async () => {
  try {
    const response = await fetch(todosApi);

    // cek apakah response berhasil
    if (!response.ok) {
      console.error(`Gagal mengambila data dari server: ${response.status}`);
    }

    // mengubah response menjadi format JSON
    const todos = await response.json();
    todos
      .filter((todo) => {
        return !todo.completed;
      })
      .forEach((todo) =>
        console.log(`[${todo.id}] ${todo.title} - Status: Belum Selesai`),
      );
  } catch (error) {
    console.error("Wah, gagal mengambil data: ", error);
  }
};

fetchTodos();

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
