import { Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { useState, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';
import FormField from '../FormField';
import FormActions from '../FormActions';
import styles from './ContactForm.module.css';

const { Title } = Typography;

export interface ContactFormData {
    name: string;
    phone: string;
    message: string;
}

interface ContactFormProps {
    onSubmit: (data: ContactFormData) => Promise<void> | void;
    onCancel?: () => void;
    title?: string;
    className?: string;
}

const ContactForm = ({
    onSubmit,
    onCancel,
    title = 'Send Message',
    className
}: ContactFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const defaultValues = useMemo(() => ({
        name: '',
        phone: '',
        message: ''
    }), []);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        defaultValues
    });

    const validatePhone = useCallback((phone: string) => {
        const belarusPattern = /^(\+375(25|29|33|44)\d{7}|80(25|29|33|44)\d{7})$/;
        return belarusPattern.test(phone.replace(/\s/g, '')) || 'Invalid Belarus phone format. Use +375XXXXXXXXX or 80XXXXXXXXX';
    }, []);

    const handleFormSubmit = useCallback(async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            await onSubmit(data);
            toast.success('Message sent successfully!');
            reset();
        } catch (error) {
            console.error('Form submission error:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }, [onSubmit, reset]);

    return (
        <div className={`${styles.container} ${className || ''}`}>
            {title && <Title level={2} className={styles.title}>{title}</Title>}

            <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
                <FormField<ContactFormData>
                    name="name"
                    type="input"
                    control={control}
                    rules={{
                        required: 'Please enter your name',
                        minLength: {
                            value: 2,
                            message: 'Name must contain at least 2 characters'
                        }
                    }}
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                    error={errors.name}
                    ariaLabel="Name"
                />

                <FormField<ContactFormData>
                    name="phone"
                    type="input"
                    control={control}
                    rules={{
                        required: 'Please enter your phone number',
                        validate: validatePhone
                    }}
                    placeholder="+375291234567 or 80291234567"
                    disabled={isSubmitting}
                    error={errors.phone}
                    ariaLabel="Phone"
                />

                <FormField<ContactFormData>
                    name="message"
                    type="textarea"
                    control={control}
                    rules={{
                        required: 'Please enter your message',
                        minLength: {
                            value: 2,
                            message: 'Message must contain at least 2 characters'
                        }
                    }}
                    placeholder="Enter your message"
                    rows={6}
                    disabled={isSubmitting}
                    error={errors.message}
                    ariaLabel="Message"
                />

                <FormActions
                    isSubmitting={isSubmitting}
                    onCancel={onCancel}
                />
            </form>
        </div>
    );
};

export default ContactForm;