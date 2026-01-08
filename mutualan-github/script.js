const members = [
    {
        username: "MusyafaAnasrullah",
        name: "Musyafa Anasrullah",
        avatar: "https://github.com/musyafaanasrullah.png"
    },
    {
        username: "Ahmad Hibrizi",
        name: "hazetprojects",
        avatar: "https://github.com/hazetprojects.png"
    },
    {
        username: "Felicity",
        name: "felicityblueish",
        avatar: "https://github.com/felicityblueish.png"
    },
    {
        username: "Aymen Berbiche",
        name: "waamara",
        avatar: "https://github.com/waamara.png"
    }
];

const container = document.getElementById("cardContainer");

members.forEach(member => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${member.avatar}" alt="${member.username}">
        <div class="username">${member.username}</div>
        <div class="name">${member.name}</div>
        <a href="https://github.com/${member.username}" target="_blank">
            Lihat Profil
        </a>
    `;

    container.appendChild(card);
});
