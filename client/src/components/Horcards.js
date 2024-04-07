import React from 'react';
import './HorCards.css'; // Import your CSS file for styling

const HorizontalCards = () => {
    return (
        <div className="horizontal-cards-container">
            <div className="horizontal-card">
                <img src="https://via.placeholder.com/150" alt="Card 1" />
                <div className="card-content">
                    <h2>Card Title 1</h2>
                    <p>Description of the card goes here.</p>
                </div>
            </div>
            <div className="horizontal-card">
                <img src="https://via.placeholder.com/150" alt="Card 2" />
                <div className="card-content">
                    <h2>Card Title 2</h2>
                    <p>Description of the card goes here.</p>
                </div>
            </div>
            <div className="horizontal-card">
                <img src="https://via.placeholder.com/150" alt="Card 3" />
                <div className="card-content">
                    <h2>Card Title 3</h2>
                    <p>Description of the card goes here.</p>
                </div>
            </div>
            {/* Add more cards as needed */}
        </div>
    );
};

export default HorizontalCards;
