(()=>{"use strict";class t{constructor(){this.img=this.uploadImg(),this.field=document.querySelectorAll(".main_field"),this.previos_cord=0,this.fog=document.querySelector(".fog"),this.status=document.querySelector(".status")}uploadImg(){const t=document.createElement("IMG");return t.className="img",t.src="img/goblin.png",t}randomNumber(t){return t=Math.floor(t),Math.floor(Math.random()*(t+1))}randomInsert(t,s){let i=this.randomNumber(s[0].children.length-1);this.previos_cord==i&&(i=this.randomNumber(s[0].children.length-1)),s[0].children[i].appendChild(this.img),this.previos_cord=i}dellImg(){const t=document.querySelector("img");t&&t.remove()}main(){this.dellImg(),this.randomInsert(this.img,this.field)}gameOver(t){"win"==t?(this.fog.style.background="goldenrod",this.fog.classList.add("fog_active"),this.status.classList.add("status_active"),this.status.innerHTML="You win!"):(this.fog.style.background="black",this.fog.classList.add("fog_active"),this.status.classList.add("status_active"),this.status.innerHTML="YOU DIED")}}const s=new class{constructor(){this.ui=new t,this.miss=0,this.hit=0,this.findHit()}main(){this.сheckScore(),this.ui.main(),this.miss+=1}findHit(){document.addEventListener("click",(t=>{"img"==t.target.className&&(this.hit+=1,document.body.style.cursor="url'im.png'",this.miss=0)}))}сheckScore(){5==this.miss&&this.ui.gameOver("lose"),7==this.hit&&this.ui.gameOver("win")}};setInterval((()=>s.main()),1e3)})();