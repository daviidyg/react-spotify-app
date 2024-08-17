import spotifyIcon from "../../../assets/Spotify_Logo_RGB_White.png";
import {url} from "../../app-constants";

const LoginComponent = () => {

    return (
        <div className="grid grid-cols-5">
            <div
                className="grid h-screen place-items-center dark:bg-black">
                <form className="space-y-6" action="#">
                    <img src={spotifyIcon} className="h-16 mb-2"/>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white"> Sign in to our platform</h5>
                    <div className="grid place-items-center">
                        <a href={url}
                           className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700"
                        >
                            Login with Spotify
                        </a>
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create
                        account</a>
                    </div>
                </form>
            </div>
            <div
                className="grid col-span-4 h-screen bg-gradient-to-l from-green-700 via-emerald-900 to-black">
            </div>
        </div>
    );
};

export default LoginComponent;