import { Button } from "@src/shared/ui/button";
import styles from "./form.module.scss";
import { Input, PhoneInput } from "@src/shared/ui/inputs";
import { useForm } from "react-hook-form";
import { useCooperateMutation } from "@src/redux/api/contact-api-slice";
import { CooperationOffer } from "@src/redux/api/generated";

export const Form = () => {
  const { register, handleSubmit } = useForm({
    values: {
      name: "",
      telephone: "",
    },
  });

  const [cooperate, { isLoading, isSuccess }] = useCooperateMutation();

  const onSubmit = ({ name, telephone }: CooperationOffer) => {
    cooperate({ name, telephone: telephone?.replaceAll(" ", "") });
  };

  return (
    <section className={styles.inner} id="form">
      <p className={styles.description}>
        Хотите стать одним из исполнителей на ВайВи? — оставьте заявку и мы с вами свяжемся. Мы готовы предоставить
        постоянный поток клиентов и взаимовыгодное сотрудничество
      </p>
      {isSuccess ? (
        <p className={styles.textSuccess}>Заявка успешно отправлена!</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputs}>
            <Input placeholder="Имя" required {...register("name")} />
            <PhoneInput placeholder="Номер телефона" type="tel" required {...register("telephone")} />
          </div>
          <Button type="submit" isLoading={isLoading}>
            Связаться
          </Button>
        </form>
      )}
    </section>
  );
};
