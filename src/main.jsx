import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Preloader from "./components/Preloader.jsx";

import "remixicon/fonts/remixicon.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

// init animasi scroll
AOS.init();

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; 
  }

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  );
}

// Render ke root
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
