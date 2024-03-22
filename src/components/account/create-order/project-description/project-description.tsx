import { FC } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@src/shared/ui/button";
import { Textarea } from "@src/shared/ui/inputs/textarea";
import { Input } from "@src/shared/ui/inputs";
import { cn } from "@src/shared/lib/cn";
import { useAddProjectDescriptionMutation } from "@src/redux/api/order-api-slice";
import { getCookieOrder } from "../lib/order-storage";

type ProjectDescriptionProps = {
  onNextStep: () => void;
  onBack: () => void;
};

export const ProjectDescription: FC<ProjectDescriptionProps> = ({ onBack, onNextStep }) => {
  const { register, handleSubmit , formState: { isValid } } = useForm({
    values: {
      name: "",
      description: "",
    },
    mode: "onChange",
  });

  const orderId = getCookieOrder();

  const [addProjectDescription, { isLoading }] = useAddProjectDescriptionMutation()

  const onSubmit = (fields: { name: string, description: string }) => {
    if (!orderId) {
      return;
    }

    addProjectDescription({
      orderId,
      ...fields
    }).then(() => {
      onNextStep()
    })

  }

  return (
    <>
      <div className="flex items-center gap-2 pb-4 mb-10 border-b-2 border-yellow">
        <h1 className="mr-auto text-xl font-semibold">Описание проекта</h1>
        <button onClick={onBack} className="!border-none">
          Назад
        </button>
      </div>
      <form>
        <div className="w-1/3 mb-9">
          <Input
            label="1. Введите название проекта"
            placeholder="Введите название"
            {...register("name", {
              required: {
                value: true,
                message: "Поле не может быть пустым",
              },
            })}
          />
        </div>

        <p className={cn("subtitle2 mb-2")}>2. Пожалуйста, расскажите о проекте и загрузите документы</p>

        <div className="relative">
          <Textarea
            {...register("description", {
              required: {
                value: true,
                message: "Поле не может быть пустым",
              },
            })}
            autoHeight
            rows={5}
            placeholder="Написать сообщение"
          />
        </div>
      </form>
      <Button disabled={!isValid || isLoading} isLoading={isLoading} className="self-start mt-12" onClick={handleSubmit(onSubmit)} type="button">
        Далее
      </Button>
    </>
  );
};
