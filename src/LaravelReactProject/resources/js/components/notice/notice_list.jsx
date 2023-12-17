import React from "react";
import Header from "../header/header";
import { Box } from "@mui/material";

export default function NoticeList() {
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
                <Box sx={{ height: "40%" }}>aaa</Box>
                <Box sx={{ height: "50%" }}>bbb</Box>
            </Box>
        </>
    );
}
