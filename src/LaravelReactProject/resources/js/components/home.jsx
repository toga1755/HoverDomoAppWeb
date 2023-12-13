import React from "react";
import Header from "./header/header";
import TopNotice from "./top/topNotice";
import TopMenu from "./top/topMenu";
import { Box, Container, Grid } from "@mui/material";

function Home() {
    return (
        <Box
            style={{ width: "100%", height: "100%" }}
            sx={{
                display: "grid",
                gridTemplateRows: "0.0001fr 1fr 1.3fr",
            }}
        >
            <Header />
            <TopNotice />
            <TopMenu />
        </Box>
    );
}

export default Home;
