/*  Positioned dots on canvas.
        Create "data_dot" object with "dot" property which store multiple properties.  */
    
    var data_dot={dot   :[{x:5,y:100},{x:200,y:200},{x:600,y:200},{x:1000,y:150},
                        {x:1000,y:400},{x:600,y:400},{x:500,y:500},{x:500,y:400},
                        {x:360,y:320},{x:200,y:300},{x:100,y:400},{x:120,y:250},
                        {x:200,y:200},{x:120,y:250},{x:200,y:300},{x:120,y:250},
                        {x:900,y:250},{x:120,y:250}]                                          
    };
    
    var canvas =document.getElementById("canvasAnimate");
    var ctx = canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    
    
    var a = 0;
    function update(){
        var b=data_dot.dot[a]; /*for moveTo*/
        var d; /*for lineTo*/
        if (a==data_dot.dot.length-1)/*Condition for send back line to starting dot*/ { 
            var d=data_dot.dot[0];
        }
        else{
            d= data_dot.dot[a+1]
        } 
    
    
    a = a + 1;
      
        ctx.moveTo(b.x,b.y);
        ctx.lineTo(d.x,d.y);
        var gradient = ctx.createLinearGradient(0,0,170,0);
        gradient.addColorStop("0.8","yellow");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        ctx.fillstyle=gradient;
        ctx.strokeStyle =gradient;
        ctx.strokeWidth = 7;
        ctx.stroke();	
}
    
    /* Function for displaying dot on canvas */
    function plotDot(){
	   for (var i = 0; i<data_dot.dot.length;i++) {
        ctx.beginPath();
        ctx.arc(data_dot.dot[i].x,data_dot.dot[i].y,7,0,2*Math.PI);
        ctx.fillStyle ="#000";
        ctx.fill();
	}
}
    
    
    function clearPage(){
        window.location.reload(false);
}
    
    function goBack(){
        window.location.href = "index.html";
    }
		setInterval(update,3000);
		plotDot();