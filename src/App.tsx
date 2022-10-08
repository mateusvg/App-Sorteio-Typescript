import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import History from './pages/History';
import HomePage from './pages/Home';
import Rafle from './pages/Rafle'
import App from './componets/AppBar'
import Login from './pages/Login'
import Register from './pages/Register'
import Dash from './pages/Dash'
import Profile from './pages/Profile'


export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = (props) => {

    const [auth, setAuth] = useState(false);
    const [show, setShow] = useState(true);
    const [user, setUser] = useState('teste')

    interface EmployeeProps {
        user: string;

    }

    function Employee({ user }: EmployeeProps) {
        return (
            { user }
        );
    }

    if (!auth) return (
        <BrowserRouter>
            {show ? <Login setAuth={setAuth} toggleShow={setShow} setUser={setUser} /> :
                <Routes>
                    <Route path="/register" element={<Register toggleShow={setShow} />} />
                </Routes>}

        </BrowserRouter>

    );

    const obj = {user:`${user}`};

    return (
        <BrowserRouter>
            <App setAuth={setAuth} />
            <Routes>
                <Route path="/profile" element={<Profile {...obj} />} />
                <Route path="/dash" element={<Dash />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/rafle" element={<Rafle />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Application;
