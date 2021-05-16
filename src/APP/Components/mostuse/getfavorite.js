import  axios  from 'axios';
import gettoken from './gettoken';
import { backendurl } from './../call-backend/URLs';

export default async function getfavorite(){
var token=JSON.parse(localStorage.getItem('user')).token;
    const favorite= await axios.get(`${backendurl}/profile/favourites`,{headers: {'Authorization': `${token}`}})
        .catch(
           (error)=>{
       if(error.response.status === 403)
token=gettoken();
 

          });
          
      if(favorite){
          const fav=favorite.data.favourites;
    return fav;
    }
}