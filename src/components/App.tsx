import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import SpGame from '../logic/spGame';
import MpGame from '../logic/mpGame';


const dataTable = [
    ["alex", 200],
    ["miss", 800],
    ["jogh", 500],
];

let dataOutputLocal = "local";
let dataOutputGlobal = "global";

function globalHighScores() {
    return (
        <table>
            <tr>
                <td>
                    <h2 className="highScoresTitle">GLOBAL HIGH SCORES</h2>
                </td>
            </tr>
            dataOutputGlobal
        </table>
    )   
}

const RenderSinglePlayer = () => {
    return (
        <React.Fragment>
            {/* {!usernameM.textContent ? <SpGame /> : alert("no")} */}
        </React.Fragment>
    )
}

const RenderSinglePlayerMenu = () => {
    return (
    <div className="startMenu">
        <form>
            <img src="./res/logo3.png" className="gameLogoForm" alt="tetriso logo" />
            <h2 className="gTitle">Single Player</h2>

            <input id="usernameInputS" type="text" placeholder="your username" />

            <button id="levelBtn" className="startGameLevel">level: </button>
                                
            <button id="startGameBtnS" className="startGameBtn" /*onClick={}*/>start game</button>

            <table id="highScores" className="highScores">
                <tr>
                    <td>
                        <h2 className="highScoresTitle">HIGH SCORES</h2>
                    </td>
                </tr>
                ${dataOutputLocal}
            </table>

            <img src="./res/icons/options.png" className="menuOptions" alt="options" />
        </form>

        globalHighScores();
    </div>
    )
}

const RenderMultiPlayer = () => {
    return (
        <React.Fragment>
            {/* {!usernameM.textContent ? <MpGame /> : alert("no")} */}
        </React.Fragment>
    )
}

const RenderMultiPlayerMenu = () => {
    return (
    <div className="startMenu">
        <form>
            <img src="./res/logo3.png" className="gameLogoForm" alt="tetriso logo" />
            <h2 className="gTitle">Multi Player</h2>

            <input id="usernameInputM" type="text" placeholder="your username" />

            <button className="startGameLevel">level: </button>
                                
            <button id="startGameBtnM" className="startGameBtnM">start game</button>

            <img src="./res/icons/options.png" className="menuOptions" alt="options" />
        </form>
        globalHighScores();
    </div>
    )
}


function App() {

    const [gameStatus, setGameStatus] = useState("");

    return (
    <div className="mainPage">

        <nav id="MN" className="menuNavigation">
            <div id="nL" onClick={()=>setGameStatus("spm")}>
                <img src={require("../res/logo3.png")} className="gameLogo" alt="logo" />
            </div>

            <div className="navButtons">
                <button id="gMSP" className="gameModeSinglePlayer" onClick={()=>setGameStatus("spm")}>
                    Play single-player
                </button>
        
                <button id="gMMP" className="gameModeMultiPlayer" onClick={()=>setGameStatus("mpm")}>
                    Play multi-player
                </button>

                <button id="cB" className="ContactButton">
                    Contact us!
                </button>

                <button id="lB" className="loginButton">
                    Login
                </button>

                <button id="rB" className="registerButton">
                    Register
                </button>
            </div>
        </nav>


        <div className="container">
            <hr className="navLine"/>

            <div id="gC" className="gameContainer">
                {(() => {
                    if (gameStatus === "spm") return <RenderSinglePlayerMenu />
                    else if (gameStatus === "spg") return <RenderSinglePlayer />
                    else if (gameStatus === "mpm") return <RenderMultiPlayerMenu />
                    else if (gameStatus === "mpg") return <RenderMultiPlayer />
                    else return <RenderSinglePlayerMenu />
                })()}
            </div>

            <div className="contentContainer">
                <div className="contentOne">
                    <table id="globalHighScores" className="highScores globalHighScores"></table>

                    <div>
                        <div className="contentParagraph">
                            <h1>ABOUT TETRISO</h1>
                            <p>
                                Tetris® is the addictive puzzle game that started it all, embracing our universal desire to create order out of chaos. The Tetris game was created by Alexey Pajitnov in 1984—the product of Alexey’s computer programming experience and his love of puzzles. In the decades to follow, Tetris became one of the most successful and recognizable video games, appearing on nearly every gaming platform available. This page is the official destination for free online single-player Tetris. Click PLAY to start playing one of the world’s most popular puzzle games now!
                            </p>
                        </div>

                        <div className="contentParagraph">
                            <h1>OBJECTIVE</h1>
                            <p>
                                The goal of Tetris is to score as many points as possible by clearing horizontal lines of Blocks. The player must rotate, move, and drop the falling Tetriminos inside the Matrix (playing field). Lines are cleared when they are filled with Blocks and have no empty spaces.
                                As lines are cleared, the level increases and Tetriminos fall faster, making the game progressively more challenging. If the Blocks land above the top of the playing field, the game is over.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contentParagraph">
                    <h1>CONTROL OPTIONS & SCORES</h1>
                    <img src={require("../res/controls_and_scoring-w.png")} alt="tetrisControls" />
                </div>

                <div className="contentParagraph">
                    <h1>GENERAL GAMEPLAY INFO</h1>
                    <p>
                        <b>GOAL</b> – Put your organizational skills and endurance to the test by clearing as many lines as possible. <br/>
                        <b>CLEAR LINES</b> – Maneuver the falling Tetriminos to fit them together within the Matrix. To clear a line, fill every square within a single row. <br/>
                        <b>SCORE POINTS</b> – Earn points by clearing lines. Clear multiple lines at once to increase your scoring opportunities. <br/>
                        <b>GHOST PIECE</b> – Use the Ghost Piece to determine the best fit for the falling Tetrimino. This helpful guide appears directly below the falling Tetrimino and displays possible placements. <br/>
                        <b>NEXT QUEUE</b> – Preview the upcoming Tetrimino in the Next Queue to plan ahead and increase your scoring opportunities. <br/>
                        <b>HOLD QUEUE</b> – Store a falling Tetrimino in the Hold Queue for later use. <br/>
                        <b>GAME OVER</b> – Stack the Tetriminos too high and the game is over! 
                    </p>
                </div>
            </div>
        </div>


        <footer id="MF" className="mainFooter">
            <div className="copyRights">
                <img src={require("../res/official.jpg")} alt="officialTetris" />

                <p>
                    Tetris ® & © 1985~2022 Tetris Holding.<br/>
                    Tetris logos, Tetris theme song and Tetriminos are trademarks of Tetris Holding.<br/>
                    The Tetris trade dress is owned by Tetris Holding. Licensed to The Tetris Company.<br/>
                    Tetris Game Design by Alexey Pajitnov.<br/>
                    Tetris Logo Design by Roger Dean.<br/>
                    All Rights Reserved.<br/>
                    All other trademarks are the property of their respective owners.
                </p>
            </div>
        </footer>


        <script type="text/javascript" src="./build/database.js"></script>

    </div>
    );
}

export default App;
