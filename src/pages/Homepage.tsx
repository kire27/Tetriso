import { useState } from "react";
import { Link } from "react-router-dom";
import * as style from '@dicebear/bottts-neutral';

import { GlobalDatabase } from "../database/database-config";
import Game from "../components/game/Game";

// import { createAvatar } from '@dicebear/core';
// import { botttsNeutral } from '@dicebear/collection';


function Homepage() {

    // const avatar = createAvatar(botttsNeutral, {
    //     seed: "dsg",
    //     size: 30,
    //     radius: 50
    // }).toDataUriSync();

    const [startGame, setStartGame] = useState(false);

    return (
        <div className="container">
            <div id="nL" className="title">
                <Link to="/" style={{ textDecoration: "none" }} 
                    onClick={() => {useForceUpdate()}}>

                    <div className="glitch" data-text="TETRISO">
                        TETRISO
                    </div>
                </Link>

                <div className="underTitle">
                    <a href="#gameMenu" className="playButton">
                        PLAY
                    </a>
                    <a href="#contentPar" className="infoButton">
                        Info
                    </a>
                </div>
            </div>

            <Game />

            <div id="contentPar" className="contentParagraphs">
                {/* <div className="firstParagraph">
                    <GlobalDatabase />

                    <div>
                        <img src={avatar} className="userAvatar" alt="" />

                    </div>
                </div> */}
                
                <div className="contentParagraph">
                    <h1>ABOUT TETRISO</h1>
                    <p>
                        Tetris® is the addictive puzzle game that started it
                        all, embracing our universal desire to create order out
                        of chaos. The Tetris game was created by Alexey Pajitnov
                        in 1984—the product of Alexey’s computer programming
                        experience and his love of puzzles. In the decades to
                        follow, Tetris became one of the most successful and
                        recognizable video games, appearing on nearly every
                        gaming platform available. This page is the official
                        destination for free online single-player Tetris. Click
                        PLAY to start playing one of the world’s most popular
                        puzzle games now!
                    </p>
                </div>

                <div className="contentParagraph">
                    <h1>OBJECTIVE</h1>
                    <p>
                        The goal of Tetris is to score as many points as
                        possible by clearing horizontal lines of Blocks. The
                        player must rotate, move, and drop the falling
                        Tetriminos inside the Matrix (playing field). Lines are
                        cleared when they are filled with Blocks and have no
                        empty spaces. As lines are cleared, the level increases
                        and Tetriminos fall faster, making the game
                        progressively more challenging. If the Blocks land above
                        the top of the playing field, the game is over.
                    </p>
                </div>

                <div className="contentParagraph">
                    <h1>GENERAL GAMEPLAY INFO</h1>
                    <p>
                        <b>GOAL</b> – Put your organizational skills and
                        endurance to the test by clearing as many lines as
                        possible.
                    </p>
                    <p>
                        <b>CLEAR LINES</b> – Maneuver the falling Tetriminos to
                        fit them together within the Matrix. To clear a line,
                        fill every square within a single row.
                    </p>
                    <p>
                        <b>SCORE POINTS</b> – Earn points by clearing lines.
                        Clear multiple lines at once to increase your scoring
                        opportunities.
                    </p>
                    <p>
                        <b>GHOST PIECE</b> – Use the Ghost Piece to determine
                        the best fit for the falling Tetrimino. This helpful
                        guide appears directly below the falling Tetrimino and
                        displays possible placements.{" "}
                    </p>
                    <p>
                        <b>NEXT QUEUE</b> – Preview the upcoming Tetrimino in
                        the Next Queue to plan ahead and increase your scoring
                        opportunities.
                    </p>
                    <p>
                        <b>HOLD QUEUE</b> – Store a falling Tetrimino in the
                        Hold Queue for later use.
                    </p>
                    <p>
                        <b>GAME OVER</b> – Stack the Tetriminos too high and the
                        game is over!
                    </p>
                </div>
            </div>
        </div>
    );
}

function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

export default Homepage;