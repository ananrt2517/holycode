import axios from "axios";
import { ICats } from "../types";

export const getCats = () =>
  axios.get<ICats[]>(
    "https://api.thecatapi.com/v1/images/search?limit=80&mime_tpes=&order=Random&si]e=small&page=3&sub _id=demo-ce06ee"
  );
