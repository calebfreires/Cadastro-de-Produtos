import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormularioProduto from './components/FormularioProduto'
import Resultados from './components/Resultados.jsx'

const App = () => {
    return (
        <Router>
            <Routes>
                {/* renderizando as rotas dos componentes */}
                <Route path="/" element={<FormularioProduto />} />
                <Route path="/exibir-dados" element={<Resultados />} />
            </Routes>
        </Router>
    )
}

export default App
