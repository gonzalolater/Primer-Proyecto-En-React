import React, {Fragment, useState} from 'react'

const Contrador = () => {
    const [numero, setNumero] = useState(0)
    const Aumentar = () =>{
        setNumero(numero+1)
    }
    const Reducir = () => {
        setNumero(numero-1)
    }
    return (
        <Fragment>
            <h2>Cantidad del contador: {numero}</h2>
            <botton onClick={Aumentar}>Aumentar</botton>
            <botton onClick={Reducir}>Reducir</botton>
        </Fragment>
    
    )
}

export default Contrador