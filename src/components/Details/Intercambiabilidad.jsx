import { useState } from 'react'


const InputCount = () => {

    return <button className="btn " onClick={() => console.log('cart')} >Ir al Carrito</button>
}



const ButtonCount = ({ handleInter }) => {
    return <button className="btn " onClick={handleInter}>Agregar Al carrito</button>

}


const Intercambiabilidad = () => {

    const [inputType, setInputType] = useState('button');

    const handleInter = () => {
        setInputType('input')
    }




    return (
        <div>
            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter} />
                    :
                    <InputCount />
            }

        </div>

    )
}

export default Intercambiabilidad
