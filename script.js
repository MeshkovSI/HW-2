function showData() {
  let lastName = document.getElementById("lastName").value;
  let firstName = document.getElementById("firstName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let output = document.getElementById("output");
  output.innerHTML = `
        <p><strong>Фамилия:</strong> ${lastName}</p>
        <p><strong>Имя:</strong> ${firstName}</p>
        <p><strong>Электронная почта:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
    `;
}

let toggleThemeButton = document.getElementById("changeTheme");
let body = document.body;

toggleThemeButton.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
});
