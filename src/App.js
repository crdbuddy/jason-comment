import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      
      otherState: 'some other value'
    }
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[
      { name: newName, age:28 },
      { name: 'Manu', age:29 },
      { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangeHandler =(event) => {
    this.setState({
      persons:[
      { name: "Max", age:28 },
      { name: event.target.value, age:29 },
      { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    const style = {
      margin: 0,
      padding: 0,
      font:'inherit',
      cursor: 'pointer',
      width:20 ,
      height:23 
    }

    const inline = {
      display:inline
    }
    return (
      <div className="App">
        <h1>This is SoundCloud</h1>
        
        <span style = {style}>
        <img style = {style} src="https://image.ibb.co/iNmNtA/Screen-Shot-2018-10-24-at-5-17-30-PM.png" />
        <span id ='1'> Related tracks &emsp;&emsp;&emsp;&emsp;</span>
        <span> View All</span>
        
        <hr></hr>
        <div>Hello</div>
        </span>
        
      
        

      </div>
    );
  }
}

export default App;
