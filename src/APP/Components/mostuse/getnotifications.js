import axios from "axios";
import gettoken from "./gettoken";
import { backendurl } from "./../call-backend/URLs";
export default async function getnotifications() {
  var token = JSON.parse(localStorage.getItem("user")).token;
  var data = [];
  await axios.get(`${backendurl}/profile/notifications`, {
      headers: { Authorization: `${token}` },
    })
    .then((res) => {
      data = res.data.notifications;
    })
    .catch(async (error) => {
      if (error.response.status === 403)
        await gettoken().then((res) => {
          token = res;
        });
    });

  return data;
}
