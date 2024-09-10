import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  // Particle initialization function
  const particlesInit = async (main) => {
    console.log("Particle Init:", main); // Debugging the main object.
    await loadFull(main); // Loads tsParticles and its additional options/plugins.
  };

  // Particle loaded function to check if everything is set
  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container); // Debugging the container object.
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60, // Limits frames per second for performance
        particles: {
          number: {
            value: 55,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#00f0fc", // Visible color for particles
          },
          shape: {
            type: "circle", // Circle-shaped particles
            stroke: {
              width: 0,
              color: "#000000", // Stroke around the particles
            },
            polygon: {
              nb_sides: 5, // 5-sided polygons
            },
            image: {
              src: "img/github.svg", // If needed, include any custom image.
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5, // Adjusted opacity for visibility
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 1, // Adjusted particle size
            random: true,
            anim: {
              enable: false,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true, // Enable lines between particles
            distance: 150,
            color: "#00f0ec",
            opacity: 0.2, // Increased line visibility
            width: 1,
          },
          move: {
            enable: true, // Enable particle movement
            speed: 3, // Adjusted movement speed
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out", // Particles will bounce out of the canvas.
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true, // Enable hover interaction
              mode: "repulse", // Particles will repel from the mouse pointer
            },
            onclick: {
              enable: false, // Enable click interaction
              mode: "push", // On click, more particles will be added
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4, // Push more particles on click
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true, // Detects high DPI devices for better performance.
      }}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed", // Ensures it's positioned at the background
        zIndex: "-1", // Keeps particles behind other elements
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ParticleBackground;
