import { useNavigate } from 'react-router';
import { Button, Typography } from 'antd';
import styles from './WelcomePage.module.css';

const { Title } = Typography;

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/form');
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Title level={1} className={styles.title}>
                    {"Welcome to Message Hub."}
                </Title>
            </div>

            <div className={styles.footer}>
                <Button
                    type="primary"
                    size="large"
                    onClick={handleNextClick}
                >
                    {"Next"}
                </Button>
            </div>
        </div>
    );
};

export default WelcomePage;