import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS with global settings
AOS.init({
  offset: 200, // Change offset to trigger animations earlier or later (in pixels)
  duration: 1200, // Duration of animation in milliseconds
  easing: "ease", // Easing function for the animation
  once: false, // Whether animations should only happen once
  mirror: true, // Whether elements should animate when they enter or leave the viewport
  anchorPlacement: "top-bottom", // How animation should be triggered relative to the element's position
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
