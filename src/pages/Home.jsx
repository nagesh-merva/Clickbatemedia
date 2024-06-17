// Home.jsx
import React from 'react';
import NavBar from "../nav/nav"; // Adjust the path based on your actual structure
import MainPage from "../main/main";
import Service from "../service/service";
import GetInTouch from "../getintouch/touch";
import Footer from "../footer/footer";

function Home() {
    return (
        <>
            <NavBar />
            <MainPage />
            <Service />
            <GetInTouch />
            <Footer />
        </>
    );
}

export default Home;
