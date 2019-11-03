import axios from 'axios';


const basePath = '/api';

class Auth {
  logIn(user){
    return axios.post(`${basePath}/login`, user);
  }

  signUp(user) {
    return axios.post(`${basePath}/registration`, user);
  }

  logout(){
    return axios.get(`${basePath}/logout`);
  }

  getUser() {
    return axios.get(`${basePath}/user`);
  }
}

export default new Auth();
