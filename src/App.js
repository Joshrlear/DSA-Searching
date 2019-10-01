import React from 'react';
import './App.css';

/* ------- styles -------- */

const formStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '200px',
  margin: '20vh auto'
}

const textareaStyle = {
  height: '100px',
  padding: '10px'
}

const inputStyle = {
  padding: '10px'
}

const buttonStyles = {
  margin: '10px 0px 0px auto',
  width: 'fit-content'
}

const labelStyles = {
  textAlign: 'left',
  marginTop: '10px',
  marginBottom: '10px'
}

/* ------- functions -------- */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.array = React.createRef()
    this.value = React.createRef()
  }

  render() {
    const binarySearch = require('./binarySearch')
    const linearSearch = require('./LinearSearch')
    return (
      <div className="App">
        <form style={ formStyles } onSubmit={ e => {
          e.preventDefault()
          const binary = binarySearch(this.array.current.value.split(' ').sort(), this.value.current.value)
          const linear = linearSearch(this.array.current.value.split(' ').sort(), this.value.current.value)
          const other = this.array.current.value.split(' ').sort().indexOf(this.value.current.value)
          console.log("linear:", linear)
          console.log("binary:", binary)
          console.log("indexOf:",other)
        }}>
          <label style={ labelStyles } >type array</label>
          <textarea ref={ this.array } style={ textareaStyle } defaultValue="89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5" />
          <label style={ labelStyles } >type value</label>
          <input ref={ this.value } style={ inputStyle } defaultValue="6"/>
          <button type='submit' style={ buttonStyles }>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
