// [Write a Tetris game in JavaScript](https://www.youtube.com/watch?v=H2aW5V46khA)
// [Writing a 2-Player Tetris in JavaScript](https://www.youtube.com/watch?v=JJo5JpbuTTs)
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

import React, { useRef, useEffect, useState } from "react";

import homeIcon from "../../assets/icons/home.svg";
import pauseIcon from "../../assets/icons/pause.svg";

import img_empty_piece from "../../assets/game-textures/empty_piece.png";
import img_i_piece from "../../assets/game-textures/i_piece.png";
import img_j_piece from "../../assets/game-textures/j_piece.png";
import img_l_piece from "../../assets/game-textures/l_piece.png";
import img_o_piece from "../../assets/game-textures/o_piece.png";
import img_s_piece from "../../assets/game-textures/s_piece.png";
import img_t_piece from "../../assets/game-textures/t_piece.png";
import img_z_piece from "../../assets/game-textures/z_piece.png";

import img_i_aqua from "../../assets/game-textures/i-aqua.png";
import img_j_green from "../../assets/game-textures/j-green.png";
import img_l_blue from "../../assets/game-textures/l-blue.png";
import img_o_purple from "../../assets/game-textures/o-purple.png";
import img_s_gray from "../../assets/game-textures/s-gray.png";
import img_t_red from "../../assets/game-textures/t-red.png";
import img_z_yellow from "../../assets/game-textures/z-yellow.png";

function GameLogic(props: any) {

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

    useEffect(() => {
        const canvas: HTMLCanvasElement = canvasRef.current!;
        const context = canvas.getContext("2d")!;
        canvas.width = 400;
        canvas.height = 800;
        context.scale(canvas.width / 18, canvas.width / 12); // =40

        const canvasBH: HTMLCanvasElement = canvasBlockHolderRef.current!;
        const contextBH = canvasBH.getContext("2d")!;
        canvasBH.width = 60;
        canvasBH.height = 60;

        const canvasBN: HTMLCanvasElement = canvasBlockNextRef.current!;
        const contextBN = canvasBN.getContext("2d")!;
        canvasBN.width = 320;
        canvasBN.height = 80;
        const bnSpacing = 120;

        let frameCount = 0;
        let animationFrameId: any;


        const keysPressed = new Set();

        document.addEventListener("keydown", e => {
            keysPressed.add(e.code);
            if (e.code === "Escape") setPauseGame(false)
        });
        document.addEventListener("keyup", e => {
            keysPressed.delete(e.code);
            playerControls.rotateLeft[1] = true;
            playerControls.rotateRight[1] = true;
            playerControls.hardDrop[1] = true;
        });
        
        if (pauseGame) return

        const render = () => {
            // if (!connected) return

            frameCount++;                   

            if (keyIsDown > 0) keyIsDown--; //TODO make better mechanics

            if (frameCount >
                dropIntervals[player.level > 20 ? 20 : player.level]
            ) {
                playerDown();
                frameCount = 0;
            }

            if (frameCount % 10 === 0) playerKeyMove(keysPressed);

            draw(context, canvas);
            drawShadow();
            drawBlockHolder(contextBH, canvasBH);
            drawNextBlocks(contextBN, canvasBN, bnSpacing);

            animationFrameId = window.requestAnimationFrame(render);
        };

        playerReset();
        updateScore();
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    });

    const blockPieces = {
        bp0: img_empty_piece,
        bp1: img_i_piece,
        bp2: img_j_piece,
        bp3: img_l_piece,
        bp4: img_o_piece,
        bp5: img_s_piece,
        bp6: img_t_piece,
        bp7: img_z_piece,
    };

    const blockColors = {
        bc1: img_i_aqua,
        bc2: img_j_green,
        bc3: img_l_blue,
        bc4: img_o_purple,
        bc5: img_s_gray,
        bc6: img_t_red,
        bc7: img_z_yellow,
    };

    const blockImgs = {
        bi1: new Image(),
        bi2: new Image(),
        bi3: new Image(),
        bi4: new Image(),
        bi5: new Image(),
        bi6: new Image(),
        bi7: new Image(),
    };

    blockImgs.bi1.src = blockColors.bc1;
    blockImgs.bi2.src = blockColors.bc2;
    blockImgs.bi3.src = blockColors.bc3;
    blockImgs.bi4.src = blockColors.bc4;
    blockImgs.bi5.src = blockColors.bc5;
    blockImgs.bi6.src = blockColors.bc6;
    blockImgs.bi7.src = blockColors.bc7;

    const colorImgs: object = {
        1: blockImgs.bi1,
        2: blockImgs.bi2,
        3: blockImgs.bi3,
        4: blockImgs.bi4,
        5: blockImgs.bi5,
        6: blockImgs.bi6,
        7: blockImgs.bi7,
    };

    const colors: object = {
        1: "#00FFF8",
        2: "#00FF00",
        3: "#0000FF",
        4: "#F800FF",
        5: "#807f80",
        6: "#FF0000",
        7: "#FFF800",
    };


    const dropIntervals = {
        1: 130,
        2: 120,
        3: 110,
        4: 100,
        5: 90,
        6: 80,
        7: 70,
        8: 60,
        9: 50,
        10: 40,
        11: 35,
        12: 30,
        13: 25,
        14: 20,
        15: 15,
        16: 12,
        17: 9,
        18: 6,
        19: 3,
        20: 1,
    } as any;

    const playerControls = {
        pause: "Escape",
        moveLeft: "ArrowLeft", 
        moveRight: "ArrowRight",
        softDrop: "ArrowDown",
        hold: ["KeyC", true],
        hardDrop: ["Space", true],
        rotateLeft: ["KeyZ", true],
        rotateRight: ["ArrowUp", true],
    };

    const { mpMode, connected, multiplayerKey, setGameOver, 
        setStartGame, username, level, setScore, pauseGame, setPauseGame,
        ...rest } = props;
    
    const canvasRef = useRef();
    const canvasBlockHolderRef = useRef();
    const canvasBlockNextRef = useRef();



    let keyIsDown = 0;
    let keyIsDownDuration = 70;

    const pieces = "IJLOSTZ";

    // interface playerTypes {
    //     username: string,
    //     level: number,
    //     levelBreak: number,
    //     score: number,
    //     pos: object,
    //     matrix: number[][],
    //     followingMatrixes: string[],
    //     arena: number[][], // Array(20).fill(null).map(() => Array(12).fill(0));
    //     holdBlockType: string,
    //     holdBlock: number[][],
    //     holdBlockImg: string,
    //     useHolder: boolean,
    // }

    const [player, setPlayer] = useState({
        username: username as string,
        level: level as number,
        levelBreak: 2000,
        score: 0,
        lines: 0,
        pos: { x: 4, y: -6, sy: 19 },
        matrix: [] as number[][],
        followingMatrixes: [...Array(3)].map(
            (_) => pieces[(pieces.length * Math.random()) | 0]
        ),
        blockImgNext: [...Array(4)].map((_) => new Image()),
        currentBlock: null as any,
        arena: createMatrix(18, 24), // Array(20).fill(null).map(() => Array(12).fill(0));
        holdBlockType: "",
        holdBlock: [] as number[][],
        allowToSwitchBlock: true,
        // holdBlockImg: blockPieces.bp0,
    });

    const { arena } = player;

    type offsetInterface = {
        x: number;
        y: number;
        sy: number;
    };

    type playerInterface = {
        pos: offsetInterface;
        matrix: number[][];
    };

    

    function arenaSweep() {
        let rowCount = 1;

        outer: for (let y = arena.length - 1; y > 0; --y) {
            for (let x = 0; x < arena[y].length; ++x) {
                if (arena[y][x] === 0) {
                    continue outer;
                }
            }

            const row = arena.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            ++y;
            player.score += rowCount * 100;
            player.lines += rowCount * 1;
            rowCount *= 2;
        }
        updateScore();
    }

    function blockHolderChange(type: string): string {
        switch (type) {
            case "I":
                return blockPieces.bp1;
            case "J":
                return blockPieces.bp2;
            case "L":
                return blockPieces.bp3;
            case "O":
                return blockPieces.bp4;
            case "S":
                return blockPieces.bp5;
            case "T":
                return blockPieces.bp6;
            case "Z":
                return blockPieces.bp7;
            default:
                return blockPieces.bp0;
        }
    }

    function collide(arena: number[][], player: playerInterface, py: number) {
        const [m, px] = [player.matrix, player.pos.x];
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (
                    m[y][x] !== 0 &&
                    (arena[y + py] && arena[y + py][x + px]) !== 0
                ) {
                    return true;
                }
            }
        }

        return false;
    }

    function createMatrix(w: number, h: number): number[][] {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
    }

    function createPiece(type: string): number[][] {
        if (type === "I")
            return [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ];
        else if (type === "J")
            return [
                [0, 2, 0],
                [0, 2, 0],
                [2, 2, 0],
            ];
        else if (type === "L")
            return [
                [0, 3, 0],
                [0, 3, 0],
                [0, 3, 3],
            ];
        else if (type === "O")
            return [
                [4, 4],
                [4, 4],
            ];
        else if (type === "S")
            return [
                [0, 5, 5],
                [5, 5, 0],
                [0, 0, 0],
            ];
        else if (type === "T")
            return [
                [0, 6, 0],
                [6, 6, 6],
                [0, 0, 0],
            ];
        else if (type === "Z")
            return [
                [7, 7, 0],
                [0, 7, 7],
                [0, 0, 0],
            ];
        else return createMatrix(3, 3);
    }

    // async function createRelay(player: playerTypes, connected: boolean,
    //     multiplayerKey: string, mpMode: string) {

    //     const { username, level, score, pos, arena, ...rest } = player!;

    //     try {
    //         await setDoc(doc(firestore, "connections", multiplayerKey), {
    //             [mpMode]: {
    //                 username: username,
    //                 level: level,
    //                 score: score,
    //                 pos: pos,
    //                 arena: arena.flat(1),
    //                 connected: connected,
    //                 multiplayerKey: multiplayerKey,
    //                 createdAt: Timestamp.fromDate(new Date()),
    //             },
    //         }, {
    //             merge: true
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }

    //     console.log("data written");
    // }

    function draw(context: any, canvas: any) {

        function drawMatrix(
            matrix: number[][],
            context: any,
            offset: offsetInterface
        ): void {
            matrix.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        context.globalAlpha = 1;
                        context.shadowColor = Object(colors)[value];
                        context.shadowBlur = 10;
                        context.drawImage(
                            Object(colorImgs)[value],
                            x + offset.x,
                            y + offset.y,
                            1,
                            1
                        );
                        context.globalAlpha = 0.15;
                        context.drawImage(
                            Object(colorImgs)[value],
                            x + offset.x,
                            y + offset.sy,
                            1,
                            1
                        );
                    }
                });
            });
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        drawMatrix(arena, context, { x: 0, y: 0, sy: 0 });
        drawMatrix(player.matrix, context, player.pos);
    }

    function drawBlockHolder(context: any, canvas: any) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(player.blockImgNext[0], 0, 0, canvas.width, canvas.width);
    }

    function drawNextBlocks(context: any, canvas: any, bnS: number) {
        const cw = canvas.height;

        player.blockImgNext[1].src = blockHolderChange(player.followingMatrixes[0]);
        player.blockImgNext[2].src = blockHolderChange(player.followingMatrixes[1]);
        player.blockImgNext[3].src = blockHolderChange(player.followingMatrixes[2]);


        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(player.blockImgNext[1], 0, 0, cw, cw);
        context.drawImage(player.blockImgNext[2], bnS * 1, 0, cw, cw);
        context.drawImage(player.blockImgNext[3], bnS * 2, 0, cw, cw);
    }

    function drawShadow() {
        // TODO bug, the shadow can go under other pieces
        // const [m, px, py] = [player.matrix, player.pos.x, player.pos.sy];
        // for (let y = 0; y < m.length; ++y) {
        //     for (let x = 0; x < m[y].length; ++x) {
        //         if (
        //             m[y][x] !== 0 &&
        //             (arena[y + py] && arena[y + py][x + px]) !== 0
        //         ) {
        //             return true;
        //         }
        //     }
        // }
        // console.log(
        //     player.pos.x+2, 
        //     arena
        // );
        // for (let i=0; i<arena.length; i++) {
        //     if (
        //         arena[i][player.pos.y] === 0 
        //         &&
        //         player.pos.sy <= 20
        //         // ||
        //         // !collide(arena, player, player.pos.sy+1)
        //         )
        //         {
        //             player.pos.sy++
        //     }    
        // else if (collide(arena, player, player.pos.sy)) 
        //         player.pos.sy--
            
        // }<
        // console.log(
        //     arena,
        //     arena[player.pos.sy][player.pos.sy<18?player.pos.sy:17],
        // )

        if (collide(arena, player, player.pos.sy)) player.pos.sy--;
        else if (!collide(arena, player, player.pos.sy + 1)) player.pos.sy++; 
    }

    function merge(arena: number[][], player: playerInterface) {
        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    // console.log("merge: ", y, x);
                    arena[y + player.pos.y][x + player.pos.x] = value;
                }
            });
        });
    }

    function playerDown() {
        player.pos.y++;

        if (collide(arena, player, player.pos.y)) {
            player.pos.y--;
            if (keyIsDown) return; // if key is down, merge won't happen
            merge(arena, player);
            playerReset();
            arenaSweep();
        }

        keyIsDown = keyIsDownDuration;
    }

    function playerDrop() {
        while (!collide(arena, player, player.pos.y)) {
            player.pos.y++;
            player.score += 2;
        }
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();

        playerControls.hardDrop[1] = false;
    }

    function PlayerHold() {
        player.blockImgNext[0].src = blockHolderChange(player.holdBlockType);

        if (!player.holdBlock.length) {
            player.holdBlock = player.matrix;
            playerReset();
        } else
            [player.holdBlock, player.matrix] = [
                player.matrix,
                player.holdBlock,
            ];

        [player.pos.x, player.pos.y] = [8, 0];

        playerControls.hold[1] = false;
    }

    function playerKeyMove(keysPressed: any) {
        if (keysPressed.has(playerControls.pause)) 
            if (pauseGame) {
                player.allowToSwitchBlock = true
                setPauseGame(false); 
            } else {
                player.allowToSwitchBlock = false
                setPauseGame(true);
            }
            
        if (keysPressed.has(playerControls.moveLeft)) playerMove(-1);
        if (keysPressed.has(playerControls.moveRight)) playerMove(1);
        if (keysPressed.has(playerControls.softDrop)) {
            player.score++;
            playerDown();
        }
        if (keysPressed.has(playerControls.hardDrop[0]) && 
            playerControls.hardDrop[1]) playerDrop(); 
        if (keysPressed.has(playerControls.rotateLeft[0]) && 
            playerControls.rotateLeft[1]) playerRotate(-1);
        if (keysPressed.has(playerControls.rotateRight[0]) && 
            playerControls.rotateRight[1]) playerRotate(1);
        if (keysPressed.has(playerControls.hold[0]) && 
            playerControls.hold[1]) PlayerHold();
    };

    function playerMove(dir: number) {
        player.pos.x += dir;
        if (collide(arena, player, player.pos.y)) {
            player.pos.x -= dir;
        }

        keyIsDown = keyIsDownDuration;
    }

    function playerReset() {
        // console.log(pauseGame)
        // if (pauseGame) return

        //TODO BUG

        const randomPiece = pieces[(pieces.length * Math.random()) | 0];
        player.matrix = createPiece(player.followingMatrixes[0]);
        player.holdBlockType = player.followingMatrixes[0];
        player.followingMatrixes.shift();
        player.followingMatrixes.push(randomPiece);
        player.pos.y = 0;
        player.pos.x =
            ((arena[0].length / 2) | 0) - ((player.matrix[0].length / 2) | 0);
        playerControls.hold[1] = true;

        // if (multiplayerKey) 
        //         createRelay(player, connected, multiplayerKey, mpMode);

        if (collide(arena, player, player.pos.y)) {
            setScore(player.score);
            arena.forEach((row) => row.fill(0));
            player.score = 0;
            player.level = 1;
            keyIsDownDuration = 70;
            updateScore();
            setGameOver(true);
        }
    }

    function playerRotate(dir: number) {
        const pos = player.pos.x;
        let offset = 1;
        rotate(player.matrix, dir);
        while (collide(arena, player, player.pos.y)) {
            player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));

            if (offset > player.matrix[0].length) {
                rotate(player.matrix, -dir);
                player.pos.x = pos;
                return;
            }
        }

        playerControls.rotateRight[1] = false;
        playerControls.rotateLeft[1] = false;
        keyIsDown = keyIsDownDuration;
    }

    function rotate(matrix: number[][], dir: number) {
        for (let y = 0; y < matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
            }
        }

        if (dir > 0) matrix.forEach((row) => row.reverse());
        else matrix.reverse();
    }

    function updateScore() {
        const { score, level, levelBreak, lines } = player;

        if (level < lines/10) {
            player.level = Math.floor(lines/10);
        }

        if (document.getElementById("gameScore") !== null) {
            document.getElementById("gameScore")!
                .innerText = player.score.toString();
            document.getElementById("gameLevel")!
                .innerText = player.level.toString();
            document.getElementById("gameLines")!
                .innerText = player.lines.toString();
        }
    }

    return (
        <div className="game">
            <div className="inGameInfoSegment">
                <div className="blockHolder">
                    <canvas
                        id="canvasBlockHolder"
                        ref={canvasBlockHolderRef}
                        {...rest}
                    ></canvas>
                </div>

                <div>
                    <h4 id="gameLevelText" className="gameInfo">
                        LEVEL: {" "}
                        <span id="gameLevel"></span>
                    </h4>
                    <h4 id="gameScoreText" className="gameInfo">
                        SCORE: {" "}
                        <span id="gameScore"></span>
                    </h4>
                    <h4 id="gameLinesText" className="gameInfo">
                        LINES: {" "}
                        <span id="gameLines"></span>
                    </h4>
                </div>

                <h2 className="gameInfo">{player.username}</h2>

                <img src={pauseIcon} className="gameIcon" alt="pause"
                    onClick={() => pauseGame ? setPauseGame(false) : setPauseGame(true)} />
                
                <img src={homeIcon} className="gameIcon"  
                    alt="home" 
                    onClick={()=> {
                        setStartGame(false); 
                        setPauseGame(false)
                    }} 
                />
            </div>

            {/* <PauseGame /> */}

            <canvas id="canvasPlay" ref={canvasRef} {...rest}>
                Your browser does not support the HTML canvas tag.
            </canvas>

            <div className="nextBlocks">
                <canvas
                    id={"canvasBlockNext"}
                    ref={canvasBlockNextRef}
                    {...rest}
                ></canvas>
            </div>
        </div>
    );
}

export default GameLogic;
