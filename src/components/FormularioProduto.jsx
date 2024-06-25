import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormularioProduto.css'

const FormularioProduto = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    // hook do react-router-dom para navegação
    const navigate = useNavigate()

    // função para coletar os dados dos estados
    const handleSubmit = (e) => {
        e.preventDefault()

        // Guardando os dados submetidos
        const userData = {
            name,
            description,
            price
        };

        // navegando para '/exibir-dados' passando userData como estado
        navigate('/exibir-dados', { state: userData })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome do produto</label>
                <input type="text" name='name' id='name' className='name' value={name} onChange={(e) => setName(e.target.value)} />

                <div className="separator"></div>

                <label htmlFor="description">Descrição do produto</label>
                <input type="text" name='description' id='description' className='description' value={description} onChange={(e) => setDescription(e.target.value)} />

                <div className="separator"></div>

                <label htmlFor="price">Preço do produto</label>
                <input type="number" name='price' id='price' className='price' value={price} onChange={(e) => setPrice(e.target.value)} />

                <div className="separator"></div>

                <label htmlFor="available">Disponível para venda</label>
                <select name="available" id="available">
                    <option value="yes">Sim</option>
                    <option value="no">Não</option>
                </select>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default FormularioProduto
