import { InputHTMLAttributes } from "react";

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
    value: string;
    onChange: (value: string) => void;
    label: string;
    error?: string;
};
