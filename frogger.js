class Flogger{
    constructor(){
        this.spritwidth = 250 ; 
        this.spritheigth = 250 ; 
        this.width = this.spritwidth / 5 ; 
        this.height = this.spritheigth / 5  ;
        this.x= canvas.width/2 - this.width/2 ; 
        this.y = canvas.height - this.height - 40 ; 
        this.moving = false ; 
        this.framex= 0 ; 
        this.framey= 0 ;    
    }
    update(){
       if(keys[38]){ // arrow up 
           if(this.moving === false){
               this.y -= grid  ;  // grid 80
               this.moving = true ;
               this.framex = 1 ;
               this.framey = 0 ; 
           }
       }
       if(keys[40]){ // arrow down 
            if(this.moving == false && this.y < canvas.height - this.height * 2){
            this.y += grid  ;  
            this.moving = true ;
            this.framey = 3 ;
            }
      }
    if(keys[37]){ // arrow left 
        if(this.moving == false && this.x > this.width ){
        this.x -= grid  ;  
        this.moving = true ;
        this.framey = 2 ;
        }
     }
     if(keys[39]){ // arrow right  
        if(this.moving == false && this.x < canvas.width - this.width * 2){
        this.x += grid  ;  
        this.moving = true ;
        this.framey = 1; 
        }
     }
      if (this.y < 0) scored();
    }   
    draw(){
        // ctx3.fillStyle = 'green' ; 
        // ctx3.fillRect(this.x , this.y , this.width , this.height);
        ctx3.drawImage(froggerr , this.framex * this.spritwidth , this.framey * this.spritheigth ,this.spritwidth , this.spritheigth , this.x - 25 ,this.y - 25 , this.width * 2 ,this.height * 2 )
    }
    jump(){
      if(this.moving === false ) this.framex = 1 
      else if (this.framex === 1)this.framex = 0 ;
    }
}
let frogger = new Flogger() ; 