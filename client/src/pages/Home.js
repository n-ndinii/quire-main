import Nav from '../components/Nav';
import AuthModal from "../components/AuthModal";
import { useState } from 'react';
import { useCookies } from "react-cookie";
import './Home.css'; // Import the stylesheet

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const authToken = cookies.AuthToken;

    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId);
            removeCookie('AuthToken', cookies.AuthToken);
            window.location.reload();
            return;
        }
        setShowModal(true);
        setIsSignUp(true);
    };

    return (
        <div className="home-container">
    <Nav />
    <div className="home">
        <div className="text-container">
            <div className='contain'>
            <h1 className="primary-title">Quire®</h1>
            </div>
            
        </div>
        <button className="primary-button" onClick={handleClick}>
            {authToken ? 'Signout' : 'Create Account'}
        </button>
        {showModal && (
            <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
    </div>
</div>

    );
};

export default Home;
