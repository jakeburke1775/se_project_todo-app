class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    console.log(settings, this._formElement);

    // //--get input elements
    // this._inputList = Array.from(
    //   this._formElement.querySelector(this._settings.inputSelector)
    // );

    // //--submit bttn
    // this._submitBtn = this._formElement.querySelector(
    //   this._settings.submitButtonSelector
    // );
  }

  _checkInputValidity() {
    this._inputList.forEach((input) => {
      if (!input.validity.valid) {
        _showInputError();
      } else this._hideInputError();
    });
  }

  _showInputError() {}
  _hideInputError() {}

  _toggleBtnState() {}

  enableValidation() {}
  resetValidation() {}
  disableSubmitBtn() {}
}

export default FormValidator;
