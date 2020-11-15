class Bob {
    constructor(x, y, radius) {
       var options = {
          isStatic: false,
          restitution: 1,
          friction: 0,
          density: 0.8,
       }
       this.radius = radius
       this.x = x
       this.y = y
       this.body = Bodies.circle(this.x,this.y, 20, options)
       World.add(world, this.body) 
      //  this.paper1=loadImage("paperthatiscrumpled.png")
    }
    display() {
       var pos = this.body.position
       push();
       translate(pos.x, pos.y)
       ellipseMode(RADIUS)
       // strokeWeight(4)
       // var x = Math.round(random(0, 255))
       // var y = Math.round(random(0, 255))
       // var z = Math.round(random(0, 255))
       // stroke(x, y, z)
       // fill(x, y, z)
       ellipse(0, 0, 20,20)
      //  image(this.paper1,0,0,this.radius,this.radius)
       pop();
    }
 }