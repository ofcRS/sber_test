import React from 'react';

import { Props } from './checkbox.types';
import styles from './styles.css';

export const Checkbox: React.FC<Props> = ({ label, onChange, checked }) => {
    return (
        <label className={styles.label}>
            <input checked={checked} onChange={onChange} type="checkbox" />
            <span>{label}</span>
        </label>
    );
};
