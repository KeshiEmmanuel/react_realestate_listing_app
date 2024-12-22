import axios from "axios";

export const BayutApiClient = axios.create({
    baseURL: "https://bayut.p.rapidapi.com/",
    params: {
        locationExternalIDs: "5002,6020",
    },
    headers: {
        "x-rapidapi-key": "f58cb0d27amsh5d4c6b1cb96eccbp1d475cjsnee8fb6a9fd01",
        "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
});
