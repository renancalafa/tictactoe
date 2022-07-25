import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [tTT, settTT] = useState(new Array(9).fill(null));

  const symbol = useRef('X');
   
  const setValue = (index) => {
    
    if(tTT[index]) return;
    settTT([
      ...tTT.slice(0, index),
      symbol.current,
      ...tTT.slice(index + 1)
    ])
    symbol.current = symbol.current === 'X' ? 'O' : 'X';
    // tTT[index] = 'X';
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="grid-container">
            {tTT.map((elem, index) => (
              <div key={index} className="grid-item" onClick={(() => setValue(index))}>{elem}</div>
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;
