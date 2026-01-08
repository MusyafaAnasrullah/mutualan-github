const users = [
  { username: "octocat", name: "GitHub Mascot" }
];

const container = document.getElementById("listUser");

users.forEach(user => {
  container.innerHTML += `
    <div class="card">
      <img src="https://github.com/${user.username}.png">
      <div class="username">${user.username}</div>
      <div>${user.name}</div>
      <a href="https://github.com/${user.username}" target="_blank">
        <button>Lihat Profil</button>
      </a>
    </div>
  `;
});
