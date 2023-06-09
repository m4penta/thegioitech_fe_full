import ReactDOM from 'react-dom';
import App from './app';
import { store } from './redux';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
