import {useCookies} from "react-cookie";


export default class APIService {


  static LoginUser(body) {
    return fetch(`http://127.0.0.1:8000/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Token 387601149dcebcc68cb57283cd0d37847db53643",
      },
      body: JSON.stringify(body),
    }).then(resp => resp.json());
  }
 
  static RegisterUser(body) {
    return fetch(`http://127.0.0.1:8000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Token 387601149dcebcc68cb57283cd0d37847db53643",
      },
      body: JSON.stringify(body),
    }).then(resp => resp.json());
  }


  







}