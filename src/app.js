import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation, Thumbs } from 'swiper/swiper.esm';
import 'swiper/swiper.scss';
import CartPage from './page/cart';
import ContentDetailPage from './page/content-detail';
import ContentListPage from './page/content-list';
import ErrorPage from './page/error';
import HomePage from './page/home';
import LoginPage from './page/login';
import OrderCheckPage from './page/order-check';
import RegisterPage from './page/register';
import UserInfoPage from './page/user-info';
import './style/index.scss';

SwiperCore.use([Navigation, Thumbs, Autoplay]);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/category/:slug' component={ContentListPage} />
        <Route path='/product/:slug' component={ContentDetailPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/order-check' component={OrderCheckPage} />
        <Route path='/user-info' component={UserInfoPage} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
