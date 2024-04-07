import React, { useState, useEffect } from 'react';
import './Card.css'; // Import CSS for card styles
import AuthModal from './OptionModal';



const Card = () => {
    // Dummy data for cards
    const data = [
        { 
            id: 1, 
            text: 'SDE-1 Intern', 
            imageUrl: 'https://etimg.etb2bimg.com/photo/98518615.cms', 
            companyName: 'Google Inc.', 
            jobType: 'Intern', 
            location: 'Banglore', 
            stipend: '$5000 per month'
        },
        { 
            id: 2, 
            text: 'Software Intern', 
            imageUrl: 'https://media.licdn.com/dms/image/D4D12AQFpPxD1uf-d1g/article-cover_image-shrink_720_1280/0/1687246994784?e=2147483647&v=beta&t=WrYifR2ONyKSnPfKsXayaDvXwdX44yBe7jKnVjNO6AY', 
            companyName: 'Zomato', 
            jobType: '2 Months', 
            location: 'Gurgaon', 
            stipend: '$3000 per month'
        },
        { 
            id: 3, 
            text: 'SDE Intern', 
            imageUrl: 'https://static.toiimg.com/thumb/msid-106650447,width-1070,height-580,imgsize-62402,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg', 
            companyName: 'Microsoft', 
            jobType: '6 Month', 
            location: 'Remote', 
            stipend: '$7000 per month'
        },
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') {
                handleSwipe(-1);
            } else if (e.key === 'ArrowRight') {
                handleSwipe(1);
                setShowModal(true);
              
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
                    <h2 style={{ fontWeight: 'bold', color: 'white' }}>{data[currentCardIndex].text}</h2>


                    <p className="company-name">Company: {data[currentCardIndex].companyName}</p>
                    <p className="job-type">Job Type: {data[currentCardIndex].jobType}</p>
                    <p className="location">Location: {data[currentCardIndex].location}</p>
                    <p className="stipend">Stipend: {data[currentCardIndex].stipend}</p>

                    </div>
                    {showModal && (
            <AuthModal setShowModal={setShowModal}/>
        )}
                </div>

            )}
        </div>
    );
};

export default Card;
