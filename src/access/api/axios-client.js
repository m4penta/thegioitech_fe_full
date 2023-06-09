import axios from 'axios';
import { API } from '../../constant';

const axiosClient = axios.create({
  baseURL: API.DEVELOP,
  timeout: 15000,
});

axiosClient.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosClient.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosClient.defaults.headers.put['X-Requested-With'] = 'XMLHttpRequest';
axiosClient.defaults.headers.delete['X-Requested-With'] = 'XMLHttpRequest';

export { axiosClient };
