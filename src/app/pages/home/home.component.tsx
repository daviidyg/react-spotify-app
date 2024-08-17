import {useEffect} from "react";
import {AppRoutes, token} from "../../app-constants";
import NavbarComponent from "../../components/navbar/navbar";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileInfoRequest} from "../../redux/actions/profileInfoActions/profileInfoActions";
import {infoSelector} from "../../redux/reducers/profileInfoReducer";
import {ProfileInfo} from "../../models/ProfileInfo";

const HomeComponent = () => {
    const dispatch = useDispatch();

    const profileInfoUser: ProfileInfo = useSelector(infoSelector);

    useEffect(() => {
        dispatch(fetchProfileInfoRequest());

        if (!token) {
            window.location.replace(AppRoutes.LOGIN);
        }

        const hash = window.location.hash;

        if (hash && !token) {
            const tokenOnHash = hash.substring(
                hash.indexOf("#access_token=") + 1,
                hash.indexOf("&token_type")
            ).replace("access_token=", "");
            window.localStorage.setItem("token", `Bearer ${tokenOnHash}`);
            window.location.replace("/");
        }

    }, []);

    if (!profileInfoUser) {
        return null;
    }

    return (
        <>
            <NavbarComponent infoUser={profileInfoUser}/>
            <h1>Welcome {profileInfoUser.display_name}</h1>
        </>
    );
};

export default HomeComponent;