import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
         rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
