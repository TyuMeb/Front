export const PATTERN_EMAIL = {
  message: "Указан некорректный адрес электронной почты",
  value: RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  ),
};
export const PATTERN_FULLNAME = {
  message: "Может включать только заглавные и строчные буквы и символ -",
  value: RegExp("^[a-zA-Zа-яА-ЯеЁ\\-_]{2,}$"),
};
export const PATTERN_PASSWORD = {
  message: "Указан некорректный пароль. Используйте английские буквы и цифры, символы ~!?@#$%^&*_-+()[]{}></|\"'.",
  value: RegExp("^[a-zA-Z0-9~!?@#\\$\\%^\\&\\*\\-\\+\\(\\)\\[\\]\\{\\}><\\/\\|\"\\']*$"),
};

export const SETTINGS_NAME = {
  label: "Имя",
  placeholder: "Введите свое имя",
};

export const SETTINGS_SURNAME = {
  label: "Фамилия",
  placeholder: "Введите свою фамилию",
};

export const SETTINGS_PHONE = {
  label: "Телефон",
  placeholder: "Введите номер телефона",
  type: "tel",
};

export const SETTINGS_EMAIL = {
  label: "E-mail",
  placeholder: "Введите свою почту",
  type: "email",
};

export const SETTINGS_PREVIOUS_PASSWORD = {
  label: "Старый пароль",
  placeholder: "Введите свой пароль",
  type: "password",
};

export const SETTINGS_NEW_PASSWORD = {
  label: "Новый пароль",
  placeholder: "Введите новый пароль",
  type: "password",
};

export const SETTINGS_NEW_PASSWORD_REPEAT = {
  label: "Повторите пароль",
  placeholder: "Повторите новый пароль",
  type: "password",
};

export const VALIDATIONS_FULLNAME = {
  minLength: {
    message: "Длина имени не менее 2 символов",
    value: 2,
  },
  maxLength: {
    message: "Длина имени не более 40 символов",
    value: 40,
  },
  required: "Поле должно быть заполнено",
};

export const VALIDATIONS_EMAIL = {
  minLength: {
    message: "Длина адреса электронной почты не менее 8 символов",
    value: 8,
  },
  maxLength: {
    message: "Длина адреса электронной почты не более 40 символов",
    value: 40,
  },
  required: "Поле должно быть заполнено",
};

export const VALIDATIONS_PASSWORD = {
  minLength: {
    message: "Длина пароля не менее 8 символов",
    value: 8,
  },
  maxLength: {
    message: "Длина пароля не более 64 символов",
    value: 64,
  },
  required: "Данное поле обязательно",
};
