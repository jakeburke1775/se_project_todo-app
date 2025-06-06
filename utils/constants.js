const initialTodos = [
  {
    id: "aa486839-63ab-437f-b8a2-29ab217dff4f",
    name: "Take out trash",
    completed: false,
    date: new Date(),
  },
  {
    id: "aa486839-63ab-437f-b8a2-29ab217dff4f",
    name: "Do the dishes",
    completed: false,
    date: new Date(),
  },
  {
    id: "a7bfd5ef-37cc-4fa6-89f2-cac098a8aeba",
    name: "Give dog a bath",
    completed: false,
    date: new Date(),
  },
  {
    id: "7cec7373-681b-49d9-b065-021d61a69d03",
    name: "make kids lunch for tomorrow",
    completed: false,
    date: new Date(),
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__error_visible",
  inputErrorClass: "popup__input_type_error",
  inactiveButtonClass: "button_disabled",
};

export { initialTodos, validationConfig };

// this._toggleCompletion();
// this._handleCheck(this._completed);
//this code goes
