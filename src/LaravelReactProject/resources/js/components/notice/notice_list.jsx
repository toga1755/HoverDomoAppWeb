import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const notices = [
    {
        id: 1,
        title: "タイトルあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
        content:
            "本文1ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    },
    {
        id: 2,
        title: "タイトル2",
        content: "本文2",
    },
    {
        id: 3,
        title: "タイトル3",
        content: "本文3",
    },
    {
        id: 4,
        title: "タイトル4",
        content: "本文4",
    },
    {
        id: 5,
        title: "タイトル5",
        content: "本文5",
    },
    {
        id: 6,
        title: "タイトル6",
        content: "本文6",
    },
    {
        id: 7,
        title: "タイトル7",
        content: "本文7",
    },
    {
        id: 8,
        title: "タイトル8",
        content: "本文8",
    },
    {
        id: 9,
        title: "タイトル9",
        content: "本文9",
    },
    {
        id: 10,
        title: "タイトル10",
        content: "本文10",
    },
    {
        id: 11,
        title: "タイトル11",
        content: "本文11",
    },
    {
        id: 12,
        title: "タイトル12",
        content: "本文12",
    },
    {
        id: 13,
        title: "タイトル13",
        content: "本文13",
    },
    {
        id: 14,
        title: "タイトル14",
        content: "本文14",
    },
    {
        id: 15,
        title: "タイトル15",
        content: "本文15",
    },
];

export default function NoticeListPage() {
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
                    <NoticeList></NoticeList>
                </Box>
            </Box>
        </>
    );
}

function NoticeList() {
    return (
        <Box
            sx={{
                height: "100%",
                overflow: "scroll",
            }}
        >
            {notices.map((notice) => (
                <NoticeContent key={notice.id} {...notice} />
            ))}
        </Box>
    );
}

function NoticeContent(props) {
    return (
        <Box
            sx={{
                borderBottom: "0.5px solid black",
                height: "22%",
                marginLeft: "15px",
                marginRight: "15px",
                display: "flex",
                padding: "10px",
            }}
        >
            {/* 画像ボックス */}
            <Box
                sx={{
                    height: "100%",
                    width: "30%",
                    bgcolor: "blue",
                }}
            ></Box>
            {/* テキストのボックス */}
            <Box sx={{ width: "60%", paddingLeft: "15px" }}>
                {/* タイトル */}
                <Typography
                    sx={{
                        fontSize: "20px",
                        height: "35%",
                        overflow: "scroll",
                    }}
                >
                    {props.title}
                </Typography>
                {/* 本文 */}
                <Typography
                    sx={{
                        fontSize: "14px",
                        height: "60%",
                        overflow: "scroll",
                    }}
                >
                    {props.content}
                </Typography>
            </Box>
            {/* アイコンのボックス */}
            <Box
                sx={{
                    width: "10%",
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                }}
            >
                <IconButton>
                    <ArrowForwardIosIcon sx={{}} />
                </IconButton>
            </Box>
        </Box>
    );
}
