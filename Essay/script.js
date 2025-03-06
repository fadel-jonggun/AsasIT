//! Soal 1
let nilai = 100;
if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else if (nilai <= 60) {
  console.log("D");
} else {
  console.log("E");
}

//! Prompt Masukan Password dan Username
let username = prompt("Masukkan Username");
if (username === "admin") {
  let password = prompt("Masukkan Password");
  if (password === "12345") {
    alert("Login Berhasil");
  } else {
    alert("Login Gagal");
  }
} else {
  alert("Username Salah");
}

//! Function login yang menerima 2 parameter
function login(username, password) {
  if (username === "admin" && password === "12345") {
    console.log("Login Berhasil");
  } else {
    console.log("Login Gagal");
  }
}

login("admin", "12345");
