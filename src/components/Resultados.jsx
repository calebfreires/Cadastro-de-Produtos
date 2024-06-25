import React from 'react'
import { useLocation } from 'react-router-dom'
import './FormularioProduto.css'

const ExibirDados = () => {

    // hook usado para acessar o estado passado pela navegação: useNavigate
    const location = useLocation()

    // desestruturando name, description, price do estado obtido 
    const { name, description, price } = location.state

    return (
        <div className='container-return'>
            <form>
                <h1>Dados do Produto</h1>
                <div className="separator"></div>
                <p><strong>Nome:</strong> {name}</p>
                <div className="separator"></div>
                <p><strong>Descrição:</strong> {description}</p>
                <div className="separator"></div>
                <p><strong>Preço:</strong> R${price}</p>
            </form>
        </div>
    )
}

export default ExibirDados
