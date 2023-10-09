import { HttpHeaders } from "@angular/common/http";
import { Constants } from "./constants";

export class TokenUtil {

  static getToken() {
    return sessionStorage.getItem(Constants.KEY_TOKEN) != null ? sessionStorage.getItem(Constants.KEY_TOKEN) : 'token-invalido';
  }

  static getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
  }

}
