export default class extends HTMLElement {
  constructor() {
    super();
    this.images = Array.from(this.querySelectorAll("picture"));
    this.dialogImages = this.images.map((imgNode) => imgNode.cloneNode(true));
    this.dialog = document.createElement("dialog");

    this.closeBtn = this.createIconButton(this.getCloseIcon(), "Stäng dialog");
    this.closeBtn.setAttribute("formmethod", "dialog");
    let form = document.createElement("form");
    form.appendChild(this.closeBtn);
    this.dialog.appendChild(form);

    this.prevBtn = this.createIconButton(
      this.getPrevIcon(),
      "Föregående bild",
      "prev"
    );
    this.prevBtn.setAttribute("index-modifier", "-1");
    this.prevBtn.addEventListener("click", this);
    this.dialog.appendChild(this.prevBtn);
    this.dialogImages.forEach((image) => {
      image.setAttribute("hidden", "");
      this.dialog.appendChild(image);
    });
    this.nextBtn = this.createIconButton(
      this.getNextIcon(),
      "Nästa bild",
      "next"
    );
    this.nextBtn.setAttribute("index-modifier", "1");
    this.nextBtn.addEventListener("click", this);
    this.dialog.appendChild(this.nextBtn);

    this.appendChild(this.dialog);

    this.images.forEach((img) => {
      img.setAttribute("clickable", "");
      img.addEventListener("click", this);
    });

    this.dialog.addEventListener("close", this);
    this.dialog.addEventListener("keydown", this);
  }

  createIconButton(icon, label, attribute) {
    let btn = document.createElement("button");
    btn.innerHTML = icon;
    btn.setAttribute("aria-label", label);
    if (attribute) {
      btn.setAttribute(attribute, "");
    }
    return btn;
  }

  handleEvent(event) {
    this[`on${event.type}`](event);
  }

  onclick(event) {
    let modifier = event.currentTarget.getAttribute("index-modifier");
    if (!modifier) {
      let clickedImageIndex = this.images.indexOf(event.currentTarget);
      this.dialogImages[clickedImageIndex].removeAttribute("hidden");
      this.dialog.showModal();
      return;
    }
    this.goToNextImage(modifier);
  }

  goToNextImage(modifier) {
    let currentImageIndex = this.dialogImages.findIndex(
      (image) => !image.hasAttribute("hidden")
    );
    let newIndex = currentImageIndex + +modifier;
    if (!isFinite(newIndex)) return;
    if (newIndex < 0) newIndex = this.dialogImages.length - 1;
    if (newIndex >= this.dialogImages.length) newIndex = 0;
    this.dialogImages[currentImageIndex].setAttribute("hidden", "");
    this.dialogImages[newIndex].removeAttribute("hidden");
  }

  onclose() {
    this.dialogImages.forEach((image) => image.setAttribute("hidden", ""));
  }

  onkeydown(event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    this.goToNextImage(event.key === "ArrowLeft" ? -1 : 1);
  }

  getCloseIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
  }

  getNextIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`;
  }

  getPrevIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`;
  }
}
