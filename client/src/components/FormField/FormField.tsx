import { Controller, type Control, type FieldError, type FieldPath, type FieldValues } from 'react-hook-form';
import { Input } from 'antd';
import styles from './FormField.module.css';

const { TextArea } = Input;

interface BaseFormFieldProps<T extends FieldValues> {
    name: FieldPath<T>;
    control: Control<T>;
    rules?: Record<string, unknown>;
    placeholder?: string;
    disabled?: boolean;
    error?: FieldError;
    ariaLabel?: string;
}

interface InputFormFieldProps<T extends FieldValues> extends BaseFormFieldProps<T> {
    type: 'input';
}

interface TextAreaFormFieldProps<T extends FieldValues> extends BaseFormFieldProps<T> {
    type: 'textarea';
    rows?: number;
}

type FormFieldProps<T extends FieldValues> = InputFormFieldProps<T> | TextAreaFormFieldProps<T>;

const FormField = <T extends FieldValues>({
    name,
    control,
    rules,
    placeholder,
    disabled,
    error,
    ariaLabel,
    type,
    ...props
}: FormFieldProps<T>) => {
    const errorId = error ? `${String(name)}-error` : undefined;

    return (
        <div className={styles.field}>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => {
                    const commonProps = {
                        ...field,
                        placeholder,
                        status: error ? ('error' as const) : undefined,
                        disabled,
                        'aria-label': ariaLabel,
                        'aria-describedby': errorId,
                    };

                    if (type === 'textarea') {
                        const { rows = 6 } = props as TextAreaFormFieldProps<T>;
                        return <TextArea {...commonProps} rows={rows} />;
                    }

                    return <Input {...commonProps} />;
                }}
            />
            {error && (
                <span id={errorId} className={styles.error}>
                    {error.message}
                </span>
            )}
        </div>
    );
};

export default FormField;