import {useEffect} from "react";
import {AppRoutes, token} from "../../app-constants";
import NavbarComponent from "../../components/navbar/navbar";

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
        <NavbarComponent />
    )
}

export default  HomeComponent