import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosApi";

export default function Hello() {
  const [message, setMessage] = useState("");

  const getMessage = () => {
    axiosInstance
      .get("/hello/")
      .then((result) => {
        const message = result.data.hello;
        setMessage(message);
      })
      .catch((error) => {
        console.log("Error: ", JSON.stringify(error, null, 4));
        throw error;
      });
  };

  useEffect(() => {
    getMessage();
  }, []);

  return <div>{message}</div>;
}
