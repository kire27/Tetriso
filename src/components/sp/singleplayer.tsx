import React, { useState } from "react";
import "../../styles/Menu.css";
import SpGame from "./spGame";
import { LocalDatabase } from "../../config/database-config";
import { Link } from "react-router-dom";

function Singleplayer() {

    const [gameOver, setGameOver] = useState(false);
    const [startGame, setStartGame] = useState(false);
    const [username, setUsername] = useState("");    
    const [level, setLevel] = useState(1);
    

    function GameOverMenu() {
        return (
            <div className="gameOverMenu">
                <div className="gameOverHeaders">
                    <h1>Game Over</h1>
                    <h2 onClick={() => setGameOver(false)}>Restart</h2>
                    <h2 onClick={() => setStartGame(false)}> Menu </h2>
                </div>
            </div>
        );
    }

    return (
        <div id="gC" className="gameMenu">
            { startGame ?
                <div>
                    { gameOver ? 
                        <GameOverMenu />
                    : 
                        <SpGame level={level} username={username} setGameOver={setGameOver} />
                    }
                </div>
            :
                <form>
                    <h2 className="menuTitle">Single Player</h2>

                    <input
                        id="usernameInputS"
                        className="menuUsername"
                        maxLength={5}
                        style={{color: /^[a-zA-z]{5}$/.test(username)?"black":"red"}}
                        onChange={e => setUsername((e.target.value).toUpperCase())}
                        type="text"
                        placeholder="your username"
                    />

                    <button 
                        id="levelBtn" 
                        className="menuLevel"
                        onClick={e => {
                            e.preventDefault();
                            if (level===20) setLevel(1); 
                            else setLevel(level===1?level+1:level+2);
                        }}
                    >
                        {"LEVEL: "+level}
                    </button>

                    <button
                        id="startGameBtnS"
                        className="menuStartGame"
                        onClick={e => {
                            e.preventDefault();
                            if(/^[a-zA-z]{5}$/.test(username)) {
                                setStartGame(true);
                                setGameOver(false);
                            }
                            else alert("Username has to contain only letters and be 5 characters long!");
                        }}
                    >
                        START GAME
                    </button>

                    <LocalDatabase />
                </form>
            } 
        </div>
    );
}

export default Singleplayer;
