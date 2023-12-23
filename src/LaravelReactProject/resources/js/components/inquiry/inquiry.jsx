import React from "react";
import Header from "../header/header";
import { Box } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import { Typography } from "@mui/material";

export default function InquiryPage() {
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
                <InquiryTitle></InquiryTitle>

                <InquiryContent></InquiryContent>
            </Box>
        </>
    );
}

function InquiryTitle() {
    return (
        <Box
            sx={{
                height: "10%",
                bgcolor: "orange",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography sx={{ fontSize: "20px" }}>お問い合わせ</Typography>
        </Box>
    );
}

Inputs = {
    name: string,
    mail: string,
    content: string,
};

function InquiryContent() {
    return <Box sx={{ bgcolor: "red", height: "100%" }}></Box>;
}
