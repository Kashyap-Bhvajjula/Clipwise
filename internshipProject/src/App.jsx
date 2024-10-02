import React from 'react';
import Navbar from './Components/Navbar'; // Adjust the path to your Navbar component
import Grid from './Components/Grid';
import NavCard from './Components/NavCard';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div >
            <Navbar />
            <Grid />
            <Footer />
            
        </div>
    );
};

export default App;