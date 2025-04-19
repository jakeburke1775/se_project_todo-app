import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector); //should be written as { popSelector } for shorthand?
  }
}

export default PopupWithForm;
