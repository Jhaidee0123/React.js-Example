import React from 'react'
import TarjetaFruta from './components/TarjetaFruta/tarjeta-fruta'

const App = () => (
    <div>
        <TarjetaFruta name={'Sandia'} price={5.00} />
        <TarjetaFruta name={'Naranja'} price={98.0}/>
        <TarjetaFruta name='Kiwi' price={3.30} />
    </div>
)

export default App