import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import NoticeListPage from "./notice/notice_list";
import About from "./about";
import Nomatch from "./nomatch";

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/notice_list" element={<NoticeListPage />} />
                    <Route path="/notice/:id" element={<About />} />
                    <Route path="/opeInfo" element={<About />} />
                    <Route path="/fare" element={<About />} />
                    <Route path="/inquiry" element={<About />} />
                    <Route path="/reserve" element={<About />} />
                    <Route path="/account" element={<About />} />
                    <Route path="/login" element={<About />} />
                    <Route path="/signup" element={<About />} />
                    <Route path="/logout" element={<About />} />
                    <Route path="*" element={<Nomatch />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
    // notice/:idでidを指定すると、そのidのnoticeを表示する
    //
}

if (document.getElementById("app")) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));
    Index.render(<App />);
}
