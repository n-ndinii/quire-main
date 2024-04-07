import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import HorizontalCards from '../components/Horcards';

const Bookmarks = () => {
    return (
        <div>
            <Sidebar/>
            <HorizontalCards/>
        </div>
    );
};

Bookmarks.propTypes = {};

export default Bookmarks;