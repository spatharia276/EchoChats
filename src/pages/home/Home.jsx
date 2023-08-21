import React, { useState, useEffect } from "react";
import HomeD from "./HomeDesktop"; // Import your Home component
import HomeM from "./HomeMobile"; // Import your mobile Home component

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth < 850 ? <HomeM /> : <HomeD />}
    </div>
  );
}

export default App;
