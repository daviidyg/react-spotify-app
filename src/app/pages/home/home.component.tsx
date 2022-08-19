import {useEffect} from "react";
import {AppRoutes, token} from "../../app-constants";

const HomeComponent = () => {

    useEffect(() => {

        if (!token) {
            window.location.replace(AppRoutes.LOGIN);
        }

        const hash = window.location.hash;

        if (hash && !token) {
            const tokenOnHash =  hash.substring(
                hash.indexOf("#access_token=") + 1,
                hash.indexOf("&token_type")
            ).replace("access_token=", "");
            window.localStorage.setItem("token", `Beaver ${tokenOnHash}`);
            window.location.replace("/");
        }

    }, [])

    return (
        <h1>Home Page</h1>
    )
}

export default  HomeComponent