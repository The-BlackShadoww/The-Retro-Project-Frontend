import { json_api } from "./API";
import axios from "axios";

//! Fetching hero section data
export const fetchHero = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(json_api + "hero_section")
            .then((response) => {
                const Data = response.data;
                resolve(Data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
