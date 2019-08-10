import axios from 'axios';


const basePath = '/api';

class Auth {
  signIn(user){
    return axios.post(`${basePath}/login`, user);
  }

  logIn(user) {
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