import React from "react";
import "../../styles/App.css";

function Multiplayer() {

    const RenderMultiPlayerMenu = () => {
        return (
            
            <div className="startMenu">
                <form>
                    <img
                        src={require("../../res/logo3.png")}
                        className="gameLogoForm"
                        alt="tetriso logo"
                    />
                    <h2 className="gTitle">Multi Player</h2>
    
                    <input
                        id="usernameInputM"
                        type="text"
                        placeholder="your username"
                    />
    
                    <button className="startGameLevel">level: </button>
    
                    <button id="startGameBtnM" className="startGameBtnM">
                        start game
                    </button>
    
                    <img
                        src={require("../../res/icons/options.png")}
                        className="menuOptions"
                        alt="options"
                    />
                </form>
                globalHighScores();
            </div>
        );
    };

    const RenderMultiPlayer = () => {
        return (
            <React.Fragment>
                {/* {!usernameM.textContent ? <MpGame /> : alert("no")} */}
            </React.Fragment>
        );
    };

    return (
        /*    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/style.css">
        
        <title>Document</title>
    </head>*/
    <div id="gC" className="gameContainer">

        <body className="tetrisMultiPlayerPage">
            <div>
                <div id="gameScore1"></div>
                <div id="gameScore2"></div>

                <canvas
                    id="canvas1"
                    style={{ border: "1px solid #000000" }}
                ></canvas>
                <canvas
                    id="canvas2"
                    style={{ border: "1px solid #000000" }}
                ></canvas>

                <script
                    type="text/javascript"
                    src="../build/tetrisMP.js"
                ></script>
            </div>

            <script>
                {/*
            window.addEventListener("keydown", function(e) {
                if(e.code === "Space"|
                    e.code === "ArrowUp"|
                    e.code === "ArrowDown"|
                    e.code === "ArrowLeft"|
                    e.code === "ArrowRight") {
                    e.preventDefault();
                }
            }, false);
            
            */}
            </script>
        </body>
        </div>
    );
}

export default Multiplayer;
