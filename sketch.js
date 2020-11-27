const Engine, World, Bodies, Constraint;
var canvas, engine, world, body;
var canvasmouse, mConstraint;
var p1, p2, p3, p4, p5;

function setup()
{
    canvas = createCanvas(windowWidth/2, windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();

    let options={
        mouse:canvasmouse
    }

    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    p1 = new Pendulum(200,200,"red");
}

function draw()
{

}

function mouseDragged()
{
    Matter.body.setPosition(pendulum.body, {x:mouseX, y:mouseY});
}