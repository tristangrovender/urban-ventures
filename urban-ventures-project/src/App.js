import React from "react";
import { Paper } from "@material-ui/core";
import Header from "./components/Header.js";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    return (
        <Paper>
            <Header />
            <NavBar />
            <Footer />
        </Paper>
    );
}

export default App;
