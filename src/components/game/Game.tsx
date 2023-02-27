import React, { useEffect, useRef, useState } from "react";
import { LocalDatabase, updateCookies } from "../../database/database-config";

import GameLogic from "./GameLogic";
import MultiplayerGame from "./MultiplayerGame";

import copy from "../../assets/icons/copy.svg";
import paste from "../../assets/icons/paste.svg";


function Game() {
    const [gameOver, setGameOver] = useState(false);
    const [startGame, setStartGame] = useState(false);
    const [username, setUsername] = useState("");
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [connected, setConnected] = useState(true);
    const [multiplayerKey, setMultiplayerKey] = useState("");
    const [mpMode, setMpMode] = useState("");


    // function generateKey() {
    //     function dec2hex (dec:any) {
    //         return dec.toString(16).padStart(2, "0");
    //     }
        
    //     function generateId (len:any = 0) {
    //         var arr = new Uint8Array((len || 40) / 2);
    //         window.crypto.getRandomValues(arr);
    //         return Array.from(arr, dec2hex).join('');
    //     }
          
    //     setMultiplayerKey(generateId(10));
    // }

    return (
        <div className="gameContent">

            {startGame ?
                <React.Fragment>

                {gameOver ?
                    <GameOverMenu 
                        username={username}
                        score={score}
                        setGameOver={setGameOver} 
                        setStartGame={setStartGame}
                    />
                :
                    <React.Fragment>

                    {/* {connected ?
                    "": 
                        <div className='awaitingPlayer'>
                            <h1>Waiting...</h1>
                            <h3>key: {multiplayerKey}</h3>
                        </div>   
                    }

                    {multiplayerKey ?
                        <MultiplayerGame 
                            setConnected={setConnected}
                            connected={connected}
                            multiplayerKey={multiplayerKey}
                            mpMode={mpMode}
                        /> 
                    : ""
                    } */}

                    <GameLogic
                        level={level}
                        setScore={setScore}
                        username={username}
                        setGameOver={setGameOver}
                        setStartGame={setStartGame}
                        connected={connected}
                        multiplayerKey={multiplayerKey}
                        mpMode={mpMode} 
                    />

                    </React.Fragment>
                }

                </React.Fragment>
            :
                <div id="gameMenu" className="gameMenu">
                    <input
                        id="usernameInputS"
                        className="menuUsername"
                        maxLength={5}
                        style={{
                            color: /^[a-zA-z]{5}$/.test(username)
                                ? "black"
                                : "red",
                        }}
                        onChange={(e) =>
                            setUsername(e.target.value.toUpperCase())
                        }
                        type="text"
                        placeholder="your username"
                    />

                    <button
                        id="levelBtn"
                        className="menuLevel"
                        onClick={(e) => {
                            e.preventDefault();
                            if (level === 20) setLevel(1);
                            else setLevel(level === 1 ? level + 1 : level + 2);
                        }}
                    >
                        {"LEVEL: " + level}
                    </button>

                    {/* <div className="multiplayerMode">
                        {mpMode == "host" ?
                            <React.Fragment>
                            <input type="text" placeholder="key"
                                value={multiplayerKey}
                                readOnly 
                            />
                            <img src={copy} alt="copy"
                                onClick={() =>navigator.clipboard.writeText(multiplayerKey)} 
                            />
                            </React.Fragment>
                        :
                            <React.Fragment>
                            <input type="text" placeholder="key"
                                value={multiplayerKey}
                                onChange={e=>setMultiplayerKey(e.target.value)} 
                            />
                            <img src={paste} alt="paste"
                                onClick={() =>
                                    navigator.clipboard.readText()
                                        .then(text => setMultiplayerKey(text))
                                } 
                            />
                            </React.Fragment>
                        }
                        
                        <div>
                            <button onClick={()=> {
                                generateKey();
                                setMpMode("host");
                            }}>
                                create room
                            </button>

                            <button onClick={()=> {
                                setMultiplayerKey("");
                                setMpMode("guest");
                            }}>
                                join room
                            </button>
                        </div>
                    </div> */}

                    <button
                        id="startGameBtnS"
                        className="menuStartGame"
                        onClick={(e) => {
                            e.preventDefault();
                            if (/^[a-zA-z]{5}$/.test(username)) {
                                setStartGame(true);
                                setGameOver(false);
                            } else
                                alert(
                                    "Username has to contain only letters and be 5 characters long!"
                                );
                        }}
                    >
                        START GAME
                    </button>

                    <div id="LocalHighScores" className="scores">
                        <h2 className="highScoresTitle">
                            LOCAL HIGH SCORES
                        </h2>
                        {/* <LocalDatabase  
                            username={username}
                            score={score}
                        /> */}
                    </div>
                </div>
                }
        </div>
    );
}

function GameOverMenu(props: any) {
    const { username, score, setGameOver, setStartGame, setCookies } = props;

    // updateCookies(username, score);

    return (
        <div className="gameOverMenu">
            <h1>Game Over</h1>
            <p>Score: {score}</p>
            <h2 onClick={() => {
                setGameOver(false);
            }}>Restart</h2>
            <h2 onClick={() => {
                setStartGame(false); 
                setGameOver(false);
            }} >Menu</h2>
        </div>
    );
}

export default Game;
