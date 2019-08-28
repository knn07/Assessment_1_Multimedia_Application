var data = {canvas: null, 
            ctx: null, 
            clickdot: null, // clickdot is dot where is come from and will be holding previo usly click dot.
            createLinearGradient:null,
            dot: [ {x: 5, y: 100}, {x: 200, y: 200}, {x: 200, y: 300}, {x: 100, y: 400},{x: 120, y: 250}, {x: 600, y: 200},{x: 1000, y: 150}, {x: 1000, y: 400}, 
            {x: 500, y: 500}, {x: 600, y:400}, {x:500, y:400}, {x:900, y:250},
            {x: 360,y:320}] 
           };

	data.canvas = document.getElementById("dot");
	data.ctx = data.canvas.getContext("2d");
    
	data.canvas.width = window.innerWidth;
	data.canvas.height = window.innerHeight;
    
    data.canvas.addEventListener('mousedown', function (e){
        checkdot(e);
    })

function dotdraw() {
	var i = 0;
	for(; i < data.dot.length; i++){
		var dt = data.dot[i];
		data.ctx.beginPath();
		data.ctx.arc(dt.x, dt.y, 7, 0, 2*Math.PI)
		data.ctx.fillStyle = '#000';
		data.ctx.fill();
		data.ctx.closePath();
		}
	}

//Function for draw line from previous dot to new dot  
function linedraw(todot){
    data.ctx.beginPath();
    var gradient = data.ctx.createLinearGradient(0,0,170,0);
    gradient.addColorStop("0.8", "yellow");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0","red");
    data.ctx.moveTo(data.clickdot.x, data.clickdot.y);
    data.ctx.lineTo(todot.x, todot.y);
    data.ctx.strokeStyle = gradient;
    data.ctx.lineWidth = 5;
    data.ctx.stroke();
    data.ctx.closePath();
}
    
// Call circle collision to check to see the click is colliding.
function checkdot(e){
    var i = 0, col = null;
    for (; i < data.dot.length; i++){
        var dt = data.dot[i],
            c1 = {x: dt.x, y: dt.y, r:20},
            c2 = {x: e.pageX, y: e.pageY, r: 20};
        if (circleCollision(c1,c2)) col = dt;
    }
    //for drawing from dot and to dot
    if (col !== null){
        if (data.clickdot !== null) linedraw(col);
        data.clickdot = col; //save the previous click dot
    }else data.clickdot = null; // clicking on space to reset the line
}


function circleCollision (c1,c2){
    var a = c1.r + c2.r,
        x = c1.x - c2.x,
        y = c1.y - c2.y;
    
    if (a > Math.sqrt((x*x) + (y*y))) return true;
    else return false;
}


    function clearPage(){
        window.location.reload(false);
}
    
    function goBack(){
        window.location.href = "index.html";
    } 

dotdraw();