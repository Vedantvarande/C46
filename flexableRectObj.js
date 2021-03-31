class FlexableRectObj
{
    constructor(x,y,width,height)
    {
        var options =
        {
            airFriction:0.01,
            density:0.001,
            friction: 0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display()
    {   
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(67, 78, 97);
        rect(0, 0, this.width, this.height);
        pop();
    }
}