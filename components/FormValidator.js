class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
    console.log(this._formEl);

    // //--get input elements
    // this._inputList = Array.from(
    //   this._formElement.querySelector(this._settings.inputSelector)
    // );

    // //--submit bttn
    // this._submitBtn = this._formElement.querySelector(
    //   this._settings.submitButtonSelector
    // );
  }

  _showInputError() {}
  _hideInputError() {}

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(inputElement);
    } else hideInputError(inputElement);
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      console.log(this._submitButtonSelector);
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = true;
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._toggleButtonState(this._inputList); /////-----??? this._inputList
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
