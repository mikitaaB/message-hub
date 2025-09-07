import { Layout, Typography } from 'antd';
import { type ReactNode } from 'react';
import styles from './AppLayout.module.css';

const { Header, Content } = Layout;
const { Title } = Typography;

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <Title level={3} className={styles.title}>
                    {"Message Hub"}
                </Title>
            </Header>

            <Content className={styles.content}>
                {children}
            </Content>
        </Layout>
    );
};

export default AppLayout;