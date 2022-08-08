import { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/SearchBar";

function Home() {
    return (
        <div id="landing-page">
            <Navbar />
            <Search />
        </div>
    )
}

export default Home;