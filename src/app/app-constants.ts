//SOME INFO FOR CREATE SPOTIFY LOGIN

const CLIENT_ID = "1619fd283c634c018f2b78d2915707d6";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]
export const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scopes${scopes.join("%20")}&show_dialog=true&response_type=token`;

//Token saved in local storage
export const token = window.localStorage.getItem("token");

//URLS
export enum AppRoutes {
    LOGIN = "/login"
}