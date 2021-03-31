class RectangleObject
{
    constructor(x,y,width,height)
    {
        var options =
        {
            isStatic: true,
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
        rectMode(CENTER);
        noStroke();
        fill(67, 78, 97);
        rect(pos.x,pos.y,this.width,this.height);
    }
}