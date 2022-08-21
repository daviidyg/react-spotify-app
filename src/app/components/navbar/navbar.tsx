import {Container, Toolbar} from "@mui/material";
import { AppBar } from "@mui/material";
import React from "react";

const NavbarComponent = () => {


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavbarComponent;
