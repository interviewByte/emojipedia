import React from "react";
import EmojiCard from "./EmojiCard";
import emoji from "../emoji";
function App(){
    function abc(pavan){
        return(
             <EmojiCard
             id={pavan.id}
             emoji={pavan.emoji}
             title={pavan.title}
             about={pavan.about}
            />

        )
    }
    return(
       <div>
           <div className="top">
               <h1>emojipedia</h1>
            </div>
            {emoji.map(abc)}
          {/* <EmojiCard
           emoji={emoji[0].emoji}
           title={emoji[0].title}
           about={emoji[0].about} 
          />
          <EmojiCard
           emoji={emoji[1].emoji}
           title={emoji[1].title}
           about={emoji[1].about}
          />
          <EmojiCard
           emoji={emoji[2].emoji}
           title={emoji[2].title}
           about={emoji[2].about}
          />
          <EmojiCard
           emoji={emoji[3].emoji}
           title={emoji[3].title}
           about={emoji[3].about}
          />
          <EmojiCard
           emoji={emoji[4].emoji}
           title={emoji[4].title}
           about={emoji[4].about}
          />
           <EmojiCard
           emoji={emoji[5].emoji}
           title={emoji[5].title}
           about={emoji[5].about}
          /> */}
       </div>
        
        
    )
}



export default App;