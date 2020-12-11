const dino = document.getElementById('dino')
const cactus = document.getElementById("cactus")
function  jump(){
    if(dino.classList !== "jump"){
    dino.classList.add('jump');
    setTimeout(function(){
        dino.classList.remove('jump')
    },300)
}
}

isDinoAlive = setInterval(function(){
    //Dino position
    let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))

    //cactus position
    let cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    // console.log(cactusPos)

    if(cactusPos <50 && cactusPos > 0 && dinoPos >=240){
    alert("Game over!")
    }
},10)

document.addEventListener("keydown", function(event){
    jump();
})
