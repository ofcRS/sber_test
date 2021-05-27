import React from 'react';

import { Props } from './input.types';

import styles from './styles.css';

export const Input: React.FC<Props> = ({
    onChange,
    value,
    label,
    error,
    ...props
}) => {
    return (
        <label className={styles.label}>
            <span>{label}</span>
            <input
                id="test"
                className={styles.input}
                {...props}
                value={value}
                onChange={({ target }) => onChange(target.value)}
            />
            <span className={styles.errorMessage}>{error}</span>
        </label>
    );
};
