export const fillFormData = <T extends Record<string | number, number | string | Blob | File>>(data: T) => {
  const body = new FormData();

  for (const [key, value] of Object.entries(data)) {
    body.append(key, typeof value === "number" ? String(value) : value);
  }

  return body;
};
