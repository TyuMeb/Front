import { Textarea } from "@src/components/account/form/textarea";
import { Icon } from "@src/components/icon";
import { QuestionType, useUploadFileMutation } from "@src/redux/api/order-api-slice";
import { cn } from "@src/shared/lib/cn";
import { Select } from "@src/shared/ui/select";
import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
    question: QuestionType;
    order: string | number;
    orderId: number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const FieldControl = ({ order, question, ...props }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        register,
        watch,
        setValue,
        setError,
        formState: { errors },
    } = useFormContext();

    const [uploadFile] = useUploadFileMutation();

    const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            uploadFile({
                upload_file: file,
                question_id: question.id!,
                id: props.orderId,
            })
                .unwrap()
                .then((data) => {
                    console.log("🚀 ~ handleUploadFile ~ data:", data);
                });
        }
    };

    const value = watch(String(question.id));

    let content = null;

    const label = `${order}.${question.answer_required ? "* " : ""} ${question.text}`;

    if (question.answer_type === "text_field") {
        content = (
            <div className="relative">
                <Textarea
                    {...register(String(question.id), {
                        required: {
                            value: Boolean(question.answer_required),
                            message: "Поле не может быть пустым",
                        },
                    })}
                    className={cn(errors[question.id!] && "border-pink border placeholder:!text-pink")}
                    autoHeight
                    rows={5}
                    placeholder={errors[question.id!] ? "Поле не может быть пустым" : question.text}
                />

                {question.file_required && (
                    <>
                        <input
                            accept=".gif, .png, .jpg, .jpeg, application/pdf"
                            onChange={handleUploadFile}
                            ref={inputRef}
                            type="file"
                            className="sr-only"
                        />
                        <button
                            type="button"
                            onClick={() => inputRef.current?.click()}
                            className="flex items-center gap-2 px-4 py-2 border rounded-lg max-sm:mt-2 sm:absolute right-4 bottom-4 border-asphalt hover:bg-asphalt/30">
                            Загрузите файл
                            <Icon className="text-inherit" glyph="paperclip" />
                        </button>
                    </>
                )}
            </div>
        );
    }

    if (question.answer_type === "choice_field") {
        const selected = (question.options || []).find((option) => String(option.text) === value);

        content = (
            <>
                <Select
                    error={errors[question.id!]?.message?.toString()}
                    {...register(String(question.id), {
                        required: {
                            value: Boolean(question.answer_required),
                            message: "Необходимо выбрать значение",
                        },
                    })}
                    className="mb-4 w-full max-w-[400px]"
                    onValueChange={(value) => {
                        const found = question.options?.find((option) => option.text === value);
                        setError(String(question.id), { message: "" });
                        setValue(String(question.id), found?.text || "");
                    }}
                    value={selected?.text}
                    placeholder={question.text}
                    items={
                        question.options?.map((option) => ({
                            id: option.text!,
                            name: option.text,
                        })) || []
                    }></Select>

                {selected?.questions?.length !== 0 && (
                    <>
                        {/* @ts-ignore */}
                        {(selected?.questions || []).map((subQuestion, subOrder) => (
                            <FieldControl
                                {...props}
                                style={{
                                    paddingLeft: Number(props.style?.paddingLeft || 0) + 16,
                                }}
                                key={subQuestion.id}
                                question={subQuestion}
                                order={`${order}.${subOrder + 1}`}
                            />
                        ))}
                    </>
                )}
            </>
        );
    }

    return (
        <div
            {...props}
            style={{
                ...props.style,
                paddingLeft: props.style?.paddingLeft,
            }}>
            <p className={cn("mb-2 font-semibold")}>{label}</p>
            {content}
        </div>
    );
};
