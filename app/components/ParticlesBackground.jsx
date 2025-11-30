// src/components/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full z-0"
      options={{
        fullScreen: { enable: true },
        background: {
          color: {
            value: "[#0a0c14]/90",
          },
        },
        fpsLimit: 160,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#9374e3",
          },
          links: {
            color: "#f2f7fc",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
// make sure to install these packages
// npm install react-tsparticles@2 tsparticles@2
