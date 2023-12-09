import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Nomatch from "./nomatch";

function App() {
    const MainLayout = () => (
        <Dashboard>
            <h1>ss</h1>
            <Outlet />
        </Dashboard>
    );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Nomatch />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
