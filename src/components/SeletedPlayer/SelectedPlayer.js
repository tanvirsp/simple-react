import React from 'react';
import './SelectedPlayer.css';
import PlayerThumbnail from '../PlayerThumbnail/PlayerThumbnail';


const SelectedPlayer = (props) => {
    const selectedPlayers = props.selectedPlayers;
    const removeItems = props.removeItems;

    const totalAmount = selectedPlayers.reduce((total, seletedPlayer) => total + seletedPlayer.salary , 0)
    // console.log(selectedPlayers);

   
    return (
        <div className="container">

                <div className="d-flex justify-content-evenly align-items-center selected-board">
                    <h5 className="high-light">Total Selected Palyers: {selectedPlayers.length}</h5>
                    <h5 className="high-light">Total Salary Amount: {totalAmount}</h5>
                    
                    <button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">VIEW DETAILS</button>

                    <div className="offcanvas p-2 offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Selected Player Details</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            {
                                selectedPlayers.map(selectedPlayer =><PlayerThumbnail selectedPlayer ={selectedPlayer} removeItems={removeItems} ></PlayerThumbnail>)
                            }
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default SelectedPlayer;