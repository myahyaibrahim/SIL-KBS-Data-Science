import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const Home = () => {
    const goToQuestion = () => {
        window.location.href = '/question';
    }

    const button = {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: "#70ab85",
            color: "white"

        },
        color: "#70ab85",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
    }
    return (
        <div>
            <NavBar />
            <Container style={{ height: "530px", textAlign: "center" }}>
                <Button onClick={goToQuestion} style={{ marginTop: "200px", width: "300px", height: "100px", fontSize: "40px" }} variant="light" size="lg">MULAI</Button>
            </Container>
            <Footer />
        </div>
    );
};

export default Home;