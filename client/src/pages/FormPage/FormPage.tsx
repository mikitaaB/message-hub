import { useNavigate } from 'react-router';
import { sendMessageAPI } from '../../api';
import ContactForm, { type ContactFormData } from '../../components/ContactForm';
import styles from './FormPage.module.css';

const FormPage = () => {
	const navigate = useNavigate();

	const handleFormSubmit = async (data: ContactFormData) => {
		await sendMessageAPI(data);
	};

	const handleCancel = () => {
		navigate('/');
	};

	return (
		<div className={styles.container}>
			<ContactForm
				title={'Send Message'}
				onSubmit={handleFormSubmit}
				onCancel={handleCancel}
			/>
		</div>
	);
};

export default FormPage;