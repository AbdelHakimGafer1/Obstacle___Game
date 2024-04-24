// import {names} from "./kims.js";
// console.log(names);
const hole= document.getElementById('hole');
const obstacle= document.getElementById('obstacle');
const bird= document.getElementById('bird');
let scoree =document.getElementById('score') ;
const stop =document.getElementById('stop');
const game1 =document.getElementById('game');
const zeroClass =document.querySelector('.zero');
const zero =document.getElementById('zero-animi');
let score=0;


// const sp = (Math.random()*4);
const btn = document.createElement('button');

        obstacle.addEventListener('animationiteration',
        ()=>{
            const rr=()=>{
                if(score>=5 ){
                    hole.classList.add('speed');
                    obstacle.classList.add('speed');
                    bird.innerText="0🩸";
                }
            if(score>=14 ){
        hole.classList.remove('speed');
        obstacle.classList.remove('speed');
        bird.innerText="0🩸0";
        
    }
}
rr();
let rand = Math.random()*(500-150);
hole.style.top=rand+'px';
scoree.innerHTML=`Your Score Is : ${++score}`
stop.innerHTML=` Yor score is : ${score}`;
stop.style.display='block';})

let stop1=document.addEventListener('keydown',()=>{
    isjumping=true;
    let jumptimer=0;
    
    let jumptimeginterval= setInterval(() => {
        jumptimer++;
        let birdtop=parseInt(getComputedStyle(bird).getPropertyValue('top')) ;
        if( birdtop > 0 && jumptimer < 16 ){
            bird.style.top=birdtop-6+'px';
        }
        if(jumptimer>20){
            clearInterval(jumptimeginterval);
            isjumping =false;
            jumptimer=0;
        }
    }
    ,
    10);
})
let isjumping =false;
const  haim = setInterval(() => {
    let birdtop = parseInt(getComputedStyle(bird).getPropertyValue('top')) ;
    if(!isjumping){
        bird.style.top=birdtop+3+'px';
    }
    
    //Game Over 
    
    
    let holetop = parseInt(getComputedStyle(hole).getPropertyValue('top')) ;
    let obstacleleft = parseInt(getComputedStyle(obstacle).getPropertyValue('left')) ;
    
    if( ( obstacleleft < 20 && ( birdtop > holetop + 150 ||  birdtop < holetop ))){
        
        let stop =document.getElementById('stop')
        hole.classList.remove('speed');
        obstacle.classList.remove('speed');
        stop.style.display='none';
        bird.innerText="0";
        bird.style.top=10+'px';
        obstacle.style.left='100%';
        hole.style.left='100%';
        functionStart();
        // alert(`Your Score is : ${score}`)
        score=0
    }
},10);



//// counters 
let functionStart = ()=>{
    let valueDisplayes = document.querySelectorAll(".num");
    let interVal =5000 ;
    
    valueDisplayes.forEach(element => {
        let startValue =0 ;
        let endValue = parseInt(element.getAttribute("data-val")) ;
        let duration = Math.floor(interVal/endValue);
        let counter = setInterval(() => {
            startValue +=1 ;
            element.textContent=startValue;
            if(startValue==endValue){
                clearInterval(counter)
            }
        },duration);
        
    });
}




document.addEventListener('click',(event)=>{
    let buttonClick = event.target;
    let idProuduct = buttonClick.dataset.id ;
    console.log((idProuduct) )
})
let Cart = [];
let ShoPIng =Cart.findIndex((value)=>{
    value.prouduct_id===ss
})
