import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import User from './components/User';

const App = () => {
  const [sesion, changeSesionState] = useState(true);

  return (
    <>
      {sesion === true ? 
      <div>
        <User /> 
        <button onClick={() => changeSesionState(false)}>Sign out</button>
      </div>
      : 
      <div>
        <p>You haven't logged in</p>
        <button onClick={() => changeSesionState(true)}>Sign in</button>
      </div>
      }
    </>
  )     
}

ReactDOM.render(<App />, document.getElementById('root'));

/**
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello world</h1>
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello world</h1>
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('root'));
*/


// basic rules
const name1 = 'Cami';
const color1 = 'blue';
const JSX1 = (
  <>
    <h1 className="title" style={{color: color1}}>Hello world, my name is {name1}</h1>
    <p>Have a good day !!</p>
  </>
)   
// ReactDOM.render(JSX1, document.getElementById('root'));

// conditionals ternary or basic
const name2 = 'Cami';
const color2 = 'red';
const sesion2 = true;
const country2 = 'Colombia';
const JSX2 = (
  <>
    {sesion2 === true ? 
      <div>
        <h1 className="title">Hello world, my name is {name2}, Have a good day !!</h1>
        {country2 && <p>Tu eres de {country2}</p>}
      </div>
    : 
      <p style={{color: color2}}>You haven't logged in</p>
    }
  </>
)   
// ReactDOM.render(JSX2, document.getElementById('root'));

// arrays
const name3 = 'Cami';
const color3 = 'red';
const sesion3 = true;
const country3 = 'Colombia';
const friends3 = ['Nalla','Scar','Tiva','Lucas'];
const JSX3 = (
  <>
    {sesion3 === true ? 
      <div>
        <h1 className="title">Hello world, my name is {name3}, Have a good day !!</h1>
        {country3 && <p>Yo are from {country3}</p>}
        <ul>
          {friends3.map((friend, index) => <li key={index}>{friend}</li>)}
        </ul>
      </div>
    : 
      <p style={{color: color3}}>You haven't logged in</p>
    }
  </>
)   
// ReactDOM.render(JSX3, document.getElementById('root'));

/**
 * 
 
const JSX = (
  <>
    {sesion === true ? 
      <div>
        <User />
        <User />
        <User />
        <User />
      </div>
    : 
      <p style={{color: color}}>You haven't logged in</p>
    }
  </>
)   
ReactDOM.render(JSX, document.getElementById('root'));
*/