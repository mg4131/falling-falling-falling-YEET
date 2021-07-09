class Box{
    constructor(x,y,width,height) {
        var options = {restitution:0.8, friction:1, density:1}
        this.boxbody=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world, this.boxbody)
    }
    display() {
        push ()
        translate (this.boxbody.position.x,this.boxbody.position.y)
        rotate(this.boxbody.angle)
        rectMode(CENTER);
        fill(157, 134, 29)
        rect(/*this.boxbody.position.x,this.boxbody.position.y,*/0,0, this.width, this.height);
        pop ()
    }
}