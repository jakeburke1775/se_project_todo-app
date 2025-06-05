const initialTodos = [
  {
    id: "aa486839-63ab-437f-b8a2-29ab217dff4f",
    name: "pet / eco friendly availible?   Mention probiotic cleaning",
    completed: false,
    date: new Date(),
  },
  {
    id: "aa486839-63ab-437f-b8a2-29ab217dff4f",
    name: "Discuss where and the times they clean",
    completed: false,
    date: new Date(),
  },
  {
    id: "a7bfd5ef-37cc-4fa6-89f2-cac098a8aeba",
    name: "INTRO ITEM: Discuss pay per hour (3 hour example once a week)",
    completed: false,
    date: new Date(),
  },
  {
    id: "7cec7373-681b-49d9-b065-021d61a69d03",
    name: "INTRO ITEM: Discuss Cleaner availibility",
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
