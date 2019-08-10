import axios from 'axios';
import configuration from '../../../configuration/configuration';


const defaultConfig = {
  baseURL: configuration.PORT,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
};
const api = axios.create(defaultConfig);
export default api;


