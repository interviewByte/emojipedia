import React from "react";

function EmojiCard(props){
    return(
        <div>
           
            <div className="main-card"> 
                <div className="pavan">
                    <div className="card">
                       <span>{props.emoji}</span>
                       <h2>{props.title}</h2>
                       <p>{props.about}</p>
                    </div>
                </div>
            </div>
        </div>    
    )
};

export default EmojiCard;