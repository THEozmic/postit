import 'jquery/dist/jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import SideMenu from './components/side-menu';

const app = document.getElementById('app');
ReactDOM.render(<SideMenu/>, app);
