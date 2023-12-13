import React from "react";
import Header from "./header/header";
import TopNotice from "./top/topNotice";
import TopMenu from "./top/topMenu";
import { Box, Container, Grid } from "@mui/material";

function Home() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Header />
            <Box
                sx={{
                    display: "grid",
                    gridTemplateRows: "1fr 1.5fr",
                    height: "100%",
                }}
            >
                <Box sx={{ bgcolor: "red" }}></Box>
                <Box sx={{ bgcolor: "green" }}></Box>
            </Box>
        </div>
    );
}

export default Home;
