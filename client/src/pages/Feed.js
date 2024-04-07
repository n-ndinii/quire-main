import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Swap';
import Topbar from '../components/Topbar';
import './feed.css';


class Feed extends Component {
    render() {
        return (
            <div className='conatiner'>
                <Topbar/>
                <Sidebar/>
                <Card/>
            </div>
        );
    }
}

export default Feed;