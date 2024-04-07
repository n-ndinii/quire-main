import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'


const Sidebar = () => {
    return (
        <div className="vertical-buttons-container">
            <Link to="/account">
                <button className="vertical-button">
                    <img className='img' src='https://cdn-icons-png.flaticon.com/512/61/61205.png' alt="Bookmark" />
                </button>
            </Link>
            <Link to="/dashboard/feed">
                <button className="vertical-button">
                    <img className='img' src='https://cdn-icons-png.flaticon.com/512/6521/6521796.png' alt="Bookmark" />
                </button>
            </Link>
            <Link to="/dashboard/bookmarks">
                <button className="vertical-button">
                    <img className='img' src='https://icon-library.com/images/icon-bookmark/icon-bookmark-17.jpg' alt="Bookmark" />
                </button>
            </Link>
        </div>
    );
};

export default Sidebar;

