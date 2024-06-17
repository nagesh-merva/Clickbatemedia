import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home'; // Replace with your actual page components
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';

function AppRoutes() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/our-services" component={Services} />
                <Route path="/contactus" component={ContactUs} />
            </Switch>
        </Router>
    );
}

export default AppRoutes;
