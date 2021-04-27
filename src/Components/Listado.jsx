import React, {Fragment, useState} from 'react'

const Listado = () => {
    
    const [numeros, SetNumeros] = useState([1,2,3,4])
    
    return (
        <Fragment>
            <ul>
                {
                    numeros.map( (item, index) =>
                    <li key={item}>
                        {item} - {index}
                    </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listado
