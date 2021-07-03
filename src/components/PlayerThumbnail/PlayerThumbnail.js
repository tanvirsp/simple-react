import React from 'react';
import './PlayerThumbnail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {}  from '@fortawesome/free-regular-svg-icons';

const PlayerThumbnail = (props) => {
        const removeItems =props.removeItems;
        // console.log(props);
        
        
    
        const {name, image, salary} = props.selectedPlayer;
        // console.log(props);
    return (
        <div className="d-flex align-items-center list-thumbnail">
          <img src={image} alt="" />
          <div>
          <h5>{name}</h5>
          <small>Salary:{ salary}</small>
          </div>
          <button className="remove-btn" onClick={()=>removeItems(props.selectedPlayer)} >
          <FontAwesomeIcon size="sm" icon={faMinus} /> 
          </button>
         
          
        </div>
    );
};

export default PlayerThumbnail;