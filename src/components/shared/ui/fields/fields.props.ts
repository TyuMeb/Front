export interface IFields {
    value: string;
    errorText?: string;
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}
