import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosApi";

export default function Hello() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // const header = localStorage.getItem("access_token");
    // console.log(header);
    axiosInstance
      .get("/hello/")
      .then((result) => {
        console.log(result.data);

        const message = result.data.hello;
        console.log(message);
        setMessage(message);
      })
      .catch((error) => {
        console.log("Error: ", JSON.stringify(error, null, 4));
        throw error;
      });
  });

  return <div>{message}</div>;
}
