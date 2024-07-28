import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Visualizer from "./pages/VIsualizer";

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <Home/> }></Route>
                <Route path="/cadastrar" element = { <Register/> }></Route>
                <Route path="/visualizar" element = { <Visualizer/> } ></Route>
            </Routes>
        </BrowserRouter>
    )   
}