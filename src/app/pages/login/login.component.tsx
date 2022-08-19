import {Avatar, Button, Grid} from "@mui/material";
import LoginIcon from "../../../assets/login-icon.png";
import {url} from "../../app-constants";

const LoginComponent = () => {

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '100vh'}}
        >
            <Grid item xs={3}>
                <Avatar src={LoginIcon} sx={{width: "100%", height: "100%"}}/>
            </Grid>
            <Grid item xs={3}>
                <h1>UOPS! To use this application you need to connect your Spotify account.</h1>
                <Button href={url} variant="contained" color="success">
                    LOGIN WITH SPOTIFY
                </Button>
            </Grid>
        </Grid>
    )
}

export default LoginComponent