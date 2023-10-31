import { Button } from "@src/shared/ui/button";
import styles from "./form.module.scss";
import { Input, PhoneInput } from "@src/shared/ui/inputs";
import { useForm } from "react-hook-form";
import { useCooperateMutation } from "@src/redux/api/contact-api-slice";

type Form = {
    name: string;
    phone: string;
};

export const Form = () => {
    const { register, handleSubmit } = useForm({
        values: {
            name: "",
            phone: "",
        },
    });

    const [cooperate, { isLoading, isSuccess, error }] = useCooperateMutation();
    console.log("🚀 ~ file: form.tsx:21 ~ Form ~ error:", error);

    const onSubmit = (data: Form) => {
        cooperate(data);
    };

    return (
        <section className={styles.inner} id="form">
            <p className={styles.description}>
                Хотите стать одним из исполнителей на ВайВи? — оставьте заявку и мы с вами свяжемся. Мы готовы
                предоставить постоянный поток клиентов и взаимовыгодное сотрудничество
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputs}>
                    <Input placeholder="Имя" required {...register("name")} />
                    <PhoneInput
                        placeholder="Номер телефона"
                        type="tel"
                        maxLength={11}
                        required
                        {...register("phone")}
                    />
                </div>
                <Button type="submit" isLoading={isLoading}>
                    Связаться
                </Button>
            </form>
        </section>
    );
};
