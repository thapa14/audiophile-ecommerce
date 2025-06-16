import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastContainerProvider() {
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={1000}
            newestOnTop
            closeOnClick
            rtl={false}
            draggable
            hideProgressBar
            theme="light"
            limit={1}
        />
    );
}
