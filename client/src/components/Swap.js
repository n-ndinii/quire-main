import React, { useState, useEffect } from 'react';
import './Card.css'; // Import CSS for card styles

const Card = () => {
    // Dummy data for cards
    const data = [
        { 
            id: 1, 
            text: 'Card 1', 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/ContinentalCenterAtNightHoustonTX.jpg', 
            companyName: 'Company A', 
            jobType: 'Full-time', 
            location: 'City X', 
            stipend: '$5000 per month'
        },
        { 
            id: 2, 
            text: 'Card 2', 
            imageUrl: 'https://media.architecturaldigest.com/photos/579a7a7eb6c434ab487bc166/4:3/w_1092,h_819,c_limit/bold-automotive-headquarters-rival-design-cars-03.png', 
            companyName: 'Company B', 
            jobType: 'Part-time', 
            location: 'City Y', 
            stipend: '$3000 per month'
        },
        { 
            id: 3, 
            text: 'Card 3', 
            imageUrl: 'https://static.toiimg.com/thumb/msid-106650447,width-1070,height-580,imgsize-62402,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg', 
            companyName: 'Company C', 
            jobType: 'Remote', 
            location: 'City Z', 
            stipend: '$7000 per month'
        },
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') {
                handleSwipe(-1);
            } else if (e.key === 'ArrowRight') {
                handleSwipe(1);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [currentCardIndex]);

    const handleSwipe = (direction) => {
        const newIndex = currentCardIndex + direction;
        if (newIndex >= 0 && newIndex < data.length) {
            setCurrentCardIndex(newIndex);
        }
    };

    return (
        <div className="card-container">
            {data[currentCardIndex] && (
                <div
                    className="swipe"
                    style={{ 
                        backgroundImage: `url(${data[currentCardIndex].imageUrl})`, 
                        transform: `translateX(0)`, // Reset transform
                        transition: 'transform 0.5s' // Add transition animation
                    }}
                >
                    <div className='text'>
                    <h2>{data[currentCardIndex].text}</h2>
                    <p className="company-name">Company: {data[currentCardIndex].companyName}</p>
                    <p className="job-type">Job Type: {data[currentCardIndex].jobType}</p>
                    <p className="location">Location: {data[currentCardIndex].location}</p>
                    <p className="stipend">Stipend: {data[currentCardIndex].stipend}</p>

                    </div>
                    
                </div>
            )}
        </div>
    );
};

export default Card;
