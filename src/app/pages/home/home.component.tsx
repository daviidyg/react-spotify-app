import { useEffect } from "react";
import { AppRoutes, token } from "../../app-constants";
// import NavbarComponent from "../../components/navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileInfoRequest } from "../../redux/actions/profileInfoActions/profileInfoActions";
import { infoSelector } from "../../redux/reducers/profileInfoReducer";
import { ProfileInfo } from "../../models/ProfileInfo";
import NavbarComponent from "../../components/navbar/navbar";
import SearchBar from "../../components/searchbar/searchbar";

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
            <NavbarComponent infoUser={profileInfoUser} />
            <div className="parent h-screen dark:bg-gray-800 w-screen">
                <div className="p-4 sm:ml-64">
                    <div className="p-4 dark:border-gray-700">
                        <h1 className="p-5 text-m font-semibold text-gray-900 md:text-5xl dark:text-white">Welcome, {profileInfoUser?.display_name}</h1>
                    </div>
                    <SearchBar />
                </div>
            </div>
        </>
    );
};

export default HomeComponent;