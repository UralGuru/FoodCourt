import {log} from "util";

class URLManagerStore {
  public getHomeURL() {return '/'};
  public getLoginURL() {return '/auth/login'};
  public getRegistrationURL() {return '/auth/registration'};
}

const URLManager = new URLManagerStore();

export {URLManager};
