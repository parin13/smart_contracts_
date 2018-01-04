$(function () {

    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1000 / 60)
        }
    })();
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.scale(1, 1);
    var onMobile = false;
    var w = window.innerWidth - 50,
        h = window.innerHeight;
    canvas.width = w;
    if (h >= 800) {
        canvas.height = h
    } else {
        canvas.height = 800
    }
    var particleNum;
    var particles = [];
    particleAmount();
    var minDist = w / 5;
    if (minDist < 200) {
        minDist = 210
    } else {
        if (minDist > 300) {
            minDist = 300
        }
    }
    var dist;
    var mx, my;
    var mouseDown = false;
    var nodecount = 0;

    function particleAmount() {
        particleNum = (w / 50);
        if (particleNum < 20) {
            particleNum = 20
        }
        particles = [];
        for (var a = 0; a < particleNum; a++) {
            particles.push(new Particle());
            particles[a].x = (a * (w / particleNum))
        }
    }
    canvas.addEventListener("mousemove", function (a) {
        mousePos = getMousePos(canvas, a)
    }, false);

    function getMousePos(b, a) {
        mx = a.clientX;
        my = a.clientY
    }

    function paintCanvas() {
        var a = new Image();
        //    a.src = "./img/blockLab.png";
        ctx.drawImage(a, 0, 0, w, h)
    }

    function Particle() {
        this.y = Math.random() * h;
        this.vy = (Math.random() * -1) / 3;
        this.radius = 1.5;
        this.draw = function () {
            var a = Math.abs(this.y - h / 2);
            ctx.fillStyle = "rgba(0,0,0, 0.8)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath()
        };
        this.drawMobile = function () {
            var a = Math.abs(this.y - h / 2);
            ctx.fillStyle = "rgba(0,0,0, " + (0 + a / minDist) / 1.1 + ")";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0,0,0," + (1 - a / minDist) / 2 + ")";
            ctx.moveTo(p.x, 0);
            ctx.lineTo(p.x, h);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0,0,0," + (1 - a / minDist) / 2 + ")";
            ctx.moveTo(0, p.y);
            ctx.lineTo(w, p.y);
            ctx.stroke();
            ctx.closePath()
        }
    }

    function draw() {
        paintCanvas();
        for (var a = 0; a < particles.length; a++) {
            p = particles[a];
            if (!onMobile) {
                p.draw()
            } else {
                p.drawMobile()
            }
        }
        update()
    }
    var amplitude = h / 200;
    var period = 100;
    var theta = 0;
    var dx = ((Math.PI * 2) / particleNum);

    function update() {
        if (!onMobile) {
            theta += 0.0025;
            var a = theta;
            if (onMobile) {
                amplitude = w / 10
            } else {
                if (amplitude < 300) {
                    amplitude = w / 10
                } else {
                    amplitude = 300
                }
            }
            for (var c = 0; c < particles.length; c++) {
                p = particles[c];
                if (c % 2 == 0) {
                    p.y = (Math.sin(a) * amplitude) + h / 2
                } else {
                    p.y = (1 - Math.sin(a) * amplitude) + h / 2
                }
                a += dx;
                if (p.x + p.radius > w) {
                    p.x = p.radius
                } else {
                    if (p.x - p.radius < 0) {
                        p.x = w - p.radius
                    }
                }
                if (p.y + p.radius > h) {
                    p.y = p.radius
                } else {
                    if (p.y - p.radius < 0) {
                        p.y = h - p.radius
                    }
                }
                for (var b = c + 1; b < particles.length; b++) {
                    var d = particles[b];
                    distance(p, d)
                }
                if (mouseDown) {
                    mouseRepel(p, mx, my)
                } else {
                    mouseAttract(p, mx, my)
                }
            }
        } else {
            for (var c = 0; c < particles.length; c++) {
                p = particles[c];
                p.y += p.vy;
                if (p.x + p.radius > w) {
                    p.x = p.radius
                } else {
                    if (p.x - p.radius < 0) {
                        p.x = w - p.radius
                    }
                }
                if (p.y + p.radius > h) {
                    p.y = p.radius
                } else {
                    if (p.y - p.radius < 0) {
                        p.y = h - p.radius
                    }
                }
                if (mouseDown) {
                    mouseRepel(p, mx, my)
                }
            }
        }
    }

    function distance(e, c) {
        var d;
        var b = e.x - c.x;
        var a = e.y - c.y;
        d = Math.sqrt(b * b + a * a);
        if (d <= minDist) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0,0,0,0.2)";
            ctx.moveTo(e.x, e.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
            ctx.closePath()
        }
    }

    function repositionParticles() {
        particleAmount();
        for (var a = 0; a < particles.length; a++) {
            particles[a].x = (a * (w / particleNum))
        }
        minDist = w / 6;
        if (minDist < 210) {
            minDist = 210
        } else {
            if (minDist > 300) {
                minDist = 300
            }
        }
        if (amplitude < 300) {
            amplitude = w / 10
        } else {
            amplitude = 300
        }
        dx = ((Math.PI * 2) / particleNum)
    }

    function mouseAttract(f, e, d) {
        var g;
        var b = f.x - e;
        var a = f.y - d;
        var c = 12;
        g = Math.sqrt(b * b + a * a);
        if (amplitude > 150) {
            amplitude -= 0.07 - (1 / (amplitude - 150))
        }
        if (g <= minDist) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0,0,0," + (1.2 - g / minDist) + ")";
            ctx.moveTo(f.x, f.y);
            ctx.lineTo(e, d);
            ctx.stroke();
            ctx.closePath();
            if (f.radius < 5) {
                f.radius += 0.1
            }
        } else {
            f.radius -= 0.05 * 1.5;
            if (f.radius <= 1.5) {
                f.radius = 1.5
            }
        }
    }

    function mouseRepel(e, d, c) {
        var f;
        var b = e.x - d;
        var a = e.y - c;
        theta += 0.0003;
        f = Math.sqrt(b * b + a * a);
        if (amplitude < 300) {
            amplitude += 0.1
        } else {
            if (amplitude >= 300) {
                amplitude = 300
            }
        }
        if (f <= minDist) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0,191,230,1)";
            ctx.moveTo(e.x, e.y);
            ctx.lineTo(d, c);
            ctx.stroke();
            ctx.closePath()
        }
    }
    canvas.onmousedown = function (a) {
        mouseDown = true
    }

    canvas.onmouseup = function (a) {
        mouseDown = false
    }

    function animLoop() {
        draw();
        requestAnimFrame(animLoop)
    }
    animLoop();
    window.onresize = function () {
        canvas.width = window.innerWidth;
        w = window.innerWidth;
        h = window.innerHeight;
        paintCanvas();
        repositionParticles()
    };

});