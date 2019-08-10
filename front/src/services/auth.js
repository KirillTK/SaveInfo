import api from './api';

const basePath = '/api';

class Auth {
  signIn(user){
    return api.post(`${basePath}/login`, user);
  }

  logIn(user) {
    return api.post(`${basePath}/registration`, user);
  }

  logout(){
    return api.get(`${basePath}/logout`);
  }

  getUser() {
    return api.get(`${basePath}/user`);
  }
}

export default Auth;