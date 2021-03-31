class FlexableTriObj
{
    constructor(x,y,radius,rotation)
    {
        var options =
        {
            airFriction:0.01,
            density:0.001,
            friction: 0,
        }
        this.body = Bodies.polygon(x,y,3,radius,options);
        World.add(world,this.body);
        Matter.Body.rotate(this.body,rotation);
    }
    display()
    {
        var vertices = this.body.vertices;

        push();
        noStroke();
        fill(67, 78, 97);
        triangle(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y);
        pop();

    }
}
