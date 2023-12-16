import React from "react";
import { useState, useEffect } from "react";
import Header from "./header/header";
import TopNotice from "./top/topNotice";
import TopMenu from "./top/topMenu";
import { Box, Container, Grid } from "@mui/material";

function Home() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Header />
                <Box sx={{ height: "40%" }}>
                    <TopNotice />
                </Box>
                <Box sx={{ height: "50%" }}>
                    <TopMenu />
                </Box>
            </Box>
        </>
    );
}

export default Home;
