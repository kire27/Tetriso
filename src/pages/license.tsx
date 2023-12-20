import React, { useEffect, useState } from "react";
import arrowLeft from "../assets/icons/arr-left.svg";
import licenseTxt from "../../LICENSE.txt";

function License() {

    useEffect(() => {
        fetch(licenseTxt)
        .then(response => response.text())
        .then((data) => {
            document.getElementById("text")!.innerText = data
        })        
    })

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
            fontSize: "1rem",
        }  as React.CSSProperties,
    }
    
    return (
        <div style={styling.body}>
            <a href="./" style={styling.a}>
                <img src={arrowLeft} style={styling.img} alt="arrowLeft" />
                TETRISO
            </a>

            <div id="text" style={styling.text}></div>
        </div>
    );
}

export default License;