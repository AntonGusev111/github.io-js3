// TODO: write code here
import Ui from "./ui.js";

class Game{
    constructor(){
        this.ui = new Ui;
        this.miss = 0;
        this.hit = 0;
        this.findHit();
    }

    main(){
        this.сheckScore();
        this.ui.main();
        this.miss +=1;
    }

    findHit(){
        document.addEventListener('click',(e)=>{
            if(e.target.className == 'img'){
                this.hit +=1;
                document.body.style.cursor = "url'im.png'";
                this.miss =0;
            }
        }) 
    }

    сheckScore(){
         if (this.miss == 5){
            this.ui.gameOver('lose')
         }
         if (this.hit == 7){
            this.ui.gameOver('win')
         }
    }


}

const newGame = new Game;
setInterval(()=> newGame.main(),1000)
