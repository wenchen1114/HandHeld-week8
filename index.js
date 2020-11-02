let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0,0,canvas.width, canvas.height);
//image by Olga Thelavart https://unsplash.com/photos/pWQ7A87DHzM

let isMousePressed = false;
let p1 = { x: 100, y: 100 };
let p2 = { x: 200, y: 200 };

makeBase();
function makeBase(){
    let base_image = new Image();
    base_image.src = "skin.jpg";
    base_image.onload = function(){
        ctx.drawImage(base_image, 0, 0, canvas.width, canvas.height);
    }
}

canvas.addEventListener("mousedown", function(e){
    isMousePressed = true;

})

canvas.addEventListener("mousemove", function(e){
    if(isMousePressed){
    let x = e.clientX;
    let y = e.clientY;
    ctx.beginPath();
    ctx.shadowColor = 'rgba(247,153,153,0.05)';
    ctx.shadowBlur = 15;
    ctx.fillStyle = "rgba(247,153,153,0.02)";
    ctx.arc(x, y, 30, 0, Math.PI *2);
    ctx.fill();
    }
})

canvas.addEventListener("mouseout", function(e){
    isMousePressed = false;

})

canvas.addEventListener("touchmove", function (e) {
    e.preventDefault();
    let touches = Array.from(e.touches);
  
    let touch = touches[0];
    p1 = {
      x: touch.clientX,
      y: touch.clientY
    };
  
    touch = touches[1];
  
    if (touch) {
      p2 = {
        x: touch.clientX,
        y: touch.clientY
      };
    }
  
    render();
  });
  
function render(){
    let p3 = {
        x: p1.x + (p2.x - p1.x)/2,
        y: p1.y + (p2.y - p1.y)/2
    }

    ctx.beginPath();
    ctx.shadowColor = 'rgba(247,153,153,0.1)';
    ctx.shadowBlur = 15;
    ctx.fillStyle = "rgba(247,153,153,0.02)";
    ctx.arc(p3.x, p3.y, 100, 0, Math.PI *2);
    ctx.fill();

}