import {useEffect} from "react";
import {AppRoutes, token} from "../../app-constants";
import NavbarComponent from "../../components/navbar/navbar";
import {useDispatch} from "react-redux";
import {fetchProfileInfoRequest} from "../../redux/actions/profileInfoActions/profileInfoActions";

const HomeComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("im here")
        dispatch(fetchProfileInfoRequest());

        if (!token) {
            window.location.replace(AppRoutes.LOGIN);
        }

        const hash = window.location.hash;

        if (hash && !token) {
            const tokenOnHash =  hash.substring(
                hash.indexOf("#access_token=") + 1,
                hash.indexOf("&token_type")
            ).replace("access_token=", "");
            window.localStorage.setItem("token", `Bearer ${tokenOnHash}`);
            window.location.replace("/");
        }

    }, [])

    return (
        <NavbarComponent />
    )
}

export default  HomeComponent