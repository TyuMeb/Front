import { Question } from "@src/redux/api/generated";
import { Input } from "@src/shared/ui/inputs";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
    question: Question;
    order: string | number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const FieldControl = ({ order: order, question, ...props }: Props) => {
    console.log("🚀 ~ file: field-control.tsx:11 ~ FieldControl ~ props:", props);
    const { register, watch } = useFormContext();

    const value = watch(String(question.id));

    let content = null;

    const label = `${order}.${question.text}`;

    if (question.answer_type === "text_field") {
        content = <Input {...register(String(question.id))} label={label} />;
    }

    if (question.answer_type === "choice_field") {
        const selected = (question.options || []).find((option) => String(option.id) === value);
        content = (
            <>
                <p>{label}</p>
                <select placeholder={question.text} {...register(String(question.id))}>
                    {(question.options || []).map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.text}
                        </option>
                    ))}
                </select>

                {selected?.questions?.length !== 0 && (
                    <>
                        {/* @ts-ignore */}
                        {(selected?.questions || []).map((subQuestion, subOrder) => (
                            <FieldControl
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
            {content}
        </div>
    );
};
