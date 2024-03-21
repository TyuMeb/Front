import { Button } from "@src/shared/ui/button";
import styles from "./form.module.scss";
import { Input, PhoneInput } from "@src/shared/ui/inputs";
import { useForm } from "react-hook-form";
import { useCooperateMutation } from "@src/redux/api/contact-api-slice";
import { CooperationOffer } from "@src/redux/api/generated";
import { cn } from "@src/shared/lib/cn";
import {
  PATTERN_FULLNAME,
  SETTINGS_PHONE,
  VALIDATIONS_FULLNAME,
  VALIDATIONS_PHONE,
} from "@src/shared/constants/fields";

export const Form = () => {
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

  const [cooperate, { isLoading, isSuccess }] = useCooperateMutation();

  const onSubmit = ({ name, telephone }: CooperationOffer) => {
    cooperate({ name, telephone: telephone?.replaceAll(" ", "") });
  };

  return (
    <section className={styles.container}>
      <h2 className={cn(styles.description, "text-medium")}>
        Хотите стать одним из исполнителей на ВайВи? — оставьте заявку и мы с вами свяжемся. Мы готовы предоставить
        постоянный поток клиентов и взаимовыгодное сотрудничество
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
            Связаться
          </Button>
        </form>
      )}
    </section>
  );
};
