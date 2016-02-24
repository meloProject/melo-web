interface Circle {
    x?: number;
    y?: number;
    speed?: number;
    vx?: number;
    vy?: number;
    radius?: number;
    alpha?: number;
    angleStart?: number;
    angleEnd?: number;
    hue?: number;
    thickness?: number;
    blur?: number;
}

export class Graphics {

    private render: CanvasRenderingContext2D;
    private circleInterval: number;
    private gradient1: CanvasGradient;
    private particleMax: number;
    private particles: Object[];
    private rotation: number;
    private animationSpeed: number;
    private loopCount: number;
    public onLoop: Function;

    cw: number;
    ch: number;
    circle: {
        x: number,
        y: number,
        radius: number,
        alpha?: number,
        angleStart: number,
        angleEnd: number,
        hue: number,
        thickness: number,
        rotation: number,
        bgColor: string
    };

    circleInverse: {
        x: number,
        y: number,
        radius: number,
        alpha?: number,
        angleStart: number,
        angleEnd: number,
        hue: number,
        thickness: number,
        rotation: number,
        bgColor: string
    };
    
    public set(element: HTMLCanvasElement, circleSet: Circle = {}): void {
        /* 
        set initial props of the circles controller.
        */

        this.render = element.getContext("2d");
        this.cw = element.width = 240;
        this.ch = element.height = 240;
        this.animationSpeed = 6;
        this.loopCount = 0;

        this.circle = {
            x: circleSet.x || (this.cw / 2),
            y: circleSet.y || (this.ch / 2),
            radius: circleSet.radius || 90,
            angleStart: circleSet.angleStart || 170,
            angleEnd: circleSet.angleEnd || 90,
            hue: circleSet.hue || 450,
            thickness: circleSet.thickness || 35,
            bgColor: "#4c8efe",
            rotation: 0
        };

        this.circleInverse = {
            x: circleSet.x || (this.cw / 2),
            y: circleSet.y || (this.ch / 2),
            radius: circleSet.radius || 90,
            angleStart: circleSet.angleStart || 170,
            angleEnd: circleSet.angleEnd || 90,
            hue: circleSet.hue || 450,
            thickness: circleSet.thickness || 35,
            bgColor: "#ffc31c",
            rotation: 180
        };

        // aspect props.
        this.render.lineCap = "round";
    }

    public start() {
        /*
        this function start the circular animation loop 
        */
        // this.circleInterval = requestAnimationFrame(eve => this.start());
        this.loop();
    }

    public stop() {
        cancelAnimationFrame(this.circleInterval);
        this.render.clearRect(0, 0, this.cw, this.ch);
    }

    private loop(): void {
        this.clear();
        this.renderSemiCircleOne();
        this.renderSemiCircleTwo();
        this.graphsControls();
    }

    private graphsControls() {
        if (typeof this.onLoop === "function")
            this.onLoop(this.loopCount++);
    }

    private rand(a: number, b: number): number {
        return ~~((Math.random() * (b - a + 1)) + a);
    }

    private dToR(degrees: number): number  {
        return degrees * (Math.PI / 180);
    }

    private renderSemiCircleOne() {
        this.render.save();
        this.render.translate(this.circle.x, this.circle.y);
        this.render.rotate(this.dToR(this.circle.rotation));
        this.render.beginPath();
        this.render.arc(0, 0, this.circle.radius, this.dToR(this.circle.angleStart), this.dToR(this.circle.angleEnd), true);
        this.render.lineWidth = this.circle.thickness;
        this.render.strokeStyle = this.circle.bgColor;
        this.render.stroke();
        this.render.restore();
    }

    private renderSemiCircleTwo() {
        this.render.save();
        this.render.translate(this.circleInverse.x, this.circleInverse.y);
        this.render.rotate(this.dToR(this.circleInverse.rotation));
        this.render.beginPath();
        this.render.arc(0, 0, this.circleInverse.radius, this.dToR(this.circleInverse.angleStart), this.dToR(this.circleInverse.angleEnd), true);
        this.render.lineWidth = this.circleInverse.thickness;
        this.render.strokeStyle = this.circleInverse.bgColor;
        this.render.stroke();
        this.render.restore();
    }

    private clear() {
        this.render.globalCompositeOperation = "destination-out";
        this.render.fillRect(0, 0, this.cw, this.ch);
        this.render.globalCompositeOperation = "lighter";
    }

    public elasticControl(event: MouseEvent) {
        let top = event.y,
            left = event.x;

        // if (top | left > this.actualPositon) console.log()
                // elastic control movement.
    }

}
