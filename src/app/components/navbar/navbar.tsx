import {Avatar, Container, Toolbar} from "@mui/material";
import { AppBar } from "@mui/material";
import React from "react";
import {ProfileInfo} from "../../models/ProfileInfo";

interface NavbarComponentProps {
    infoUser: ProfileInfo
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({infoUser}) => {

    return (
        <AppBar position="static" sx={{bgColor: "black"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar alt="Remy Sharp" src={infoUser && infoUser.images ? infoUser.images[0].url : ''}/>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavbarComponent;
