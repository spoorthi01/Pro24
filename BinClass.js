class Bin{
    constructor(){
     bottom = createSprite(350,660,200,20);
	 bottom.shapeColor=("white");
 
	 side1 = createSprite(450,620,20,100);
	 side1.shapeColor=("white");
 
	 side2 = createSprite(250,620,20,100);
     side2.shapeColor=("white"); 
    
     
    this.bottom = Bodies.rectangle(350,660,200,20,{isStatic:true});
    this.bottom.shapeColor=color("white");
    World.add(world,this.bottom);
 
    this. side1 = Bodies.rectangle(550,660,20,100,{isStatic:true});
    this.side1.shapeColor=color("white");
    World.add(world,this.side1);
 
    this.side2 = Bodies.rectangle(550,660,20,200,{isStatic:true});
    this.side2.shapeColor=color("white");
    World.add(world,this.side2);
    }
    
    display() {
        var bottomPos = this.bottom.position;
        var side1Pos = this.side1.position;
        var side2Pos = this.side2.position;

        push();
        translate(side1Pos.x,side1Pos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rect(550,660,20,100)
        pop();

        push();
        translate(side2Pos.x,side2Pos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rect(550,660,20,200)
        pop();

        push();
        translate(bottomPos.x,bottomPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rect(350,660,200,20)
        pop();

    }

}