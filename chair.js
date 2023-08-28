objs=[]
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    
    }
    var status="";
    
    function modelloaded(){
        console.log("READY");
        status=true;
        document.getElementById("status").innerHTML="status:finding stuff"
        objectDetector.detect(img,eee)
    }
    function eee(error,results){
     if(error){   console.log(error)
     }
    else{
        console.log(results)
        objs=results
    }
    }
    var img="";
    function preload(){
        img=loadImage("chair.jpg");
    }
    function draw(){
        image(img,0,0,640,420);
        if(status!=""){
            for(i=0;i<objs.length;i++){
                fill("white");
                document.getElementById("status").innerHTML="status:found"
                var percent=floor(objs[i].confidence*100);
                text(objs[i].label+" "+percent+"%",objs[i].x+15,objs[i].y+15);
                noFill();
                stroke("blue");
                rect(objs[i].x,objs[i].y,objs[i].width,objs[i].height);
        
                        }
           }
    }