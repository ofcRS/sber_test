import { InputHTMLAttributes } from 'react';

export type Props = {
    label: string;
    checked: boolean;
    onChange: () => void;
};
