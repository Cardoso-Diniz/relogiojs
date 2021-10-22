import React from 'react';
import './App.css';

function DataFormatada(props) {
  return <h2> Horário atual : {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
      date : new Date()
    }
  }

  componentDidMount()
  {
    this.timeID = setInterval( () => {
      this.thick()
    }, 1000)
  }

  
  componentWillUnmount()
  {
    clearInterval(this.timeID)
  }
  
  thick()
  {
    this.setState({
      date : new Date()
    })
  }

  stopThick()
  {
    clearInterval(this.timeID)
    return console.log(`Relógio ${this.timeID} x pausado`)
  }

  startThick()
  {
    this.timeID = setInterval( () => {
      this.thick()
    }, 1000)

    console.log(`Relógio x retomado`)
    console.log(`Agora sou o relogio ${this.timeID}`)
  }

  render()
  {
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date}/>

        <div className="botoes">
          <button className="botao2" onClick={() => this.stopThick()}>Pausar</button>
          <button className="botao1" onClick={() => this.startThick()}>Retomar</button>
        </div>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        <Clock/>
      </header>
    </div>
  );
}

export default App;
