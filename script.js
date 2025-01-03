function random(number) {
    return Math.floor(Math.random() * number);
}

function randomColor() {
    const color = `rgb(${random(255)} ${random(255)} ${random(255)})`
    return color;
}

function changeColorGetElementById() {
    document.getElementById("element1").style.backgroundColor = randomColor();
    document.getElementById("element1").style.color = randomColor();
}

function changeColorQuerySelector() {
    document.querySelector("#element2").style.backgroundColor = randomColor();
    document.querySelector("#element2").style.color = randomColor();
}

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".container a");
  const addButton = document.querySelectorAll(".container button")[0];
  const enlargeButton = document.querySelectorAll(".container button")[1];
  const shrinkButton = document.querySelectorAll(".container button")[2];
  const deleteButton = document.querySelectorAll(".container button")[3];

  addButton.addEventListener("click", () => {
      if (!imageContainer.querySelector("img")) {
          const newImage = document.createElement("img");
          newImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/LvivOldTown1.jpg/1920px-LvivOldTown1.jpg";
          newImage.alt = "Зображення м. Львова";
          newImage.width = 600;
          imageContainer.appendChild(newImage);
      }
  });

  enlargeButton.addEventListener("click", () => {
      const image = imageContainer.querySelector("img");
      if (image) image.width += 50;
  });

  shrinkButton.addEventListener("click", () => {
      const image = imageContainer.querySelector("img");
      if (image && image.width > 50) image.width -= 50;
  });

  deleteButton.addEventListener("click", () => {
      const image = imageContainer.querySelector("img");
      if (image) imageContainer.removeChild(image);
  });
});