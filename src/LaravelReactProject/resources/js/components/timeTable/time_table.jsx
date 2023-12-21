import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";

export default function TimeTable() {
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
                    <TimeTableTitle title={"平日"}></TimeTableTitle>
                    <TimeTableList></TimeTableList>
                    <TimeTableTitle title={"土日祝"}></TimeTableTitle>
                    <TimeTableList></TimeTableList>
                </Box>
            </Box>
        </>
    );
}

function TimeTableTitle(props) {
    return (
        <Box
            sx={{
                height: "16%",
                bgcolor: "orange",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                padding: "20px",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
            }}
        >
            <Typography sx={{ fontSize: "24px" }}>{props.title}</Typography>
        </Box>
    );
}

function TimeTableList() {
    return (
        <Box
            sx={{
                minHeight: "13vh",
                bgcolor: defaultColor,
                borderBottom: "1px solid black",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <Typography sx={{ fontSize: "16px" }}>{"aa"}</Typography>
        </Box>
    );
}
