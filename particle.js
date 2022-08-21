// class Particle{
//     constructor(x, y){
//         this.x = x ;  
//         this.y = y ;
//         this.radious = Math.random() * 20 + 1 ;
//         this.opacity = 1; 
//         this.directionx = Math.random() * 1 - 0.5 ; 
//         this.directiony = Math.random() * 1 - 0.5 ; 
//     }
//     draw(){
//         ctx3.fillStyle = 'rgba(150,150,150,1)'; 
//         ctx3.beginPath();
//         ctx3.arc(this.x , this.y,this.radious , 0 , Math.PI * 2 );
//         ctx3.fill();
//         ctx3.closePath();
//     }
//     update(){
//         this.x += this.directionx; 
//         this.y += this.this.directiony
//     }
// }
// function handleparticle(){
//     for(let i = 0 ; i < particlearray.length; i++){
//         particlearray[i].update();
//         particlearray[i].draw();
//     }
//     if(((keys[37] || keys[38] || keys[39] || keys[40])) && frogger.y > 100 && particlearray.length<200 ){
//         for(let i = 0 ; i < 10 ; i++){
//             particlearray.unshift(new Particle(frogger.x , frogger.y));
//         }
//     }
// }
