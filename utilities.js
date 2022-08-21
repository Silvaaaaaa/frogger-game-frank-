function animate(){
    ctx3.clearRect(0 ,0 , canvas.width , canvas.height) ;
    ctx2.drawImage(backgroud_1v12 , 0 , 0 , canvas.width , canvas.height);
    // handleparticle();
    frogger.draw();     
    frogger.update();     
    ctx4.drawImage(grass , 0 , 0 , canvas.width , canvas.height);
    handleobtacle() 
    handleScoreBoard();
    requestAnimationFrame(animate) 
}
animate();

// even listeners
window.addEventListener("keydown" , function(e){
    keys = []; 
    keys[e.keyCode]= true;
    if(keys[37] || keys[38] || keys[39] || keys[40] ){
        frogger.jump();
    }
})
window.addEventListener("keyup" , function(e){
    delete keys[e.keyCode];
    frogger.moving = false;
})

function scored(){
    score++;
    gamespeed += 0.05;
    frogger.x =canvas.width/2 - frogger.width/2;
    frogger.y =canvas.height - frogger.height - 40 ; 
}

function handleScoreBoard(){
    ctx4.fillStyle = 'black' ; 
    ctx4.strokeStyle = 'black'; 
    ctx4.font = '15px Verdana'; 
    ctx4.strokeText('score' , 265 , 15); 
    ctx4.font = '60px Verdana';     
    ctx4.strokeText(score , 270 , 65);    
    ctx4.font = '15px Verdana';     
    ctx4.strokeText("collision"  + collisioncont , 10 , 175);   
    ctx4.strokeText("Game speed" + gamespeed.toFixed(1), 10 , 195);   
}

function checkcollision(rect1 , rect2){
            return (
                rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.y + rect1.height > rect2.y )
        }
function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2 ;
    frogger.y = canvas.height - frogger.height - 40 ; 
    // score = 0 ;
    collisioncont++ ;
    gamespeed = 1 ; 
}

     
        
        