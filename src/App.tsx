import {useEffect} from "react";
import {url} from "./app/app-constants";

function App() {

    const  token = window.localStorage.getItem("token");

    useEffect(() => {
        const hash = window.location.hash;

        if (hash && !token) {
            const tokenOnHash = hash.substring(
                hash.indexOf("=") + 1,
                hash.indexOf("&token_type")
            );

            window.localStorage.setItem("token", `Beaver ${tokenOnHash}`);
            window.location.replace("/");
        }

    }, [])

    const onLogout = () => {
        window.localStorage.removeItem("token");
    }

    return (
        <div className="App">
            <header className="App-header">
                {token}
                {!token ?
                    <a href={url}>Login
                        to Spotify</a>
                    : <button onClick={onLogout}>Logout</button>}
            </header>
        </div>
    );
}

export default App;
