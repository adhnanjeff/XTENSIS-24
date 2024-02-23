// ParticlesComponent.js
import React from 'react';
import Particles from 'react-particles-js';

const ParticlesComponent = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 3,
          },
          color: '#ffffff',
          line_linked: {
            color: '#ffffff',
          },
        },
      }}
    />
  );
};

export default ParticlesComponent;
