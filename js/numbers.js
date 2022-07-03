const images = [
  "./assets/inages/numbersImages/0.jpg",
  "./assets/inages/numbersImages/1.jpg",
  "./assets/inages/numbersImages/2.jpg",
  "./assets/inages/numbersImages/3.jpg",
  "./assets/inages/numbersImages/4.jpg",
  "./assets/inages/numbersImages/5.jpg",
  "./assets/inages/numbersImages/6.jpg",
  "./assets/inages/numbersImages/7.jpg",
  "./assets/inages/numbersImages/8.jpg",
  "./assets/inages/numbersImages/9.jpg",
  "./assets/inages/numbersImages/10.jpg",
  "./assets/inages/thnx-for-watching.jpg",
];

// console.log(images.lastIndexOf( "./assets/inages/thnx-for-watching.jpg",));

const numbers = [
  "./numbers/0.mp3",
  "./numbers/1.mp3",
  "./numbers/2.mp3",
  "./numbers/3.mp3",
  "./numbers/4.mp3",
  "./numbers/5.mp3",
  "./numbers/6.mp3",
  "./numbers/7.mp3",
  "./numbers/8.mp3",
  "./numbers/9.mp3",
  "./numbers/10.mp3",
];
const caption = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "None",
  "Ten",
];

var count = 0;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
  count++;
  if (count >= images.length) count = 0;

  let audio = document.querySelector("#music");
  audio.querySelector("source").src = numbers[count];
  // Watching-Thanks;=========================
  if (images.length === images[11]) {
    document.getElementById("get_images").src = images[11];
  } else if (count === 11) {
    let btns = document.querySelector(".btns");
    let caption = document.querySelector("#caption");
    btns.style.display = "none";
    caption.style.display = "none";
  } else {
    console.log("This is Wrong!");
  }

  audio.load();
  audio.play();
  // console.log(audio)

  document.getElementById("get_images").src = images[count];
  let thumbCaption = document.querySelector("#para");
  thumbCaption.innerHTML = caption[count];
});

prev.addEventListener("click", () => {
  count--;
  if (count < 0) count = 0;
  let audio = document.querySelector("#music");
  audio.querySelector("source").src = numbers[count];
  audio.load();
  audio.play();
  // console.log(audio)
  document.getElementById("get_images").src = images[count];
  let thumbCaption = document.querySelector("#para");
  thumbCaption.innerHTML = caption[count];
});
