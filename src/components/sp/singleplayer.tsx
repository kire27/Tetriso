import React, { useEffect, useState } from "react";
import "../../styles/Menu.css";
import SpGame from "./spGame";

function Singleplayer() {

    const [gameOver, setGameOver] = useState(false);
    const [startGame, setStartGame] = useState(false);
    const [usernameInput, setUsernameInput] = useState("");


    useEffect(() => {
        window.addEventListener(
            "keydown",
            function (e) {
                if (
                    e.code === "Space" ||
                    e.code === "ArrowUp" ||
                    e.code === "ArrowDown" ||
                    e.code === "ArrowLeft" ||
                    e.code === "ArrowRight"
                ) {
                    e.preventDefault();
                }
            },
            false
        );
    });

    const RenderSinglePlayerMenu = () => {
    
        function inputRules(e: any) {
            if (/^[A-zA]+$/.test(e.target.value) && usernameInput.length < 5) {
                setUsernameInput(e.target.value.toUpperCase());
            } else if (e.nativeEvent.inputType === "deleteContentBackward") {
                setUsernameInput(e.target.value.toUpperCase());
            }
        }

        return (
            <div id="gC" className="gameContainer">

            <div className="startMenu">
                <form>
                    <img
                        src={require("../../res/logo3.png")}
                        className="gameLogoForm"
                        alt="tetriso logo"
                    />
                    <h2 className="gTitle">Single Player</h2>
    
                    <input
                        id="usernameInputS"
                        onChange={(e) => inputRules(e)}
                        value={usernameInput}
                        type="text"
                        placeholder="your username"
                    />
    
                    <button id="levelBtn" className="startGameLevel">
                        level:{" "}
                    </button>
    
                    <button
                        id="startGameBtnS"
                        className="startGameBtn"
                        onClick={() => usernameInput ? setStartGame(true):false}
                    >
                        {" "}
                        start game{" "}
                    </button>
    
                    <div id="highScores" className="highScores">
                        <h2 className="highScoresTitle">HIGH SCORES</h2>
                        {/* {dataOutputLocal} */}
                    </div>
    
                    <img
                        src={require("../../res/icons/options.png")}
                        className="menuOptions"
                        alt="options"
                    />
                </form>
            </div>
            </div>
        );
    };

    function RenderSinglePlayerGame() {
        return (
            <React.Fragment>
                {gameOver ? (
                    <div className="gameOverMenu">
                        <h1>Game Over</h1>
                        <h1 onClick={() => setGameOver(false)}>Restart</h1>
                        <h1 onClick={() => setGameOver(false)}>Menu</h1>
                    </div>
                ) : (
                    <div className="game">
                        <div className="gamePlaygroundPart1">
                            <div className="blockHolder">
                                <img
                                    id="imgBlockHolder"
                                    src={require("../../res/empty_piece.png")}
                                    alt="holder"
                                />
                            </div>

                            <div className="gameInfo">
                                <h4 id="gameScoreText" className="gameInfoHeader">
                                    score:
                                </h4>
                                <div id="gameScore" className="gameData"></div>
                                <br />
                                <h4 id="gameLevelText" className="gameInfoHeader">
                                    level:
                                </h4>
                                <div id="gameLevel" className="gameData"></div>
                                <br />
                            </div>

                            <div className="miniMenu">
                                <h2 id="username" className="username">
                                    {" "}
                                    {}{" "}
                                </h2>
                                <br />
                                <img
                                    src={require("../../res/icons/options.png")}
                                    className="miniMenuIcons"
                                    alt="options"
                                />
                                <img
                                    src={require("../../res/icons/question-mark.png")}
                                    className="miniMenuIcons"
                                    alt="help"
                                />
                            </div>
                        </div>

                        <SpGame setGameOver={setGameOver} />

                        <div className="nextBlocks">
                            <img
                                className="imgNextBlocks"
                                id="inb1"
                                src={require("../../res/empty_piece.png")}
                                alt="next blocks"
                            />
                            <img
                                className="imgNextBlocks"
                                id="inb2"
                                src={require("../../res/empty_piece.png")}
                                alt="next blocks"
                            />
                            <img
                                className="imgNextBlocks"
                                id="inb3"
                                src={require("../../res/empty_piece.png")}
                                alt="next blocks"
                            />
                            <img
                                className="imgNextBlocks"
                                id="inb4"
                                src={require("../../res/empty_piece.png")}
                                alt="next blocks"
                            />
                            <img
                                className="imgNextBlocks"
                                id="inb5"
                                src={require("../../res/empty_piece.png")}
                                alt="next blocks"
                            />
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }


    return (
        <div className="tetrisSinglePlayerPage">
            {startGame ?
            <RenderSinglePlayerGame/>
            :
            <RenderSinglePlayerMenu/>
            }
        </div>
    );
}

export default Singleplayer;
