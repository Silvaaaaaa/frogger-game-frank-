const canvas = document.querySelector("#canvas1")
const ctx1 = canvas.getContext('2d');
canvas.width = 600 ; 
canvas.height = 600 ; 

const canvas2 = document.querySelector("#canvas2")
const ctx2 = canvas.getContext('2d');
canvas2.width = 600 ; 
canvas2.height = 600 ; 

const canvas3= document.querySelector("#canvas3")
const ctx3 = canvas.getContext('2d');
canvas3.width = 600 ; 
canvas3.height = 600 ; 

const canvas4 = document.querySelector("#canvas4")
const ctx4 = canvas.getContext('2d');
canvas4.width = 600 ; 
canvas4.height = 600 ; 

const canvas5 = document.querySelector("#canvas5")
const ctx5 = canvas.getContext('2d');
canvas5.width = 600 ; 
canvas5.height = 600 ; 

// global varial  ;
const grid = 80 ; 
let keys = [] ; 
let score = 0 ; 
let collisioncont = 0 ; 
let frame = 0  ;
let gamespeed = 1 ;
let safe = false ;

const particlearray = [] ;
const maxparticle = 300 ; 
const ripplesarray = [] ;   
const carsarray = [] ;
const logsarray = [] ;

// images 
const backgroud_1v12 = new Image();
backgroud_1v12.src = 'https://www.frankslaboratory.co.uk/downloads/Frogger/background_lvl2.png' ; 

const grass = new Image();
grass.src = 'https://www.frankslaboratory.co.uk/downloads/Frogger/grass.png' ; 

const collision = new Image(); 
collision.src = 'https://www.frankslaboratory.co.uk/downloads/Frogger/collisions.png'; 

const turtle = new Image();
turtle.src = 'https://www.frankslaboratory.co.uk/downloads/Frogger/turtles.png'

const log = new Image();
log.src = 'https://www.frankslaboratory.co.uk/downloads/Frogger/log.png'

const cars = new Image();
cars.src =  'https://www.frankslaboratory.co.uk/downloads/Frogger/cars.png'
let numberofcars = 3 ; 

const froggerr = new Image()
froggerr.src = 'https://www.frankslaboratory.co.uk/downloads/Frogger/frog_spritesheet.png'