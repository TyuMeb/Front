import { Icon } from "@src/components/icon";
import { QuestionType, useDeleteFileOldMutation, useUploadFileOldMutation } from "@src/redux/api/order-api-slice";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { createOrderSlice } from "@src/redux/slices/create-order-slice";
import { cn } from "@src/shared/lib/cn";
import { Textarea } from "@src/shared/ui/inputs/textarea";
import { Select } from "@src/shared/ui/select";
import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  question: QuestionType;
  positionOrder: string | number;
  orderId: number;
  readOnly?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const FieldControl = ({ positionOrder, question, readOnly, ...props }: Props) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const order = useAppSelector((store) => store.createOrder.order);

  const orderQuestion = order!.answers.find((answer) => answer.question_id === question.id)!;

  const {
    register,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext();

  const [uploadFile] = useUploadFileOldMutation();
  const [deleteFile] = useDeleteFileOldMutation();

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
          dispatch(createOrderSlice.actions.addAnswerFile({ answer_id: question.id!, file: data }));
        });
    }
  };
  const handleDeleteFile = (file_id: number) => {
    deleteFile({ file_id });
    dispatch(createOrderSlice.actions.deleteAnswerFile({ answer_id: question.id!, file_id }));
  };

  const value = watch(String(question.id));

  let content = null;

  const label = `${positionOrder}.${question.answer_required ? "* " : ""} ${question.text}`;

  if (question.answer_type === "text_field") {
    content = (
      <>
        <div className="relative">
          <Textarea
            {...register(String(question.id), {
              required: {
                value: Boolean(question.answer_required),
                message: "Поле не может быть пустым",
              },
            })}
            value={value}
            className={cn(errors[question.id!] && "border-pink border placeholder:!text-pink")}
            autoHeight
            rows={5}
            placeholder={errors[question.id!] ? "Поле не может быть пустым" : question.text}
            readOnly={readOnly}
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
                className="flex items-center gap-2 px-4 py-2 border rounded-lg max-sm:mt-2 sm:absolute right-4 bottom-4 border-asphalt hover:bg-asphalt/30"
              >
                Загрузите файл
                <Icon className="text-inherit" glyph="paperclip" />
              </button>
            </>
          )}
        </div>
        {(orderQuestion?.files || []).length !== 0 && (
          <div className="flex gap-4 mt-4">
            {orderQuestion.files?.map((file) => (
              <div className="relative" key={file.id}>
                <a
                  href={file.preview_url}
                  target="_blank"
                  className="relative max-w-[160px] border rounded-lg p-4 flex justify-center flex-col border-asphalt"
                >
                  <Icon glyph="paperclip" className="mb-1" />
                  <span className="line-clamp-2">{file.original_name}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleDeleteFile(file.id!)}
                  className="absolute bg-white -top-2 -right-2"
                >
                  <Icon glyph="x" />
                </button>
              </div>
            ))}
          </div>
        )}
      </>
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
          readOnly={readOnly}
          items={
            question.options?.map((option) => ({
              id: option.text!,
              name: option.text,
            })) || []
          }
        ></Select>

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
                positionOrder={`${positionOrder}.${subOrder + 1}`}
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
      }}
    >
      <p className={cn("mb-2 font-semibold")}>{label}</p>
      {content}
    </div>
  );
};
