export const regexEmailList = [
    /^[a-z0-9_\.-]*$/,
    /^[a-z0-9_\.-]+@$/,
    /^[a-z0-9_\.-]+@[a-z0-9-]+$/,
    /^[a-z0-9_\.-]+@[a-z0-9-]+\.$/,
    /^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/,
    /^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/,
    /^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/,
];

/**
 * Проверяет, удовлетворяет ли какой-либо элемент массива regex-строк условию.
 * @param regexEmailList массив регулярных выражений.
 * @param value значение текстового поля, которое нужно проверить.
 * @example
 * emailMask([/^[a-z0-9_\.-]+$/], 'email')
 * @returns {boolean} Вернет true, так как строка 'email',
 * удовлетворяет хотябы одному регулярному выражению, переданному в массиве.
 */
export const emailMask = (regexEmailList: RegExp[], value: string): boolean =>
    regexEmailList.some((regexEmail) => regexEmail.test(value));
