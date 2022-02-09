import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const styleComp = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '2em'
    }

    return (
        <div>
            <header className="App-header">
                <h1>Software Engineering Class SFSU</h1>
                <h2>Spring 2022</h2>
                <h2>Section 04</h2>
                <h2>Team 5</h2>
                <div style={styleComp}>
                    <div>Rhoanna Jo Perez</div>
                    <div>Jia Liang Li</div>
                    <div>Nelson Pang</div>
                    <div>Michael Abolencia</div>

                    {/* Add a link to your component right here! */}
                    <Link to='/kim' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>Seongjung Kim</Link>
                    <Link to='/chris' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>Christopher Su</Link>
                </div>




            </header>
        </div>
    )
};

export default Homepage;
