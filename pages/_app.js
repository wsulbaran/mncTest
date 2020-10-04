import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
export default MyApp
