import React from 'react';
import './styles/App.css';

function App() {

  return (
    /*<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <link rel="stylesheet" href="../css/style.css">
    
        <title>Document</title>
    
        <style>
            html {
                height: 100%;
            }
        </style>
    </head>*/
    
    <div className="tetrisSinglePlayerPage">
    
        <div className="game">
            <div className="gamePlaygroundPart1">
                <div className="blockHolder">
                    <img id="imgBlockHolder" src="../res/empty_piece.png" alt="holder"/>
                </div>
    
                <div className="gameInfo">
                    <h4 id="gameScoreText" className="gameInfoHeader">score:</h4>
                    <div id="gameScore" className="gameData"></div>
                    <br/>
                    <h4 id="gameLevelText" className="gameInfoHeader">level:</h4>
                    <div id="gameLevel" className="gameData"></div>
                    <br/>
                </div>
    
                <div className="miniMenu">
                    <h2 id="username" className="username"> username </h2>
                    <img src="../res/icons/options.png" className="miniMenuIcons" alt="options"/>
                    <img src="../res/icons/question-mark.png" className="miniMenuIcons" alt="help"/>
                </div>
    
            </div>
    
            <canvas id="canvasPlay"></canvas>
    
            <div className="nextBlocks">
                <img className="imgNextBlocks" id="inb1" src="../res/empty_piece.png" alt="next blocks"/>
                <img className="imgNextBlocks" id="inb2" src="../res/empty_piece.png" alt="next blocks"/>
                <img className="imgNextBlocks" id="inb3" src="../res/empty_piece.png" alt="next blocks"/>
                <img className="imgNextBlocks" id="inb4" src="../res/empty_piece.png" alt="next blocks"/>
                <img className="imgNextBlocks" id="inb5" src="../res/empty_piece.png" alt="next blocks"/>
            </div>
        </div>
    
        <script type="text/javascript" src="../build/tetrisSP.js"></script>
     
        <script>
            {
                /*
                window.addEventListener("keydown", function(e) {
                    
                    if (e.code === "Space"|
                        e.code === "ArrowUp"|
                        e.code === "ArrowDown"|
                        e.code === "ArrowLeft"|
                        e.code === "ArrowRight") {
                        e.preventDefault();
                    }
                }, false);
                */
            }
        </script>
    
    </div>
  );
}

export default App;
