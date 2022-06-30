import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTokenSelector, setTokenUser} from "./app/slices/appSlice";

function App() {

    const dispatch = useDispatch();

    const CLIENT_ID = "1619fd283c634c018f2b78d2915707d6";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

    const tokenUser = useSelector(getTokenSelector);

    console.log(tokenUser);

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        console.log(hash, token);

        if(hash && !token) {
            const tokenOnHash = hash.substring(
                hash.indexOf("=") + 1,
                hash.indexOf("&token_type")
            );
            dispatch(setTokenUser(tokenOnHash));
            //TODO: CHANGE THIS WITH REACT ROUTER.
            window.location.replace("/");
        }

    }, [])

    const onLogout = () => {
        dispatch(setTokenUser(""));
        window.localStorage.removeItem("token");
    }

    return (
        <div className="App">
            <header className="App-header">
                {tokenUser}
                {!tokenUser ?
                    <a href={url}>Login
                        to Spotify</a>
                    : <button onClick={onLogout}>Logout</button>}
            </header>
        </div>
    );
}

export default App;
