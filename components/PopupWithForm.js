import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector); //should be written as { popupSelector } for shorthand?
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    console.log(this._inputList);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      const inputValues = this._getInputValues();
      // console.log(inputValues);
      this._handleFormSubmit();
    });
  }
}

export default PopupWithForm;

//18:44 line 13
