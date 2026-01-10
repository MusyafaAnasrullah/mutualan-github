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
    },
    {
        username: "maslutfi28",
        name: "Mas_Lutfi",
        avatar: "https://github.com/maslutfi28.png"
    },
    {
        username: "Ella-patien04",
        name: "@ell_hasby442",
        avatar: "https://github.com/Ella-patien04.png"
    },
    {
        username: "fyydsz",
        name: "Fyy",
        avatar: "https://github.com/fyydsz.png"
    },
    {
        username: "VICKYFIRNANSYAH",
        name: "VICKYFIRNANSYAH",
        avatar: "https://github.com/VICKYFIRNANSYAH.png"
    },
    {
        username: "Erzhass",
        name: "Erzha Noverico Ardheva",
        avatar: "https://github.com/Erzhass.png"
    },
    {
        username: "heyfann22",
        name: "Fania Lestari",
        avatar: "https://github.com/heyfann22.png"
    },
    {
        username: "gelarahadian",
        name: "Gelar Rahadian Fajar",
        avatar: "https://github.com/gelarahadian.png"
    },
    {
        username: "Galaxy-31",
        name: "Gelar Rahadian Fajar",
        avatar: "https://github.com/Galaxy-31.png"
    },
    {
        username: "ibrahimzahiddm",
        name: "zahiedm_",
        avatar: "https://github.com/ibrahimzahiddm.png"
    },
    {
        username: "delafajarmulia",
        name: "Dela Fajar Mulia",
        avatar: "https://github.com/delafajarmulia.png"
    },
    {
        username: "theniswara",
        name: "M. Daniswara Raditya",
        avatar: "https://github.com/theniswara.png"
    },
    {
        username: "Sultonol",
        name: "Sultonol Auliya",
        avatar: "https://github.com/Sultonol.png"
    },
    {
        username: "AnzamiCreative",
        name: "Anggun Zahrani",
        avatar: "https://github.com/AnzamiCreative.png"
    },
    {
        username: "Irfansangjuara",
        name: "Irfan Sangjuara",
        avatar: "https://github.com/Irfansangjuara.png"
    },
    {
        username: "Nextraile",
        name: "Lawhool",
        avatar: "https://github.com/Nextraile.png"
    },
    {
        username: "Violennx",
        name: "Renggaa",
        avatar: "https://github.com/Violennx.png"
    },
    {
        username: "Apinnnnnnnn",
        name: "Arvin Kusmardiyana",
        avatar: "https://github.com/Apinnnnnnnn.png"
    },
    {
        username: "rafifhardjaa",
        name: "AbdurrahmanRafif",
        avatar: "https://github.com/rafifhardjaa.png"
    },
    {
        username: "hndrali",
        name: "Mahendra Ali Shidiq",
        avatar: "https://github.com/hndrali.png"
    },
    {
        username: "seriie",
        name: "Zee",
        avatar: "https://github.com/seriie.png"
    },
    {
        username: "waliulu14",
        name: "Muhammad Idrus Waliulu",
        avatar: "https://github.com/waliulu14.png"
    },
    {
        username: "nrhdyt3012",
        name: "Dwi Nurhidayat",
        avatar: "https://github.com/nrhdyt3012.png"
    },
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
