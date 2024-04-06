import React from 'react';
import './Card2.css'; // Import CSS for card styles

const Card = ({ job }) => {
    return (
        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyK60eeybKx7zLGDPhJId0hQnkXuCKHch18HWkz6kBA&s'})` }}></div>
            <div className="card-details">
                <h2 className="company-name">{job.companyName}</h2>
                <p className="job-type">{job.jobType}</p>
                <p className="location">{job.location}</p>
                <p className="stipend">Stipend: {job.stipend}</p>
            </div>
        </div>
    );
};

export default Card;
