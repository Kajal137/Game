let water = "water" ;
let  gun ="gun";
let  snake="snake";
let score=0;
let scorewater=0;
let scoregun = 0;
let scoresnake =0;

for(let j =0; j<6;j++)
    {
    let guess = prompt("Guess one from Water,Gun ,snake");
 if (guess === water) {
        scorewater += 1;
         console.log("Final Score foe water is  : "+scorewater);
        } 
   
else if(guess === gun){
        
       scoregun +=2 ;
       score = scoregun+scorewater;
        console.log("Final Score is for gun is: "+score);

    }
else if( guess === snake)
        {
            scoresnake = score -3;
            console.log("Score for snake is  :"+scoresnake);
        }
 else
            {
                console.log("You Selected Wrong");
            }
           
    }
    let FinalScore = scorewater + scoregun +scoresnake;
    console.log("Final Score is : "+FinalScore);
    if(FinalScore>0){
        console.log("Winner");

    }else{
        console.log("OOPS! You loose the game ");
    }
    

