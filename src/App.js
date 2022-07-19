import logo from './logo.svg';
import './App.css';

function App() {

  let symbol = 0

  const shoot = () => {
    alert(symbol ? 'O' : 'X')
    symbol = symbol ? 0 : 1
    
  }
   

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="grid-container">
          <div class="grid-item gi1" onClick={() => shoot()}></div>
          <div class="grid-item gi2" onClick={() => shoot()}></div>
          <div class="grid-item gi3" onClick={() => shoot()}></div>  
          <div class="grid-item gi4" onClick={() => shoot()}></div>
          <div class="grid-item gi5" onClick={() => shoot()}></div>
          <div class="grid-item gi6" onClick={() => shoot()}></div>  
          <div class="grid-item gi7" onClick={() => shoot()}></div>
          <div class="grid-item gi8" onClick={() => shoot()}></div>
          <div class="grid-item gi9" onClick={() => shoot()}></div>  
        </div>
      </header>
    </div>
  );
}

export default App;
