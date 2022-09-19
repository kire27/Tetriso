import React, { useEffect, useState } from "react";
import "../../styles/Menu.css";
import SpGame from "./spGame";
import { LocalDatabase } from "../../config/database-config";

function Singleplayer() {

    const [gameOver, setGameOver] = useState(false);
    const [startGame, setStartGame] = useState(false);
    const [username, setUsername] = useState("");    
    const [level, setLevel] = useState(1);
    

    function GameOverMenu() {
        return (
            <div className="gameOverMenu">
                <h1>Game Over</h1>
                <h1 onClick={() => setGameOver(false)}>Restart</h1>
                <h1 onClick={() => setGameOver(false)}>Menu</h1>
            </div>
        );
    }


    return (
        <div id="gC" className="gameMenu">
            {startGame ?
                <SpGame />
            :
                <form>
                    <h2 className="menuTitle">Single Player</h2>

                    <input
                        id="usernameInputS"
                        className="menuUsername"
                        maxLength={5}
                        style={{color: /^[a-zA-z]+$/.test(username)?"black":"red"}}
                        onChange={e => setUsername(e.target.value)}
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
                            if(/^[a-zA-z]+$/.test(username)) setStartGame(true);
                            else alert("Username has to contain only letters");
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
