import React from "react"


function GlobalHighScores(props:any) {
    const globalDataTable = props.globalDataTable;

    return (
        <div id="globalHighScores" className="highScores">
            <h2 className="highScoresTitle">GLOBAL HIGH SCORES: TOP 100</h2>
            {/* <hr className="highScoresHr"/> */}
            {globalDataTable.map((value:any, id:any, array:any) => (
                <div className={"userScoresTable "+(id%2?"even":"odd")} key={id}>
                    <div className="scoreTableOne">{id+1}</div>
                    <div className="scoreTableTwo">{value.username}</div>
                    <div className="scoreTableThree">{value.score}</div>
                </div>
            ))
            
            }
        </div>
    );
}

export function Database() {
    const globalDataTable = [
        { username: "alex", score: 200},
        { username: "miss", score: 800},
        { username: "john", score: 500},
        { username: "alex", score: 200},
        { username: "miss", score: 800},
        { username: "john", score: 500},
        { username: "alex", score: 200},
        { username: "miss", score: 800},
        { username: "john", score: 500},
        { username: "alex", score: 200},
        { username: "miss", score: 800},
        { username: "john", score: 500},
        { username: "alex", score: 200},
        { username: "miss", score: 800},
        { username: "john", score: 500},
        { username: "alex", score: 200},
        { username: "miss", score: 800},
        { username: "john", score: 500},
    ].sort((a,b) => a.score - b.score);
    //TODO get only first 100
    
    return (
        <React.Fragment>
            <GlobalHighScores globalDataTable={globalDataTable}/>
        </React.Fragment>
    );
}

