import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../src/pages/Home/index'
import Cardapio from '../../src/pages/Cardapio/index'

export default function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/cardapio' element={<Cardapio/>}/>
            </Routes>
        </Router>
    )
}