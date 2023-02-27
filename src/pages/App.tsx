import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import License from "./license";
import Homepage from "./Homepage";

import { firestore } from "../database/firebase-config";


function App() {

    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/license" element={<License />} />
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

            <article></article>

            <footer id="MF">
                <div id="footerTetriso">TETRISO</div>
                <Link to="/license" className="footerLink">
                    © {new Date().getFullYear()} Haam apps
                </Link>
            </footer>
        </React.Fragment>
    );
}

export default App;
