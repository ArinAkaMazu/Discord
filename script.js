const button2 = document.getElementById("but2");
let position = 40;

button2.addEventListener("mouseover", function () {
  console.log(position);
  if (position == 40) {
    position = -40;
  } else {
    position = 40;
  }
  this.style.left = position + "px";
});

document.getElementById("but1").addEventListener("click", function () {
  alert("YAYY THANK U 😍❤️");
});
