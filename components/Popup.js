class Popup {
  constructor(popSelector) {
    this._popupElement = document.querySelector(popSelector);
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
