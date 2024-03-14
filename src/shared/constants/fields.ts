export const PATTERN_EMAIL = {
  message: "Указан некорректный адрес электронной почты",
  value: RegExp("^[a-zA-Z0-9\\-._]+@[a-zA-Z0-9\\-._]+\\.[a-zA-Z0-9\\-._]+$"),
};
export const PATTERN_FULLNAME = {
  message: "Может включать только русские и английские буквы, пробел, тире",
  value: RegExp("^[a-zA-Zа-яА-ЯеЁ\\-_ ]*$"),
};
export const PATTERN_PASSWORD = {
  message: "Указан недопустимый символ",
  value: RegExp("^[а-яёА-ЯЁa-zA-Z0-9~!?@#$%^&*_\\-+()\\[\\]{}></\\|\"\\'.,:]*$"),
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
  type: "text",
};

export const SETTINGS_PASSWORD = {
  label: "Пароль",
  placeholder: "Введите пароль",
  type: "password",
};

export const SETTINGS_PREVIOUS_PASSWORD = {
  label: "Старый пароль",
  placeholder: "Введите пароль",
  type: "password",
};

export const SETTINGS_NEW_PASSWORD = {
  label: "Новый пароль",
  placeholder: "Введите пароль",
  type: "password",
};

export const SETTINGS_NEW_PASSWORD_REPEAT = {
  label: "Повторите новый пароль",
  placeholder: "Введите пароль",
  type: "password",
};

export const VALIDATIONS_FULLNAME = {
  minLength: {
    message: "Длина имени не менее 2 символов",
    value: 2,
  },
  maxLength: {
    message: "Длина имени не более 20 символов",
    value: 40,
  },
  required: "Поле должно быть заполнено",
  validate: {
    beginsWithLetter: (value = "") => {
      if (value.length && !/^[a-zA-ZА-ЯЁф-яё]+/.test(value)) {
        return "Первый символ должен быть буквой";
      }
    },
  },
};

export const VALIDATIONS_EMAIL = {
  minLength: {
    message: "Длина адреса электронной почты не менее 8 символов",
    value: 6,
  },
  maxLength: {
    message: "Длина адреса электронной почты не более 40 символов",
    value: 50,
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
  required: "Поле должно быть заполнено",
  validate: {
    onlyLatinLetter: (value = "") => {
      if (value.length && /[а-яёА-ЯЁ]/.test(value)) {
        return "Только английские буквы алфавита";
      }
    },
    hasOneDigit: (value = "") => {
      if (value.length && !/\d+/.test(value)) {
        return "Пароль должен содержать минимум 1 цифру";
      }
    },
  },
};

export const VALIDATIONS_PHONE = {
  minLength: {
    message: "Минимальная длина номера 12 цифр",
    value: 16,
  },
};

export const VALIDATIONS_TEXTAREA = {
  required: "Сообщение не может быть пустым",
  maxLength: {
    message: "Текст привышает максимальную допустимую длинну в 300 символов",
    value: 300,
  },
};
