import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/OnBoarding'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import Feed from './pages/Feed'
import Bookmarks from './pages/Bookmarks'

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
                {authToken && <Route path="/onboarding" element={<OnBoarding/>}/>}
                <Route path="/dashboard/feed" element={<Feed/>}/>
                <Route path="/dashboard/bookmarks" element={<Bookmarks/>}/>

                

            </Routes>
        </BrowserRouter>
    )
}

export default App
