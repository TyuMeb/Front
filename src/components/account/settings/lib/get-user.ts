import { UserAccount } from "@src/redux/api/generated";
import { SettingsForm } from "../settings";
import { phoneConversion } from "@src/shared/lib/phoneMask";

export const getUser = (user: UserAccount) => {
  const { name, surname, person_telephone, email, notifications } = user;

  const phoneValue = phoneConversion(person_telephone || "");

  return {
    name: name || "",
    surname: surname || "",
    person_telephone: phoneValue || "",
    email: email || "",
    current_password: "",
    new_password: "",
    re_new_password: "",
    notifications: Boolean(notifications) ? "email" : "off",
  } as SettingsForm;
};
