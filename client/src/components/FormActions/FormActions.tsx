import { Button } from 'antd';
import styles from './FormActions.module.css';

interface FormActionsProps {
    isSubmitting?: boolean;
    onCancel?: () => void;
}

const FormActions = ({
    isSubmitting = false,
    onCancel
}: FormActionsProps) => {
    return (
        <div className={styles.submitSection}>
            <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={isSubmitting}
                disabled={isSubmitting}
                className={styles.submitButton}
            >
                {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
            {onCancel && (
                <Button
                    onClick={onCancel}
                    size="large"
                    disabled={isSubmitting}
                >
                    {"Cancel"}
                </Button>
            )}
        </div>
    );
};

export default FormActions;