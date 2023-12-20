import { Button } from "@src/shared/ui/button";
import styles from "./modal-get-contact.module.scss";
import { Input } from "@src/shared/ui/inputs";
import { useForm } from "react-hook-form";
import { useGetContactMutation } from "@src/redux/api/contact-api-slice";
import { ContactData } from "@src/redux/api/generated";

export const ModalGetContact = () => {
    const { register, handleSubmit } = useForm({
        values: {
            name: "",
            email: "",
        },
    });

    const [getContact, { isLoading, isSuccess }] = useGetContactMutation();

    const onSubmit = ({ name, email }: ContactData) => {
        getContact({ name, email: email?.replaceAll(" ", "") });
    };

    return (
        <section className={styles.inner} id="form">
            <p className={styles.description}>
                Благодарим вас за выбор нашего сервиса и доверие к нам. Мы активно трудимся над запуском Вайви и скоро
                начнем принимать заказы. Оставьте свой адрес электронной почты и станьте нашим первым клиентом
            </p>
            {isSuccess ? (
                <p className={styles.textSuccess}>Заявка успешно отправлена!</p>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.inputs}>
                        <Input placeholder="Имя" required {...register("name")} />
                        <Input placeholder="E-mail" type="email" required {...register("email")} />
                    </div>
                    <Button type="submit" isLoading={isLoading}>
                        Связаться
                    </Button>
                </form>
            )}
        </section>
    );
};
