import './App.css';
import Counter from './Counter';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Aplikacja licznika w ReactJS</h1>
      </header>
      <Counter initvalue={0} />
      <Counter initvalue={100}/>
    </div>
  );
}

export default App;
