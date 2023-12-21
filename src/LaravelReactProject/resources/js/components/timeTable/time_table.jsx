import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import {
    timeTableInfoWeekday,
    timeTableInfoSatSunHoliday,
} from "../../constant/time_tables_constant";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

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
                    {/* 平日の時刻表一覧 */}
                    {timeTableInfoWeekday.map((timeTable) => (
                        <TimeTableButton key={timeTable.id} {...timeTable} />
                    ))}
                    <TimeTableTitle title={"土日祝"}></TimeTableTitle>
                    {/* 土日祝の時刻表一覧 */}
                    {timeTableInfoSatSunHoliday.map((timeTable) => (
                        <TimeTableButton key={timeTable.id} {...timeTable} />
                    ))}
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
            <Typography sx={{ fontSize: "22px" }}>{props.title}</Typography>
        </Box>
    );
}

function TimeTableButton(props) {
    // const navigate = useNavigate();
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
            <Typography sx={{ fontSize: "16px" }}>
                {props.destination}
            </Typography>
            <IconButton
                sx={{
                    marginLeft: "auto",
                }}
                // onClick={() => navigate("/timetable/" + props.id)}
            >
                <ArrowRightOutlinedIcon />
            </IconButton>
        </Box>
    );
}
