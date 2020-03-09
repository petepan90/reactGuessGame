import React from "react";
import '../Styles/Header.css';

function Header(props) {
    console.log('header props', props)
    return (

        <div className="wrapper">
            <h1 className="title">Movie click Game</h1>
            <h3 className="scoreSummary">Click on a movie poster to gain points! click on the same one twice and you lose</h3>
            <h3 className="scoreSummary card-header">Correct Guesses:
                {props.currentScore}
                <br></br>Best Score:
                {props.topScore}
            </h3>
        </div>
    )
}
export default Header;


