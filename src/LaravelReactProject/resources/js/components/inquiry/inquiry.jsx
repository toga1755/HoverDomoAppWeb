import React from "react";
import Header from "../header/header";
import { Box } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import { Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

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

const formUrl =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc4-gCb1VIwfREnw2xxQWTkviWrjLULrQia1mK0UTPEHDIoxA/formResponse";

const formFieldNames = {
    name: "entry.2033945062",
    email: "entry.258642143",
    content: "entry.568237097",
};

function InquiryContent() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    // const onSubmit = (data) => console.log(data);

    const onSubmit = async (data) => {
        try {
            await fetch(formUrl, {
                method: "POST",
                // urlEncodeされた値をbodyに入れる
                body: provideUrlEncodedFormData(data),
                // 通常ではcorsに弾かれる (返却値のstatusは常に0 後述...)
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            // 成功後の処理を記述する (画面遷移とか)
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Box sx={{ height: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="fom-item">
                    <label>
                        <p>名前</p>
                        <input type="text" {...register("name")} />
                    </label>
                    <p className="error-message">{errors.name?.message}</p>
                </div>
                <div className="form-item">
                    <label>
                        <p>めーるアドレス</p>
                        <input
                            type="text"
                            {...register("email", { required: true })}
                        />
                    </label>
                    <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className="form-item">
                    <label>
                        <p>内容</p>
                        <input type="text" {...register("content")} />
                    </label>
                    <p className="error-message">{errors.content?.message}</p>
                </div>
                <button type="submit">送信</button>
            </form>
        </Box>
    );
}

function handleSubmit(e) {
    e.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: provideUrlEncodedFormData(form),
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    // 送信後の処理を記述...
}

// request bodyに必要なurlEncodeされた値を提供
// originalのform情報を{entry.{number}: value}に変換する
function provideUrlEncodedFormData(originalFormData) {
    const result = {};
    Object.keys(originalFormData).map(
        (key) => (result[formFieldNames[key]] = originalFormData[key])
    );
    return new URLSearchParams(result).toString();
}
