import React from "react";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.210.104:3332",
});
