export default class Ui{

    constructor(){
        this.img = this.uploadImg();
        this.field = document.querySelectorAll(".main_field");
        this.previos_cord = 0;
        this.fog = document.querySelector('.fog')
        this.status = document.querySelector('.status')
    }

    uploadImg(){
        const img = document.createElement("IMG");
        img.className = 'img'
        img.src = 'img/goblin.png';
        return img;
    }

    randomNumber(max){
        max = Math.floor(max);
        return Math.floor(Math.random() * (max  + 1));
    
    }
    

    randomInsert(img, field){
        let cord_field = this.randomNumber(field[0].children.length-1);
        if (this.previos_cord == cord_field){
            cord_field = this.randomNumber(field[0].children.length-1);
        }
        field[0].children[cord_field].appendChild(this.img);
        this.previos_cord = cord_field;
    }

    dellImg(){
        const img = document.querySelector('img');
        if (img){
            img.remove()
        }
    }

    main(){
        this.dellImg();
        this.randomInsert(this.img, this.field)
    }

    gameOver(status){
        if (status =='win'){
            this.fog.style.background = 'goldenrod';
            this.fog.classList.add('fog_active');
            this.status.classList.add('status_active')
            this.status.innerHTML = 'You win!'
        } else {
            this.fog.style.background = 'black';
            this.fog.classList.add('fog_active');
            this.status.classList.add('status_active')
            this.status.innerHTML = 'YOU DIED'
        }

    }
}

//const newGame = new Game();

//setInterval(()=> newGame.main(),1000)