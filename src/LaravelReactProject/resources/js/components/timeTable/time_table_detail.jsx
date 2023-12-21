import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";

export default function TimeTableDetailPage(props) {
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
                {/* ヘッダーが89.4% */}
                <Box sx={{ height: "100%" }}>
                    <TimeTableDetail></TimeTableDetail>
                </Box>
            </Box>
        </>
    );
}

function TimeTableDetail() {
    return (
        <Box
            sx={{
                height: "100%",
            }}
        ></Box>
    );
}
