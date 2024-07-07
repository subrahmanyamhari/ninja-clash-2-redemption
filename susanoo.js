class Susanoo{
    constructor(img,colour){
        this.player = {
            a:null,
            b:null,
            c:null
        };
        this.player.a = createSprite(450,270,200,226);
        this.player.b = createSprite(480,220,200,45.5);
        this.player.c = createSprite(120,220,200,45.5);
        this.player.a.addImage("b",img.b)
        this.player.b.addImage("h",img.a);
        this.player.b.mirrorX(-1);
        this.player.b.mirrorY(-1);
        this.player.c.addImage("s",img.c);
        this.colour = colour;
        this.player.a.tint = this.colour;
        this.player.b.tint = this.colour;
        this.player.c.tint = this.colour;
    }
    use(){
        this.player.b.rotation = rot;
        this.player.c.rotation = -rot;
        this.player.b.y = this.player.a.y-20*mir*this.player.b.scale + sin(rot)*200*mir*this.player.b.scale;
        this.player.b.x = this.player.a.x+50*mir*this.player.b.scale + cos(rot)*200*mir*this.player.b.scale;
        this.player.c.y = this.player.a.y-10*mir - sin(-rot)*100*mir;
        this.player.c.x = this.player.a.x-10*mir - cos(-rot)*100*mir;
        if (keyDown(DOWN_ARROW)){
            rot+=5;
            this.player.b.mirrorY(1);
            this.player.c.mirrorY(1);
        };
        if (keyDown(UP_ARROW)){
            rot-=5;
            this.player.b.mirrorY(-1);
            this.player.c.mirrorY(-1);

        };
        if (keyDown(LEFT_ARROW)){
            this.player.a.x-=4;
            this.player.a.mirrorX(-1);
            this.player.b.mirrorX(-1);
            this.player.c.mirrorX(1);
            mir = 1;
        };
        if (keyDown(RIGHT_ARROW)){
            this.player.a.x+=4;
            this.player.a.mirrorX(1);
            this.player.b.mirrorX(1);
            this.player.c.mirrorX(-1);
            mir = -1;
        };
        if (keyDown("1") && this.player.c.scale < 2){
            this.player.c.scale += 0.1;
        };
        if (!keyDown("1") && this.player.c.scale > 1){
            this.player.c.scale -= 0.1;
        };
        if (keyDown("2") && this.player.b.scale < 1.25){
            this.player.b.scale += 0.05;
        };
        if (!keyDown("2") && this.player.b.scale > 1){
            this.player.b.scale -= 0.05;
        };
        
    }
}