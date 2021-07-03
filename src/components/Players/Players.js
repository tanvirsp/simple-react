import React, { useEffect, useState } from 'react';
import './Players.css';
import Player from '../Player/Player';
import playerData from '../../data/playersData';
import SelectedPlayer from '../SeletedPlayer/SelectedPlayer';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleSelectPlayer = (player) => {
        if (selectedPlayers.find( ply =>ply.id == player.id)){
            alert("Player Already Selected");
        }
        else {
            const newSelectedPlayer = [...selectedPlayers, player]
            setSelectedPlayers(newSelectedPlayer);
        }      
    };


    const removeItems = (removedPlayer) =>{ 
       const removePlayer = selectedPlayers.filter((player)=> player.id !== removedPlayer.id)
       setSelectedPlayers(removePlayer)
    }

    useEffect (()=>{
        setPlayers(playerData);
    } ,[])


    return (
        <div>
            
           
            <div className="allPlayer">
                {players.map(player =><Player player={player} key ={player.id} handleSelectPlayer ={handleSelectPlayer}></Player>)}
            </div>

            <SelectedPlayer selectedPlayers ={selectedPlayers} removeItems ={removeItems}></SelectedPlayer>
            

            

        </div>
    );
};

export default Players;