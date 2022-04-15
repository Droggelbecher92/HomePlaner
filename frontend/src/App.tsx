import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExamplePage from "./ExamplePage";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ExamplePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

