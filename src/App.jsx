import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
