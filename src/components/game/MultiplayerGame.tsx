import React, { useEffect, useRef, useState } from 'react';

import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { firestore } from "../../database/firebase-config";

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
import img_s_orange from "../../assets/game-textures/s-orange.png";
import img_t_red from "../../assets/game-textures/t-red.png";
import img_z_yellow from "../../assets/game-textures/z-yellow.png";


function MultiplayerGame(props: any) {

    const { connected, setConnected, mpMode, multiplayerKey } = props;

    const [player, setPlayer] = useState({
        connected: true,
        username: "name",
        level: 1,
        score: 100,

        levelBreak: 200,
        pos: { x: 4, y: -6, sy: 19 },
        // matrix: createPiece(""),
        // followingMatrixes: [...Array(4)].map(
        //     (_) => pieces[(pieces.length * Math.random()) | 0]
        // ),
        // arena: createMatrix(18, 24), // Array(20).fill(null).map(() => Array(12).fill(0));
        // holdBlockType: "",
        // holdBlock: [] as number[][],
        // holdBlockImg: blockPieces.bp0,
        useHolder: true,
    });

    const [count, setCount] = useState(0);

    const [data, setData]: any = useState();

    useEffect(() => {

        // onValue(starCountRef, (snapshot) => {
        //     const data = snapshot.val();
        //     console.log(
        //         data
        //     ); 
        // });

        // onSnapshot(collection(firestore, "connections"), (snapshot) => {
        //     setData(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
        // })
        // console.log(data);

        if (!player.connected) {
            const timer = setTimeout(() => {
                setCount(count+1);
                setConnected(player.connected);


                // getData(mpMode);
            }, 4000);
            
            return () => clearTimeout(timer);
        } else {
            setConnected(player.connected);
        }

    }, [count]);

    // async function getData(mpMode: string) {
    //     const relayData = await getDoc(doc(firestore, "connections", multiplayerKey));

    //     if (relayData.exists()) {
    //         mpMode === "host" ? 
    //             setPlayer(relayData.data().guest)
    //         :
    //             setPlayer(relayData.data().host)
    //     }    

    //     console.log(
    //         relayData.data()!.host
    //     );
    // }

    // const q = query(collection(firestore, "connections"), 
    //     where(multiplayerKey, "==", `${mpMode=="host"?"guest":"host"}`));

    // console.log(q);
        
    // onSnapshot(q, (snapshot) => {
    //     snapshot.docChanges().forEach((change) => {
    //         console.log(change);
    //         if (change.type === "added") {
    //             console.log("New city: ", change.doc.data());
    //         }
    //         if (change.type === "modified") {
    //             console.log("Modified city: ", change.doc.data());
    //         }
    //         if (change.type === "removed") {
    //             console.log("Removed city: ", change.doc.data());
    //         }
    //     });
    // });


    const unsub = onSnapshot(doc(firestore, "connections", 
        multiplayerKey), (doc) => {
        console.log("Current data: ", doc.data());
    });
    


   

    // GAME

    // useEffect(() => {
    //     const canvas: HTMLCanvasElement = canvasRef.current!;
    //     const context = canvas.getContext("2d")!;
    //     canvas.width = 400;
    //     canvas.height = 800;
    //     context.scale(canvas.width / 18, canvas.width / 12); // =40

    //     let frameCount = 0;
    //     let animationFrameId: any;

    //     const render = () => {
    //         if (!connected) return 

    //         frameCount++;

    //         if (keyIsDown > 0) keyIsDown--; //TODO make better mechanics

    //         if (
    //             frameCount >
    //             dropIntervals[player.level > 20 ? 20 : player.level]
    //         ) {
    //             playerDown();
    //             frameCount = 0;
    //         }

    //         draw(context, canvas);
    //         drawShadow();
    //         drawBlockHolder(contextBH, canvasBH);
    //         drawNextBlocks(contextBN, canvasBN, bnSpacing);

    //         animationFrameId = window.requestAnimationFrame(render);
    //     };

    //     playerReset();
    //     updateScore();
    //     render();

    //     return () => {
    //         window.cancelAnimationFrame(animationFrameId);
    //     };
    // });

    const canvasRef = useRef();














    // TODO make a simple copy game. need to copy blocks according to 
    // arena which will be fetched from server 


    return (
        <div className="gameTwo">
            <div className="inGameInfoSegmentTwo">
                <h4 id="gameLevelText" className="">
                    LEVEL: {" "}
                    <span id="gameLevelTwo"></span>
                </h4>
                <h4 id="gameScoreText" className="">
                    SCORE: {" "}
                    <span id="gameScoreTwo"></span>
                </h4>

                <h4 className="gameInfo">
                    {/* {player.username} */}
                </h4>
            </div>

            <canvas id="canvasPlayTwo">
                Your browser does not support the HTML canvas tag.
            </canvas>
        </div>
    );
}

export default MultiplayerGame;
