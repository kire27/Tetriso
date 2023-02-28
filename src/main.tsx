import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.sass";
import "./styles/app.sass";
import "./styles/game.sass";
import "./styles/glitch.sass";
import App from "./pages/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
