import React from "react";

export default function SignedInLinks({ currentUsername }) {
  const handleLogout = () => {
    axiosInstance
      .post("/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then((response) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers["Authorization"] = null;
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <ul>
      <li>Hey {currentUsername}</li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  );
}
