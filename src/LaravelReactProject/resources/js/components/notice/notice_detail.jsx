import React from "react";
import Header from "../header/header";
import { Box, Typography } from "@mui/material";
import { noticeInfo } from "./notices_constant";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function NoticeDetailPage() {
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
                <Box
                    sx={{
                        height: "89.4%",
                        bgcolor: "#fdf2d0",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                    }}
                >
                    <NoticeDetail></NoticeDetail>
                </Box>
            </Box>
        </>
    );
}

function NoticeDetail() {
    const params = useParams();
    return (
        <Box
            sx={{
                height: "100%",
                color: "blue",
            }}
        >
            {params.id}
        </Box>
    );
}
