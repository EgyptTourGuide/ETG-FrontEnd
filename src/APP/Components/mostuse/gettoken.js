import axios from "axios";
import { backendurl } from './../call-backend/URLs';


export default async function gettoken(){
      try{

        const user = JSON.parse(localStorage.getItem('user'));
        const refreshToken = user.refreshToken;
        const token = await (await axios.post(`${backendurl}/token`, {refreshToken})).data.token;
        localStorage.setItem('user', JSON.stringify({...user, token}));
        return token;


}catch(e){
    localStorage.clear()
    window.location.href = "/login"
  
}

 }
 
