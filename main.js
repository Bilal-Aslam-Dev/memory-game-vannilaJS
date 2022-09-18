let memory = [];
const tilesLength = document.querySelectorAll(".tile").length;

document.querySelectorAll(".tile").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.classList.add("selected");
    memory.push(event.target);
    if (memory.length === tilesLength) {
      let interval = setInterval(() => {
        memory.forEach(() => memory[0].classList.remove("selected"));
        memory.shift();
        if (memory.length === 0) {
          clearInterval(interval);
        }
      }, 300);
    }
  });
});
