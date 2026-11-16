const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCap = lightbox.querySelector("figcaption");
const closeBtn = lightbox.querySelector(".lightbox-close");
let lastTrigger = null;

document.querySelectorAll("[data-zoom]").forEach((el) => {
  el.addEventListener("click", () => {
    lastTrigger = el;
    lightboxImg.src = el.dataset.zoom;
    lightboxImg.alt = el.dataset.alt || "";
    lightboxCap.textContent = el.dataset.caption || "";
    lightbox.hidden = false;
    document.body.classList.add("is-locked");
    closeBtn.focus();
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("is-locked");
  lightboxImg.removeAttribute("src");
  if (lastTrigger) lastTrigger.focus();
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

