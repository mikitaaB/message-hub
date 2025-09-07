import { createBrowserRouter, RouterProvider } from 'react-router';
import '@ant-design/v5-patch-for-react-19';
import AppLayout from './components/Layout';
import FormPage from './pages/FormPage';
import WelcomePage from './pages/WelcomePage';
import './App.css';

const routes = [
	{
		path: "/",
		element: <WelcomePage />,
	},
	{
		path: "/form",
		element: <FormPage />,
	},
]

const router = createBrowserRouter(routes);

function App() {
	return (
		<AppLayout>
			<RouterProvider router={router} />
		</AppLayout>
	);
}

export default App
