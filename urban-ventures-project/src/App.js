import React from "react";
import { Paper } from "@material-ui/core";
import Header from "./components/Header.js";
import NavBar from "./components/navBar";

import "./App.css";

function App() {
    return (
        <Paper>
            <Header />
            <NavBar />
        </Paper>
    );
}

export default App;
