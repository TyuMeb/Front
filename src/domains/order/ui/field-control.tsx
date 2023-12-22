import { Textarea } from "@src/components/account/form/textarea";
import { QuestionType } from "@src/redux/api/order-api-slice";
import { Select } from "@src/shared/ui/select";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
    question: QuestionType;
    order: string | number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const FieldControl = ({ order: order, question, ...props }: Props) => {
    const { register, watch, setValue } = useFormContext();

    const value = watch(String(question.id));

    let content = null;

    const label = `${order}.${question.answer_required ? "* " : ""} ${question.text}`;

    if (question.answer_type === "text_field") {
        content = (
            <>
                <p className="mb-3 font-semibold">{label}</p>
                <Textarea {...register(String(question.id))} autoHeight rows={5} placeholder={question.text} />
            </>
        );
    }

    if (question.answer_type === "choice_field") {
        const selected = (question.options || []).find((option) => String(option.text) === value);

        content = (
            <>
                <Select
                    {...register(String(question.id))}
                    className="mb-4"
                    label={label}
                    onValueChange={(value) => {
                        const found = question.options?.find((option) => option.text === value);

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
            {content}
        </div>
    );
};
