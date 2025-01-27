document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document
  .querySelector(".composer button")
  .addEventListener("click", (event) => {
    let song = document.querySelector("#input").value;

    if (song) {
      let notes = song.split("");
      playComposition(notes);
    }
  });

document.body.addEventListener("click", (event) => {
  let key = event.target.dataset.key;
  playSound(key);
});

function playSound(sound) {
  let audioElemnt = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElemnt) {
    audioElemnt.currentTime = 0;
    audioElemnt.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}

function playComposition(notes) {
  let cooldown = 0;
  for (let note of notes) {
    setTimeout(() => {
      playSound(`key${note}`);
    }, cooldown);
    cooldown += 250;
  }
}
