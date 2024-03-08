import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='head'>
        <label htmlFor='term'>
          Guess the number between 1 to 10
        </label><br/>
        <input
          id='term'
          type='text'
          name='term'
        />
      </div>
    </div>
  );
}

export default App;
