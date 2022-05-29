import {SetStateAction, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTokenSelector, setTokenUser} from "./app/slices/appSlice";

function App() {

    const dispatch = useDispatch();

    const CLIENT_ID = "1619fd283c634c018f2b78d2915707d6"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const tokenUser = useSelector(getTokenSelector);

    console.log(tokenUser);

    useEffect(() => {
        const hash = window.location.hash;
        let token: string | undefined | null = window.localStorage.getItem("token");

        if(hash && !token) {

            token  = hash.substring(1).split("&").find( element => element.startsWith("access_token"));

            window.location.hash = "";
            if (typeof token === "string") {
                window.localStorage.setItem("token", token);
            }

        }

        dispatch(setTokenUser("asdklfjasdfk"));

    }, [])

    const logout = () => {
        setTokenUser("");
        window.localStorage.removeItem("token");
    }

    return (
        <div className="App">
            <header className="App-header">
                {!tokenUser ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </header>
        </div>
    );
}

export default App;
