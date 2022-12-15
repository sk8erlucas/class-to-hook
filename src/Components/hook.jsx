

import React, { Component, useState, useEffect } from 'react'

const ClockHook = () => {

    const props = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [state, setstate] = useState(props);

    useEffect(() => {
        let timerID = setInterval(() => {
            timerID = timerID + 1

            // Falta hacer edad
            const newState = {...state, fecha: new Date(), edad: state.edad+1}
            setstate(newState)

        }, 1000)
    }, [state]);

  return (
    <div>
    <h2>
    Hora Actual:
    {state.fecha.toLocaleTimeString()}
    </h2>
    <h3>{state.nombre} {state.apellidos}</h3>
    <h1>Edad: {state.edad}</h1>
    </div>
  )
}

export default ClockHook



class Clock2 extends Component {
   constructor(props) {
      super(props);

      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
      };
   }



   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }

   componentWillUnmount() {
      clearInterval (this.timerID);
   }

   render() {
      return (
         <div>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}