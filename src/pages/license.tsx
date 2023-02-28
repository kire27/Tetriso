import React, { useState } from "react";
import arrowLeft from "../assets/icons/arr-left.svg";

function License() {

    const [licenseData, setLicenseData] = useState("");

    const styling = {
        body: {
            textAlign: "center",
            padding: "1rem",
            color: "rgb(200, 200, 200)",
            margin: "0 auto",
        } as React.CSSProperties,
        a: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            fontSize: "2rem",
            color: "white",
            margin: "2rem",
            fontFamily: "cyberway",
        }  as React.CSSProperties,
        img: {
            filter: "invert(1)",
            width: "2rem",
            margin: "0 1rem",
        }  as React.CSSProperties,
        text: {
            margin: "1rem",
            width: "70vw",
            fontSize: "1.2rem",
        }  as React.CSSProperties,
    }

    fetch('../LICENSE.txt')
        .then(response => response.text())
        .then((data) => setLicenseData(data));
    
    return (
        <div style={styling.body}>
            <a href="./" style={styling.a}>
                <img src={arrowLeft} style={styling.img} alt="arrowLeft" />
                TETRISO
            </a>

            <div id="text" style={styling.text}>{licenseData}</div>
        </div>
    );
}

export default License;