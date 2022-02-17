function copyToClipBoard() {
  const content = document.querySelector("#om-start-command").textContent;
  let text = document.querySelector(".om-copied-text");

  navigator.clipboard
    .writeText(content)
    .then(() => {
      text.classList.add("visible");
    })
    .finally(() => {
      setTimeout(() => {
        text.classList.remove("visible");
      }, 1000);
    });
}
