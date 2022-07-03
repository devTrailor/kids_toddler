const images = [
  "./assets/inages/alphabetsimg/a.jpg",
  "./assets/inages/alphabetsimg/b.jpg",
  "./assets/inages/alphabetsimg/c.png",
  "./assets/inages/alphabetsimg/d.jpg",
  "./assets/inages/alphabetsimg/e.jpg",
  "./assets/inages/alphabetsimg/f.jpg",
  "./assets/inages/alphabetsimg/g.jpg",
  "./assets/inages/alphabetsimg/h.jpg",
  "./assets/inages/alphabetsimg/i.jpg",
  "./assets/inages/alphabetsimg/j.jpg",
  "./assets/inages/alphabetsimg/k.jpg",
  "./assets/inages/alphabetsimg/l.jpg",
  "./assets/inages/alphabetsimg/m.jpg",
  "./assets/inages/alphabetsimg/n.jpg",
  "./assets/inages/alphabetsimg/o.jpg",
  "./assets/inages/alphabetsimg/p.jpg",
  "./assets/inages/alphabetsimg/q.jpg",
  "./assets/inages/alphabetsimg/r.jpg",
  "./assets/inages/alphabetsimg/s.jpg",
  "./assets/inages/alphabetsimg/t.jpg",
  "./assets/inages/alphabetsimg/u.jpg",
  "./assets/inages/alphabetsimg/v.jpg",
  "./assets/inages/alphabetsimg/w.jpg",
  "./assets/inages/alphabetsimg/x.png",
  "./assets/inages/alphabetsimg/y.jpg",
  "./assets/inages/alphabetsimg/z.jpg",
  "./assets/inages/thnx-for-watching.jpg",
];
console.log(images.lastIndexOf("./assets/inages/thnx-for-watching.jpg"));

const alphabets = [
  "./alpahbets_sounds/a.mp3",
  "./alpahbets_sounds/b.mp3",
  "./alpahbets_sounds/c.mp3",
  "./alpahbets_sounds/d.mp3",
  "./alpahbets_sounds/e.mp3",
  "./alpahbets_sounds/f.mp3",
  "./alpahbets_sounds/g.mp3",
  "./alpahbets_sounds/h.mp3",
  "./alpahbets_sounds/i.mp3",
  "./alpahbets_sounds/j.mp3",
  "./alpahbets_sounds/k.mp3",
  "./alpahbets_sounds/l.mp3",
  "./alpahbets_sounds/m.mp3",
  "./alpahbets_sounds/n.mp3",
  "./alpahbets_sounds/o.mp3",
  "./alpahbets_sounds/p.mp3",
  "./alpahbets_sounds/q.mp3",
  "./alpahbets_sounds/r.mp3",
  "./alpahbets_sounds/s.mp3",
  "./alpahbets_sounds/t.mp3",
  "./alpahbets_sounds/u.mp3",
  "./alpahbets_sounds/v.mp3",
  "./alpahbets_sounds/w.mp3",
  "./alpahbets_sounds/x.mp3",
  "./alpahbets_sounds/y.mp3",
  "./alpahbets_sounds/z.mp3",
];

const caption = [
  "Apple",
  "baseball",
  "Clock",
  "Donkey",
  "Elephant",
  "Father",
  "Grandmother",
  "Hungry",
  "Internet",
  "Justice",
  "Kangaroo",
  "London",
  "Monkey",
  "Norway",
  "Overtime",
  "Pillow",
  "Question",
  "Rabbit",
  "Superman",
  "Telephone",
  "Underwear",
  "Vaccinate",
  "WWW",
  "Xylophone",
  "Yoghurt",
  "Zebra",
];

// var last_img = ["./assets/inages/thnx-for-watching.jpg"];

var count = 0;
// let thumbCaption = document.querySelector("#caption");
// let text = thumbCaption.children;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
  count++;
  if (count >= images.length) count = 0;
  let audio = document.querySelector("#music");
  audio.querySelector("source").src = alphabets[count];

  // Watching-Thanks;=========================
  if (images.length === images[26]) {
    document.getElementById("get_images").src = images[26];
  } else if (count === 26) {
    let btns = document.querySelector(".btns");
    let caption = document.querySelector("#caption");
    btns.style.display = "none";
    caption.style.display = "none";
  } else {
    console.log("This is Wrong!");
  }
  audio.load();
  audio.play();
  console.log(audio);
  document.getElementById("get_images").src = images[count];
  let thumbCaption = document.querySelector("#para");
  thumbCaption.innerHTML = caption[count];
});

prev.addEventListener("click", () => {
  count--;
  if (count < 0) count = images.length - 1;
  let audio = document.querySelector("#music");
  audio.querySelector("source").src = alphabets[count];
  audio.load();
  audio.play();
  console.log(audio);
  document.getElementById("get_images").src = images[count];
  let thumbCaption = document.querySelector("#para");
  thumbCaption.innerHTML = caption[count];
});
