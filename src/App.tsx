import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import InitialScreen from "./Pages/ScreenInitial/InitialScreen";
import { useState } from "react";
import History from "./Pages/History/History";

function App() {
  const [profileDev, setProfileDev] = useState<any>();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialScreen />} />
          <Route
            path="/home"
            element={
              <Home profileDev={profileDev} setProfileDev={setProfileDev} />
            }
          />
          <Route
            path="/history"
            element={<History profileDev={profileDev} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
