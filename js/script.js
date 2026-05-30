function login() {
  let email = document.getElementById("email").value;

  let password = document.getElementById("password").value;

  if (email == "admin@gmail.com" && password == "123456") {
    alert("Đăng nhập thành công");

    window.location = "index.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu");
  }
}
