class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    console.log(this._popupElement);
  }

  open(modal) {
    modal.classList.add("");
  }

  close() {}

  _handleEscapeClose() {}

  handleEventListeners() {}
}

export default Popup;
