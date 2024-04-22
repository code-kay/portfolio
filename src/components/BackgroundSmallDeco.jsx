import { useRef, useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";

import styled from 'styled-components';
import petal1 from '../assets/images/display/petal1.webp'
import petal2 from '../assets/images/display/petal2.webp'
import petal3 from '../assets/images/display/petal3.webp'
import smallLantern1 from '../assets/images/display/smallLantern1.webp'
import smallLantern2 from '../assets/images/display/smallLantern2.webp'
import smallLantern3 from '../assets/images/display/smallLantern3.webp'

const SmallDecoCanvas = styled.canvas`
    position: fixed;
    top: 0;
    left: 0;
`

function BackgroundSmallDeco() {
    const { darkMode } = useTheme();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        class Part {
            constructor() {
                this.img =  partImgs[Math.floor(Math.random() * partImgs.length)]
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height * 2 - canvas.height;
                this.w = Math.max(canvas.width/40, canvas.height/40) + Math.random() * 10;
                this.h = Math.max(canvas.width/60, canvas.height/60) + Math.random() * 10;
                this.opacity = 0.5;
                this.xSpeed = Math.random() * 0.5;
                this.ySpeed = 0.5 + Math.random() * 0.3;
                this.flip = Math.random();
                this.flipSpeed = Math.random() * 0.03;
            }

            draw() {
                if (!darkMode && (this.y > canvas.height || this.x > canvas.width)) {
                    this.x = -this.img.width;
                    this.y = Math.random() * canvas.height * 2 - canvas.height;
                } else if (darkMode && (this.y < -this.h || this.x > canvas.width)){
                    this.x = -this.img.width;
                    this.y = Math.random() * canvas.height * 2 + canvas.height;
                }

                ctx.globalAlpha = this.opacity;
                ctx.shadowBlur = 30;
                ctx.shadowColor = darkMode ? 'red' : 'pink';
                ctx.drawImage(
                    this.img,
                    this.x,
                    this.y,
                    this.w * (0.66 + (Math.abs(Math.cos(this.flip)) / 3)),
                    darkMode ? this.h* 1.4 * (0.8 + (Math.abs(Math.sin(this.flip)) / 2)) : this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 2)),
                );
            }

            animate() {
                if (darkMode) {
                    this.x += this.xSpeed / 3;
                    this.y -= this.ySpeed / 5;
                } else {
                    this.x += this.xSpeed;
                    this.y += this.ySpeed;
                }

                this.draw();
                this.flip += darkMode ? this.flipSpeed * 0.1 : this.flipSpeed;
            }
        }

        const TOTAL = darkMode? 90 : 30
        const partsArray = [];

        const images = darkMode ? [smallLantern1, smallLantern2, smallLantern3] : [petal1, petal2, petal3];
        const partImgs = images.map(src => {
            const img = new Image();
            img.src = src;
            return img;
        });

        Promise.all(partImgs.map(img => new Promise(resolve => img.onload = resolve)))
        .then(() => {
            for (let i = 0; i < TOTAL; i++) {
                partsArray.push(new Part());
            }
            render();
        });

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            partsArray.forEach(petal => {
                petal.animate();
            });
            requestAnimationFrame(render);
        }

        function resizeCanvas() {
            const oldWidth = canvas.width;
            const oldHeight = canvas.height;
        
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        
            partsArray.forEach(part => {
                part.x = part.x / oldWidth * canvas.width;
                part.y = part.y / oldHeight * canvas.height;
        
                part.w = Math.max(canvas.width / 40, canvas.height / 40) + Math.random() * 10;
                part.h = Math.max(canvas.width / 60, canvas.height / 60) + Math.random() * 10;
            });
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => window.removeEventListener('resize', resizeCanvas);
    }, [darkMode]);

    return <SmallDecoCanvas ref={canvasRef} />;
}

export default BackgroundSmallDeco;
