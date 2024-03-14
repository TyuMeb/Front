import { Button } from "@src/shared/ui/button";
import styles from "./modal-get-contact.module.scss";
import { Input, PhoneInput } from "@src/shared/ui/inputs";
import { useForm } from "react-hook-form";
import { useGetContactMutation } from "@src/redux/api/contact-api-slice";
import { CooperationOffer } from "@src/redux/api/generated";
import { cn } from "@src/shared/lib/cn";
import {
  PATTERN_FULLNAME,
  SETTINGS_PHONE,
  VALIDATIONS_FULLNAME,
  VALIDATIONS_PHONE,
} from "@src/shared/constants/fields";

export const ModalGetContact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    values: {
      name: "",
      telephone: "",
    },
    mode: "onChange",
  });

  const [getContact, { isLoading, isSuccess }] = useGetContactMutation();

  const onSubmit = ({ name, telephone }: CooperationOffer) => {
    getContact({ name, telephone: telephone?.replaceAll(" ", "") });
  };

  return (
    <section className={styles.container}>
      <h2 className={cn(styles.description, "text-medium")}>
        Благодарим вас за выбор нашего сервиса и доверие к нам. Мы активно трудимся над запуском Вайви и скоро начнем
        принимать заказы. Оставьте свой адрес электронной почты и станьте нашим первым клиентом
      </h2>
      {isSuccess ? (
        <p className={cn(styles.textSuccess, "text-medium")}>Заявка успешно отправлена!</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputs}>
            <Input
              placeholder="Имя"
              id="name"
              error={Boolean(errors.name?.message)}
              errorMessage={errors.name?.message}
              {...register("name", {
                validate: { ...VALIDATIONS_FULLNAME.validate },
                required: VALIDATIONS_FULLNAME.required,
                minLength: { ...VALIDATIONS_FULLNAME.minLength },
                maxLength: { ...VALIDATIONS_FULLNAME.maxLength },
                pattern: { ...PATTERN_FULLNAME },
              })}
            />
            <PhoneInput
              type={SETTINGS_PHONE.type}
              placeholder="Номер телефона"
              id="telephone"
              error={Boolean(errors.telephone?.message)}
              errorMessage={errors.telephone?.message}
              value={watch("telephone")}
              {...register("telephone", {
                required: "Поле должно быть заполнено",
                ...VALIDATIONS_PHONE,
              })}
            />
          </div>

          <Button className={styles.button} type="submit" isLoading={isLoading}>
            Подписаться
          </Button>
        </form>
      )}
    </section>
  );
};
