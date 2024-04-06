
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/dashboard/bookmarks" className="sidebar-option">Bookmarks</Link>
            <Link to="/dashboard/feed" className="sidebar-option">Feed</Link>
            <Link to="/dashboard/profile" className="sidebar-option">Profile</Link>
        </div>
    );
};

export default Sidebar;
