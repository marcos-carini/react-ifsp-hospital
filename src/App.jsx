import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Administrador from './pages/Administrador';
import Usuario from './pages/Usuario';
import Medico from './pages/Medico';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} /> 
                <Route path='/adm' element={<Administrador/>}/>
                <Route path='/usuario' element={<Usuario/>}/>
                <Route path='/medico' element={<Medico/>}/>
            </Routes>
        </Router>
    );
}

export default App;
