import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Swap';

class Feed extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <Card/>
            </div>
        );
    }
}

export default Feed;