import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import TodoPage from "./pages/TodoPage";
import ChooseFunction from "./components/main/ChooseFunction";
import Page from "./pages/Page";
import LoginRegisterForm from "./components/main/LoginRegisterForm";
import TodoGallery from "./components/todo/TodoGallery";

export default function App() {
    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path={''} element={<Page/>}>
                        <Route path={'login'} element={<LoginRegisterForm/>}/>
                        <Route path={''} element={<ChooseFunction/>}/>
                    </Route>
                    <Route path={'/todo'} element={<TodoPage/>}>
                        <Route path={''} element={<TodoGallery/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

