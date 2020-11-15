class Roof{
    constructor(x,y,width,height)
	{
		this.x=x;
		this.y=y;
		this.roofWidth=width;
		this.roofHeight=height;
		
		
		this.body=Bodies.rectangle(this.x, this.y, this.roofWidth, this.wallThickness, {isStatic:true})
		
		World.add(world, this.body)
		
        
	     
	}
	display()
	//        image(this.roof1,1200,650)
	{
		 
			var posBottom=this.body.position;
			
	

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("coral")
			stroke(255)
			rect(0,0,this.roofWidth, this.roofHeight);
			pop()

			
			
			
		
		}

}


    