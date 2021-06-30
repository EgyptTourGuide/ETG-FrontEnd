import axios from "axios";
import gettoken from "./gettoken";
import { backendurl } from "./../call-backend/URLs";
export default async function getfavorite() {
  var token = JSON.parse(localStorage.getItem("user")).token;
  var fav = {};
   await axios
    .get(`${backendurl}/profile/favourites`, {
      headers: { Authorization: `${token}` },
    })
    .then((res) => {
      fav = res.data.favourites;
    })
    .catch(async (error) => {
      if (error.response.status === 403)
        await gettoken().then((res) => {
          token = res;
        });
    });

  return fav;
}
