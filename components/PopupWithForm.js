import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector }); //should be written as { popSelector } for shorthand?
    console.log(this._popupElement.querySelector(".popup__form"));
  }

  setEventListeners() {
    super.setEventListeners();
    addTodoForm.addEventListener("submit", (evt) => {
      console.log("submitted");
    });
  }
}

export default PopupWithForm;
