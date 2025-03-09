let Kurisu = [
    "https://i.imgur.com/fGqOAAZ.jpeg",
    "https://i.imgur.com/zyJ0Ef6.jpeg"
];

const img = document.getElementsByTagName("img");

for (let i = 0; i < img.length; i++) {
    const index = Math.floor(Math.random() * Kurisu.length);
    img[i].src = Kurisu[index];
}