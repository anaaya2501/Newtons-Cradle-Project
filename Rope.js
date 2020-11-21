class Rope{
    constructor(body1,body2,xoffset){
        var options={        
        bodyA : body1,
        bodyB : body2,
        pointB: {x: xoffset,y:0}
        }

        this.rope= Constraint.create(options);
        this.offset= xoffset;
        World.add(world,this.rope);
    }

    display(){

            var pointA= this.rope.bodyA.position;
            var pointB= this.rope.bodyB.position;
            stroke("red");
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x+this.offset,pointB.y);
    }
}
