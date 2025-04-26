class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    // console.log(this._popupElement);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible"); //remove class from popup element
    document.removeEventListener("keyup", this._handleEscapeClose); //remove the escape listener
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        this._popupElement === evt.target ||
        evt.target === this._popupCloseBtn
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
