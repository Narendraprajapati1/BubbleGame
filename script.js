let guestnumber = document.querySelector('#guest')
let showtime = document.querySelector('#time')
let showscore = document.querySelector('#score')
let bubbleBx = document.querySelector('.bubblebx')
let clicknumber = document.querySelector('.bbl')
let dailogbx = document.querySelector('#dailogbx')
let close = document.querySelector('#close')




let randomnumner = Math.floor(Math.random()*10)
// console.log(randomnumner)
guestnumber.innerHTML = randomnumner

let time = 15
showtime.innerHTML = time

let score = 0 
showscore.innerHTML = score

 



setInterval(() =>{
    if(time>0){
        time = time -1
        showtime.innerHTML = time
        

    }
    else{
        dailogbx.style.display ="flex"
        bubbleBx.innerHTML =''
        
    }
},1000)


close.addEventListener ('click', ()=>{
    dailogbx.style.display = 'none'
    time = 15
    bubbleBx.innerHTML= ''
    score = 0 
showscore.innerHTML = score

    createbbl();

    time = 15
    
    
    
})





bubbleBx.addEventListener('click',(e)=>{
    if(e.target.id == 'number'){
        // console.log(e.target.innerHTML)
        if(e.target.innerHTML == guestnumber.innerHTML){
            score = score +10
            showscore.innerHTML = score
            guestnumber.innerHTML = Math.floor(Math.random()*10)
        }
        else{
              score = score -5
        

        }
    }
})


const createbbl = ()=>{
    for( let i = 0; i<65; i++){
        let bubbleNUMBER = Math.floor(Math.random()*10)
        bubbleBx.innerHTML += `<div class="bbl">
                               <img src="./pngwing.com.png" alt="">
                               <h2 id="number" >${bubbleNUMBER}</h2>
                             </div>`
}
}

createbbl();


