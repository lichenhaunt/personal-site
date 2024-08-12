document.addEventListener("DOMContentLoaded", () => {
  const hiddenMessage = document.getElementById("hidden-message");
  const triggerText = document.querySelector("#web-stuff small i");

  triggerText.addEventListener("mouseenter", () => {
    hiddenMessage.style.display = "inline-block";
    hiddenMessage.style.color = "white";
    hiddenMessage.style.fontSize = "medium";
  });
  triggerText.addEventListener("mouseleave", () => {
    hiddenMessage.style.display = "none";
  });
});
