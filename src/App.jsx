import { useCallback, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const [tTT, settTT] = useState(new Array(9).fill(null));
  const [count, setCount] = useState(0);

  const symbol = useRef('X');

  const pickColor = useMemo(() => {
    const nulls = tTT.filter((value) => value === null);

    return nulls.length % 2 == 0 ? 'yellow' : "red";
  }, [tTT]);
   
  const setValue = useCallback((index) => {
    if(tTT[index]) return;
    settTT([
      ...tTT.slice(0, index),
      symbol.current,
      ...tTT.slice(index + 1)
    ]);
    symbol.current = symbol.current === 'X' ? 'O' : 'X';
  }, [tTT, settTT]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => setCount(count + 1)}>{count}</button>

        <div className="grid-container">
            {tTT.map((elem, index) => {
              return (
                <Button 
                  key={`btn-${index}`} 
                  index={index} 
                  onClick={setValue}
                  color={pickColor}
                >
                  {elem}
                </Button>
              )
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
