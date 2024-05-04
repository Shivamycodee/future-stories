import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';

// Google Analytics tracking code
const trackingCode = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-KRTHN0EN7N"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-KRTHN0EN7N');
  </script>
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div dangerouslySetInnerHTML={{ __html: trackingCode }} />
    <App />
  </>
);