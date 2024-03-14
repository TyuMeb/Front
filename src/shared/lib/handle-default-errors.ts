import { FieldValues, UseFormSetError } from "react-hook-form";

export const handleDefaultErrors = <T extends FieldValues>(
  data: { [x: string]: string[] },
  setError: UseFormSetError<T>
) => {
  const keys = Object.keys(data || {}) as Array<keyof {}>;

  keys.forEach((key) => {
    setError(key, { message: data[key]?.join(" ") });
  });
};
