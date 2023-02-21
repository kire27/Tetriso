import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "../styles/App.css";
import Singleplayer from "./sp/singleplayer";
import Multiplayer from "./mp/multiplayer";
import { HomeContent, Contact, Login, Register, Support } from "./AppComponents";

import img_github from "../res/icons/github.png";
import img_logo3 from "../res/logo3.png";
import img_twitter from "../res/icons/twitter.png";

function App() {
    // const [gameStatus, setGameStatus] = useState("spm");
    // const [usernameInput, setUsernameInput] = useState("");

    return (
        <div className="homepage">
            <div id="nL" className="navbar">
                <Link to="/">
                    <img
                        src={img_logo3}
                        className="gameLogo"
                        alt="logo"
                    />
                </Link>

                <div>
                    <Link to="/singleplayer" className="playButtons">
                        play singleplayer
                    </Link>
                    <Link to="/multiplayer" className="playButtons">
                        play multiplayer
                    </Link>

                    {/* TODO on click make pop up with settings */}
                    <button className="playButtons settings">  
                        Settings
                    </button>
                </div>
            </div>

            <div className="container">
                <Routes>
                    <Route path="/" element={<HomeContent />} />
                    <Route path="/tetriso" element={<HomeContent />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/support" element={<Support />} />

                    <Route path="/singleplayer" element={<Singleplayer />} />
                    <Route path="/multiplayer" element={<Multiplayer />} />

                    <Route
                        path="*"
                        element={
                            <div className="wrongPage">
                                Unfortunately, the page doesn't exist.
                            </div>
                        }
                    />
                </Routes>

                <Outlet />
            </div>

            <footer id="MF" className="mainFooter">
                <div className="footerIntro">
                    <h3>Tetriso</h3>
                    <h5>A project of Tetris like web optimized game.</h5>
                </div>
                <div className="footerButtons">
                    <Link to="/Contact" id="cB" className="ContactButton">
                        Contact us!
                    </Link>
                    <Link to="/Login" id="lB" className="loginButton">
                        Login
                    </Link>
                    <Link to="/Register" id="rB" className="registerButton">
                        Register
                    </Link>
                    <Link to="/Support" id="rB" className="supportButton">
                        Support us
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default App;
