import React, { useEffect, useRef, useState } from "react";
import "../styles/AppContent.css";
import { GlobalDatabase } from "../config/database-config";

export function HomeContent() {
    return (
        <div className="contentContainer">
            <GlobalDatabase />

            <div className="contentParagraphs">
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

export function Contact() {
    return <div>Contact</div>;
}

export function Login() {
    return <div>Login</div>;
}

export function Register() {
    return <div>Register</div>;
}

export function Support() {
    return <div>Support</div>;
}
