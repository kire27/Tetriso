import React from "react";
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


// export function LocalDatabase(props: any): JSX.Element {
     
//     // const { username, score } = props;


//     const localDataTable: object[] = 
//         JSON.parse(localStorage.getItem("localScore")!) || ""

//     // if (!localDataTable) return <div></div>

//     // console.log(localDataTable);  

//     // if (localDataTable && cookies) {
//     //     const id = localDataTable.length;
        
//     //     // localDataTable[id] = {username: score};
//     //     localDataTable.sort((a:any, b:any) => b.score - a.score);

//     //     if (localDataTable.length > 10) localDataTable.pop();

//     //     // localStorage.setItem("pokemon", JSON.stringify(localDataTable));
//     //     console.log("local overridden");
//     // } 
//     // else if (score !== 0 && cookies) {
//     //     localStorage.setItem("pokemon", JSON.stringify(
//     //         [{"username": username, "score": score}]
//     //     ));
//     // }

//     // const { data, error, isLoading } = useSWR('/api/user', fetcher)

//     // if (error) return <div>failed to load</div>
//     // if (isLoading) return <div>loading...</div>
//     // return <div>hello {data.name}!</div>


//     // localStorage.setItem("pokemon", JSON.stringify(
//     //     [
//     //         { username: "alex", score: 200 },
//     //         { username: "miss", score: 800 },
//     //         { username: "john", score: 500 },
//     //         { username: "alex", score: 200 },
//     //         { username: "miss", score: 800 },
//     //         { username: "john", score: 500 },
//     //         { username: "alex", score: 200 },
//     //         { username: "miss", score: 800 },
//     //         { username: "alex", score: 200 },
//     //         { username: "miss", score: 800 },
//     //     ]
//     // ));
    
    
//     // [
//         // { username: "alex", score: 200 },
//         // { username: "miss", score: 800 },
//         // { username: "john", score: 500 },
//         // { username: "alex", score: 200 },
//         // { username: "miss", score: 800 },
//         // { username: "john", score: 500 },
//         // { username: "alex", score: 200 },
//         // { username: "miss", score: 800 },
//         // { username: "alex", score: 200 },
//         // { username: "miss", score: 800 },
//     // ].sort((a, b) => b.score - a.score);
//     //TODO get only first 10

//     {/* <button onClick={() => localStorage.setItem("pokemon", JSON.stringify(localDataTable))}>

//     </button> */}

//     return (
//         <React.Fragment>
//             {true && localDataTable.map((value: any, id: any, array: any) => (
//                 value ?
//                     <div className="userScoresTable" key={id} >
//                         <div className="scoreTableOne">{id + 1}</div>
//                         <div className="scoreTableTwo">{value.username}</div>
//                         <div className="scoreTableThree">{value.score}</div>
//                     </div>
//                 : <div></div> //TODO in production built. Probably this div section just to return JSX.element creates the error -> restyle the divs
//             ))}
//         </React.Fragment>
//     );
// }

// export function updateCookies(username: string, score: number) {

//     const localDataTable: object[] = JSON.parse(localStorage.getItem("localScore")!)

//     if (localDataTable && score !== 0) {
//         const id = localDataTable.length;

//         localDataTable[id] = {"username": username, "score": score};
//         localDataTable.sort((a:any, b:any) => b.score - a.score);

//         if (localDataTable.length > 10) localDataTable.pop();

//         localStorage.setItem("localScore", JSON.stringify(localDataTable));
//     } 
//     else if (!localDataTable && score !== 0) {
//         localStorage.setItem("localScore", JSON.stringify(
//             [{"username": username, "score": score}]
//         ));
//     }
// }
