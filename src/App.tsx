import {useEffect} from "react";

function App() {

    useEffect(() => {

        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

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
