import { UserAccount } from "@src/redux/api/generated";
import { SettingsForm } from "../form";
import { phoneConversion } from "@src/shared/lib/phoneMask";

export const getUser = (user: UserAccount) => {
  const { name, surname, person_telephone, email, notifications } = user;

  const phoneValue = phoneConversion(person_telephone || "");

  return {
    name: name || "",
    surname: surname || "",
    person_telephone: phoneValue || "",
    email: email || "",
    currentPass: "",
    newPass: "",
    newPassRepeat: "",
    notifications: Boolean(notifications) ? "email" : "off",
  } as SettingsForm;
};
