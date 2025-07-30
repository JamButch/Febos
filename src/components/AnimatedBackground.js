import React, { useRef, useEffect } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let squares = [];

        // **CAMBIO 1: Medir el contenedor padre, no la ventana**
        const parent = canvas.parentElement;

        function setCanvasSize() {
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        }
        setCanvasSize();
        
        class Square {
            constructor(x, y, size, speed) {
                this.x = x; this.y = y; this.size = size; this.speed = speed; this.opacity = 1;
            }
            draw() {
                ctx.fillStyle = `rgba(209, 213, 219, ${this.opacity * 0.7})`;
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
            update() { this.opacity -= this.speed; this.draw(); }
        }

        function addSquare() {
            const size = Math.random() * 40 + 15;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const speed = Math.random() * 0.005 + 0.001; 
            squares.push(new Square(x, y, size, speed));
        }

        let animationFrameId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (Math.random() > 0.92) addSquare();
            for (let i = squares.length - 1; i >= 0; i--) {
                squares[i].update();
                if (squares[i].opacity <= 0) squares.splice(i, 1);
            }
            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        const handleResize = () => setCanvasSize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // **CAMBIO 2: Usar 'absolute' para que el canvas se limite a su contenedor**
    return <canvas ref={canvasRef} id="abstract-background" className="absolute top-0 left-0 w-full h-full"></canvas>;
};

export default AnimatedBackground;
