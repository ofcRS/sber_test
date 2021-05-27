import React, { FormEvent, ReactNode, useCallback, useState } from "react";

import { Input } from 'components/input';
import { Checkbox } from 'components/checkbox';
import { Button } from 'components/button';

import { FormValue, Props } from './AuthForm.types';
import styles from './styles.css';

export const AuthForm: React.FC<Props> = () => {
    const [agree, setAgree] = useState(false);
    const [triedToAuth, setTriedToAuth] = useState(false);
    const [formValue, setFormValue] = useState<FormValue>({
        username: '',
        password: '',
    });

    const onChangeFormValue = useCallback(
        (field: keyof FormValue) => (value: string) => {
            setFormValue((prev) => ({
                ...prev,
                [field]: value,
            }));
        },
        []
    );

    const onSubmitForm = (event: FormEvent) => {
        event.preventDefault();
        setTriedToAuth(true);
        if (formValue.username && formValue.password) {
            alert('Успешно!')
        }
    };

    const getErrorMessage = (field: keyof FormValue): string | undefined => {
        if (!triedToAuth) return undefined;
        return formValue[field] ? undefined : 'Поле обязательно для заполнения';
    }

    return (
        <div className={styles.authWrapper}>
            <form className={styles.form} onSubmit={onSubmitForm}>
                <Input
                    label="Логин"
                    value={formValue.username}
                    onChange={onChangeFormValue('username')}
                    error={getErrorMessage('username')}
                />
                <Input
                    label="Пароль"
                    value={formValue.password}
                    onChange={onChangeFormValue('password')}
                    type="password"
                    error={getErrorMessage('password')}
                />
                <Checkbox
                    checked={agree}
                    onChange={() => setAgree((prev) => !prev)}
                    label="Согласен с офертой"
                />
                <Button disabled={!agree} type="submit">
                    Отправить
                </Button>
            </form>
        </div>
    );
};
