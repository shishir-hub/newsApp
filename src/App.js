import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 15;
  const apiKey = "f48f1687d1354c869a18d9ca97632302";

  const [progress, setProgress] = useState(5);

  return (
    <div>
      <Navbar></Navbar>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"></News>}>

        </Route>
        <Route exact path="business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"></News>}>

        </Route>
        <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"></News>}>

        </Route>
        <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"></News>}>

        </Route>
        <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"></News>}>

        </Route>
        <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"></News>}>

        </Route>
        <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"></News>}>

        </Route>
        <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"></News>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
