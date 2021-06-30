import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import gettoken from "./gettoken";
export default async function removefev(id) {
  var token = JSON.parse(localStorage.getItem("user")).token;

  await axios
    .delete(`${backendurl}/profile/favourites/${id}`, {
      headers: { Authorization: `${token}` },
    })
    .catch(() => {
      gettoken().then((res) => {
        token = res;
      });
    });
}
