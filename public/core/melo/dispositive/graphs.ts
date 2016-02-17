/// <reference path="../../../../../typings/bragi-browser/bragi-browser" />
import * as Bragi from "bragi-browser";

interface Circle {
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    radius?: number;
    speed?: number;
    alpha?: number;
    rotation?: number;
    angleStart?: number;
    angleEnd?: number;
    hue?: number;
    thickness?: number;
    blur?: number;
    particles?: boolean;
    border?: boolean;
    flareTwo?: boolean;
}

export class Graphics {

    private render: CanvasRenderingContext2D;
    private circleInterval: number;
    private gradient1: CanvasGradient;
    private particleMax: number;
    private particles: Object[];

    cw: number;
    ch: number;
    circle: {
        x: number,
        y: number,
        radius: number,
        speed: number,
        alpha?: number,
        rotation: number,
        angleStart: number,
        angleEnd: number,
        hue: number,
        thickness: number,
        blur: number,
        particles: boolean,
        border: boolean,
        flareTwo: boolean
    };

    constructor() {
    }

    public setGraphics(element: HTMLCanvasElement, circleSet: Circle = {}): void {
        /* 
        set initial props of the circles controller.
        */
        this.render = element.getContext("2d");
        this.cw = element.width = 230;
        this.ch = element.height = 230;
        this.circle = {
            x: circleSet.x || (this.cw / 2),
            y: circleSet.y || (this.ch / 2),
            radius: circleSet.radius || 90,
            speed: circleSet.speed || 13,
            rotation: circleSet.rotation || 0,
            angleStart: circleSet.angleStart || 270,
            angleEnd: circleSet.angleEnd || 90,
            hue: circleSet.hue || 450,
            thickness: circleSet.thickness || 35,
            blur: circleSet.blur || 1,
            particles: circleSet.particles || false,
            border: circleSet.border || false,
            flareTwo: circleSet.flareTwo || false
        };

        // aspect props.
        this.render.shadowBlur = this.circle.blur;
        this.render.shadowColor = "hsla(" + this.circle.hue + ", 80%, 60%, 1)";
        this.render.lineCap = "round";
        this.gradient1 = this.render.createLinearGradient(0, -this.circle.radius, 0, this.circle.radius);
        this.gradient1.addColorStop(0, `hsla(${this.circle.hue}, 60%, 50%, .25)`);
        this.gradient1.addColorStop(1, `hsla(${this.circle.hue}, 60%, 50%, 0)`);
    }

    public initGraphics(): Graphics {
        /*
        this function start the circular animation loop 
        */
        if (requestAnimationFrame) {
            this.circleInterval = requestAnimationFrame(eve => this.initGraphics());
            this.loop();
        }
        else {
            throw Error("Native function requestAnimationFrame is required");
            Bragi.log("error:Graphics", `Native function requestAnimationFrame is required`);
        }

        return this;
    }

    public stopGraphics() {
        cancelAnimationFrame(this.circleInterval);
        this.render.clearRect(0, 0, this.cw, this.ch);
    }

    private loop(): void {
        this.clear();
        this.updateCircle();
        this.renderCircle();
        if (this.circle.border) this.renderCircleBorder();
        this.renderCircleFlare();
        if (this.circle.flareTwo) this.renderCircleFlare2();
        if (this.circle.particles) {
            this.createParticles();
            this.updateParticles();
            this.renderParticles();
        }
    }

    private rand(a, b) {
        return ~~((Math.random() * (b - a + 1)) + a);
    }

    private dToR(degrees) {
        return degrees * (Math.PI / 180);
    }

    private updateCircle() {
        if (this.circle.rotation < 360)
            this.circle.rotation += this.circle.speed;
        else
            this.circle.rotation = 0;
    }

    private renderCircle() {
        this.render.save();
        this.render.translate(this.circle.x, this.circle.y);
        this.render.rotate(this.dToR(this.circle.rotation));
        this.render.beginPath();
        this.render.arc(0, 0, this.circle.radius, this.dToR(this.circle.angleStart), this.dToR(this.circle.angleEnd), true);
        this.render.lineWidth = this.circle.thickness;
        this.render.strokeStyle = this.gradient1;
        this.render.stroke();
        this.render.restore();
    }

    private renderCircleBorder() {
        this.render.save();
        this.render.translate(this.circle.x, this.circle.y);
        this.render.rotate(this.dToR(this.circle.rotation));
        this.render.beginPath();
        this.render.arc(0, 0, this.circle.radius + (this.circle.thickness / 2), this.dToR(this.circle.angleStart), this.dToR(this.circle.angleEnd), true);
        this.render.lineWidth = 2;
        this.render.stroke();
        this.render.restore();
    }

    private renderCircleFlare() {
        let gradient3: CanvasGradient;

        this.render.save();
        this.render.translate(this.circle.x, this.circle.y);
        this.render.rotate(this.dToR(this.circle.rotation + 185));
        this.render.scale(1, 1);
        this.render.beginPath();
        this.render.arc(0, this.circle.radius, 30, 0, Math.PI * 2, false);
        this.render.closePath();
        gradient3 = this.render.createRadialGradient(0, this.circle.radius, 0, 0, this.circle.radius, 30);
        gradient3.addColorStop(0, "hsla(330, 50%, 50%, .35)");
        gradient3.addColorStop(1, "hsla(330, 50%, 50%, 0)");
        this.render.fillStyle = gradient3;
        this.render.fill();
        this.render.restore();
    }

    private renderParticles() {
        let i: number = this.particles.length,
            p: Circle;
        while (i--) {
            p = this.particles[i];
            this.render.beginPath();
            this.render.fillRect(p.x, p.y, p.radius, p.radius);
            this.render.closePath();
            this.render.fillStyle = `hsla(0, 0%, 100%, ${p.alpha})`;
        }
    }

    private clear() {
        this.render.globalCompositeOperation = "destination-out";
        this.render.fillStyle = "rgba(0, 0, 0, .1)";
        this.render.fillRect(0, 0, this.cw, this.ch);
        this.render.globalCompositeOperation = "lighter";
    }

    private renderCircleFlare2() {
        let gradient4: CanvasGradient;

        this.render.save();
        this.render.translate(this.circle.x, this.circle.y);
        this.render.rotate(this.dToR(this.circle.rotation + 165));
        this.render.scale(1.5, 1);
        this.render.beginPath();
        this.render.arc(0, this.circle.radius, 25, 0, Math.PI * 2, false);
        this.render.closePath();
        gradient4 = this.render.createRadialGradient(0, this.circle.radius, 0, 0, this.circle.radius, 25);
        gradient4.addColorStop(0, "hsla(30, 100%, 50%, .2)");
        gradient4.addColorStop(1, "hsla(30, 100%, 50%, 0)");
        this.render.fillStyle = gradient4;
        this.render.fill();
        this.render.restore();
    }

    private createParticles() {
        if (this.particles.length < this.particleMax) {
            this.particles.push({
                x: (this.circle.x + this.circle.radius * Math.cos(this.dToR(this.circle.rotation - 85))) + (this.rand(0, this.circle.thickness * 2) - this.circle.thickness),
                y: (this.circle.y + this.circle.radius * Math.sin(this.dToR(this.circle.rotation - 85))) + (this.rand(0, this.circle.thickness * 2) - this.circle.thickness),
                vx: (this.rand(0, 100) - 50) / 1000,
                vy: (this.rand(0, 100) - 50) / 1000,
                radius: this.rand(1, 6) / 2,
                alpha: this.rand(10, 20) / 100
            });
        }
    }

    private updateParticles() {
        let i: number = this.particles.length,
            p: Circle;
        while (i--) {
            p = this.particles[i];
            p.vx += (this.rand(0, 100) - 50) / 750;
            p.vy += (this.rand(0, 100) - 50) / 750;
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= .01;

            if (p.alpha < .02) {
                this.particles.splice(i, 1);
            }
        }
    }
}
