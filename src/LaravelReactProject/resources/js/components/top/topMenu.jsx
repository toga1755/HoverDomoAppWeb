import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";

const menus = [
    {
        text: "運行情報",
        url: "/",
    },
    {
        text: "料金表",
        url: "/",
    },
    {
        text: "時刻表",
        url: "/",
    },
    {
        text: "お問い合わせ",
        url: "/",
    },
    {
        text: "予約",
        url: "/",
    },
    {
        text: "予約確認",
        url: "/",
    },
    {
        text: "カメラ",
        url: "/",
    },
    {
        text: "アカウント",
        url: "/",
    },
];

function TopMenuButton(props) {
    const navigate = useNavigate();
    return (
        <Button
            variant="text"
            sx={{
                height: "100%",
                width: "100%",
                fontSize: "20px",
                fontWeight: "lighter",
                color: "white",
            }}
            onClick={() => navigate(props.url)}
        >
            {props.text}
        </Button>
    );
}

function redirect() {
    navigate;
}

export default function TopMenu() {
    return (
        <Grid
            container
            sx={{
                height: "100%",
                bgcolor: "orange",
                border: "0.5px solid black",
            }}
        >
            <Grid xs={4} sx={{ border: "0.5px solid black" }}>
                <TopMenuButton {...menus[0]} />
            </Grid>
            <Grid xs={4} sx={{ border: "0.5px solid black" }}>
                <TopMenuButton {...menus[1]} />
            </Grid>
            <Grid xs={4} sx={{ border: "0.5px solid black" }}>
                <TopMenuButton {...menus[2]} />
            </Grid>
            <Grid xs={4} sx={{ border: "0.5px solid black" }}>
                <TopMenuButton {...menus[3]} />
            </Grid>
            <Grid xs={4} sx={{ border: "0.5px solid black" }}>
                <TopMenuButton {...menus[4]} />
            </Grid>
            <Grid xs={4} sx={{ border: "0.5px solid black" }}>
                <TopMenuButton {...menus[5]} />
            </Grid>
            <Grid xs={4} sx={{ border: "0.5px solid black" }}>
                <TopMenuButton {...menus[6]} />
            </Grid>
            <Grid xs={8} sx={{ border: "0.5px solid black" }}>
                <TopMenuButton {...menus[7]} />
            </Grid>
        </Grid>
    );
}
