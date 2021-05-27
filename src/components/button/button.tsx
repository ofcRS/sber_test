import React from 'react';

import { Props } from './button.types';
import styles from './styles.css';

export const Button: React.FC<Props> = ({ children, ...props }) => {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    );
};
