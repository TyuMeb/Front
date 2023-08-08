export interface IFields {
    value: string;
    errorText?: string;
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    onChange: (value: string) => void;
    className?: string;
}
