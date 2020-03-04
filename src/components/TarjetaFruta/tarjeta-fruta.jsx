import React from 'react'
import styles from './tarjeta-fruta.module.css'

class TarjetaFruta extends React.Component {
    state = {
        cantidad:0,
        nombre: 'hola'
    }

    agregar =  () => 
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    

    restar = () =>
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    

    limpiar = () =>  
        this.setState({
            cantidad: 0
        })
    
    cambiar = () => 
        this.setState({
            nombre: 'hellow'
        })

    original = () =>
        this.setState({
            nombre: 'hola'
        })

    render () {
        const hasItems = this.state.cantidad > 0
        const clases = `styles.card ${hasItems ? styles['card-active'] : styles.card}`
        return (
            <div className={clases}>
                <h3>{ this.props.name }</h3>
                <div>
                    Cantidad: { this.state.cantidad }
                </div>
                <button onClick={ this.agregar }>Agregar</button>
                <button onClick={ this.restar }>Restar</button>
                <button onClick={ this.limpiar }>Limpiar</button>
                <p>$ { this.props.price }</p>
                <p onMouseEnter={ this.cambiar }
                   onMouseLeave={ this.original } 
                >{ this.state.nombre }</p>
                <p>
                    Total: $ { this.props.price * this.state.cantidad }
                </p>
                <hr/>           
            </div>
        )
    } 
}

export default TarjetaFruta