class Obstacle{
    constructor(x , y , width , height , speed, type ){
        this.x =x ;
        this.y = y ; 
        this.width = width ; 
        this.height = height ;
        this.speed = speed ; 
        this.type = type; 
        this.framex = 0 ;
        this.framey = 0 ; 
        this.randomise = Math.floor(Math.random() * 30 + 30 ); 
        this.carType = (Math.floor(Math.random() * numberofcars));
    }  
    draw(){
        if (this.type === 'turtle'){
            if(frame % this.randomise  === 0){
        if(this.framex >= 1)this.framex = 0 ;
        else this.framex++ ; 
            }
        // ctx1.fillRect(this.x , this.y , this.width, this.height );  
        ctx1.drawImage(turtle , this.framex * 70, this.framey * 70 , 70 , 70,this.x, this.y , this.width , this.height); 
        }else if (this.type === 'log'){
        ctx1.drawImage(log  ,this.x , this.y , this.width, this.height );  
        }else{
            ctx2.drawImage(cars, this.framex * this.width , this.carType * this.height, grid* 2,grid , this.x,this.y ,this.width , this.height);
        }
        // ctx1.fillStyle = 'blue' ;
        // ctx1.fillRect(this.x , this.y , this.width, this.height );
    }
    update(){
        this.x += this.speed * gamespeed ;
    if (this.speed > 0 ){
        if(this.x > canvas.width + this.width){
            this.x =  0 - this.width ;
        }
        }else{
            this.framex = 1; 
        if (this.x < 0 - this.width ){
            this.x =  canvas.width + this.width ;
        }
    }
    }
}
function initobtcles(){
    // line 1 
    for(let i =0 ; i < 2 ; i++){
        let x = i * 300 ;
        carsarray.push(new Obstacle(x , canvas.height - grid * 2 - 20 , grid * 2 , grid ,2 ,'car'));
    }  
    // line 2
    for(let i =0 ; i < 2 ; i++){
        let x = i * 350 ;
        carsarray.push(new Obstacle(x , canvas.height - grid * 3 - 20 , grid * 2 , grid ,-2,'car'));
    }  
    // line 3 
    for(let i =0 ; i < 2 ; i++){
        let x = i * 400 ;
        carsarray.push(new Obstacle(x , canvas.height - grid * 4 - 20 , grid * 2 , grid , 2 ,'car'));
    } 
    // line 4
    for(let i =0 ; i < 2 ; i++){
        let x = i * 400 ;
        carsarray.push(new Obstacle(x , canvas.height - grid * 5 - 20 , grid * 2 , grid , -2 ,'log'));
    } 
    // line 5
    for(let i =0 ; i < 3 ; i++){
        let x = i * 200 ;
        carsarray.push(new Obstacle(x , canvas.height - grid * 6 - 20 , grid , grid , 2 ,'turtle'));
    } 
}
initobtcles();

function handleobtacle(){
    for(let i =0  ; i < carsarray.length ; i++){
        carsarray[i].update();
        carsarray[i].draw();
    }
    for(let i =0  ; i < logsarray.length ; i++){
        logsarray[i].update();
        logsarray[i].draw();
    }
     for(let i =0  ; i < carsarray.length ; i++){
      if(checkcollision(frogger , carsarray[i])){
          ctx4.drawImage(collision , 0, 100 ,100,100,frogger.x , frogger.y , 50 ,50 );  
          resetGame();
      }
    }
}       
if(frogger.y < 250 && frogger.y > 100 ){
    safe = false ; 
    for(let i = 0 ; i < logsarray.length ; i++){
        if(checkcollision(frogger , logsarray[i])){
            frogger.x += logsarray[i].speed;
            safe = true; 
        }
    }
}
