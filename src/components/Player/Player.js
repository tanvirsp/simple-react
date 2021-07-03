import React from 'react';
import './Player.css'

const Player = (props) => {
    const {name, age, image, salary, style, team, role } = props.player;
    
    return (
        <div className="player-details">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>Team : {team}</p>
            <p>Age: {age}</p>
            <p>Batting Style: {style}</p>
            <p>Salary: {salary}</p>
            <h5 className="category">{role}</h5>
            <button className="btn btn-outline-success px-5 py-2 mt-4" onClick={()=> props.handleSelectPlayer(props.player)}>SELECT</button>
        </div>
    );
};

export default Player;