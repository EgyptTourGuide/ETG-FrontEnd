import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import gettoken from "./gettoken";
export default async function AddToFav(type, id) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && type && id) {
    var token = JSON.parse(localStorage.getItem("user")).token;
    const love = { type: type, id: id };
    await axios
      .post(`${backendurl}/profile/favourites`, love, {
        headers: { Authorization: `${token}` },
      })
      .catch((error) => {
        if (error.response.status === 403)
          gettoken().then((res) => {
            token = res;
          });
      });
  } else {
    window.location.replace("/mustlogin");
  }
}
