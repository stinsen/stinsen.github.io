import showHide from "./show-hide.js";
import imageDialog from "./image-dialog.js";

document.querySelectorAll("[data-preload-google]").forEach((l) =>
  l.addEventListener("load", (e) => {
    e.target.rel = "stylesheet";
  })
);

customElements.define("show-hide", showHide);
customElements.define("image-dialog", imageDialog);
