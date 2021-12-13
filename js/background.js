const image = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = image[Math.floor(Math.random() * image.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);