import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


const item =[
  {
  'title':'Karthik',
  'age':2,
  'skills':["smily face" , "cute" , "innovative","intelligent"]
},
{
  'title':'Bhav',
  'age':7,
  'skills':["Bright face" , "cutsmarte" , "creative","Hard Working"]
},
{
  'title':'Valli',
  'age':1,
  'skills':["brilliant" , "bubbly" ,"super cute"]
}
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Hello name= {"react"}  data={item}/>, document.getElementById('root'));
