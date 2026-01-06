import { useEffect, useRef } from "react";
import "./WaterRipple.css";
import logo from '../../assets/logo1.png';

export default function WaterRipple({ onFinish }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ripples = [];

    function addRipple(x, y) {
      ripples.push({
        x,
        y,
        radius: 0,
        alpha: 1
      });
    }

    addRipple(canvas.width / 2, canvas.height / 2);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.forEach((r, i) => {
        r.radius += 2;
        r.alpha -= 0.01;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
        ctx.lineWidth = 3;
        ctx.stroke();

        if (r.alpha <= 0) ripples.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
      onFinish();
    }, 2600);
  }, [onFinish]);

  return (
    <div className="ripple-container">
      <canvas ref={canvasRef} />

      <div className="logo-box">
        <img src={logo} alt="Logo" />
        <h2>The Wandering Soul Adventures</h2>
      </div>
    </div>
  );
}
