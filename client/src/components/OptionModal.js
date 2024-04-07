import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import './Opmodal.css';


const AuthModal = ({ setShowModal = true}) => {





    const handleClick = () => {
        setShowModal(false)
    }

 

    return (
        <div className="op-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>

           

        </div>
    )
}
export default AuthModal
