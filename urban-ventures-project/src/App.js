import React from "react";
import ButtonAppBar from "./components/ButtonAppBar.js";

import Home from "./views/Home.js";

import "./App.css";

function App() {
    return (
        <div className="app">
            <ButtonAppBar />
            <Home />
        </div>
    );
}

export default App;
