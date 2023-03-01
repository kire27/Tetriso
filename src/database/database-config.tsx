import React, { useEffect, useState } from "react";
import useSWR from 'swr';

// export function GlobalDatabase() {
//     const globalDataTable = [
//         { username: "alex", score: 200 },
//         { username: "miss", score: 800 },
//         { username: "john", score: 500 },
//         { username: "alex", score: 200 },
//         { username: "miss", score: 800 },
//         { username: "john", score: 500 },
//         { username: "alex", score: 200 },
//         { username: "miss", score: 800 },
//         { username: "john", score: 500 },
//         { username: "alex", score: 200 },
//         { username: "miss", score: 800 },
//         { username: "john", score: 500 },
//         { username: "alex", score: 200 },
//         { username: "miss", score: 800 },
//         { username: "john", score: 500 },
//         { username: "alex", score: 200 },
//         { username: "miss", score: 800 },
//         { username: "john", score: 500 },
//     ].sort((a, b) => b.score - a.score);

//     return (
//         <div id="highScores" className="scores">
//             <h2 className="highScoresTitle">
//                 GLOBAL HIGH SCORES: TOP 100
//             </h2>

//             {globalDataTable.map((value: any, id: any, array: any) => (
//                 <div className={"userScoresTable"} key={id} >
//                     <div className="scoreTableOne">{id + 1}</div>
//                     <div className="scoreTableTwo">{value.username}</div>
//                     <div className="scoreTableThree">{value.score}</div>
//                 </div>
//             ))}
//         </div>
//     );
// }


export function LocalDatabase(props: any): JSX.Element {
    const { cookies } = props;

    return (
        <React.Fragment>
            {cookies && cookies.map((value: any, id: any, array: any) => (
                value ?
                    <div className="userScoresTable" key={id} >
                        <div className="scoreTableOne">{id + 1}</div>
                        <div className="scoreTableTwo">{value.username}</div>
                        <div className="scoreTableThree">{value.score}</div>
                    </div>
                : <div></div>
            ))}
        </React.Fragment>
    );
}

export function updateCookies(username: string, score: number, 
    cookies: any, setCookies: any) 
    {

    if (cookies && score !== 0) {
        const cookie = [{"username": username, "score": score}, ...cookies]
            .sort((a:any, b:any) => b.score - a.score);

        if (cookie.length > 10) cookie.pop();

        setCookies(cookie)
        
        localStorage.setItem("localScore", JSON.stringify(cookie));        
    } 
    else if (!cookies && score !== 0) {
        setCookies([{"username": username, "score": score}]);

        localStorage.setItem("localScore", JSON.stringify(
            [{"username": username, "score": score}]
        ));
    }
}
