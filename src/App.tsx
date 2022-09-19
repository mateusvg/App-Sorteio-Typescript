import React, { useState, SetStateAction } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import History from './pages/History';
import HomePage from './pages/Home';
import Rafle from './pages/Rafle'
import App from './componets/AppBar'
import Login from './pages/Login'

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = (props) => {

const [auth, setAuth] = useState(false);

    if (!auth) return (
        <BrowserRouter>
            <Login setAuth={setAuth} />
        </BrowserRouter>
    );

    return (
        <BrowserRouter>
            <App setAuth={setAuth} />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/rafle" element={<Rafle />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Application;
