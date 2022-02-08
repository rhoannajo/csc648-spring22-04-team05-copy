import React from 'react';
import './rhoanna.css';
import rj from '../rhoanna/RJ-photo.jpg'

const Rhoanna = () => {
    return (
        <div>
            <div className="container">
                <div style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '30px'}}>
                    <img src={rj} style={{ borderRadius: '150px', alignItems: 'center', width: 250, height: 250 }} />
                    <hr/>
                    <div style={{color:'black'}}>
                        <h3 style={{color: 'black', marginTop: ''}}>Rhoanna Jo Perez</h3>
                        <p style={{marginTop: '-20px', fontSize: '20px'}}>Team Lead</p>

                        <p style={{fontSize:'23px', paddingRight: '20px', paddingLeft: '20px'}}>I'm a fourth year CS student. I have experience as a software engineer intern at a woman-led startup, leading the frontend team for the UI/UX design, and am looking for software engineer positions postgrad.</p>
                    </div>
            
                </div>
            </div>
        </div>
    )
};

export default Rhoanna;
