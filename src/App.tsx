import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Container, Grid} from "@material-ui/core";
import {Routes} from "./Routes";
import {Nav} from './components/Nav/Nav';
import {Footer} from "./components/Footer/Footer";
import TransitionsModal from "./components/Modal";

function App() {
    return (
        <div className="App">
            <TransitionsModal/>
            <Header/>
            <Container maxWidth="xl" className="container">
                <Grid container className="grid">
                    <Nav/>
                    <div className="wrap-content">
                        <Routes/>
                    </div>
                </Grid>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;