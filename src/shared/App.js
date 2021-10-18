import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios({
      url: 'http://3.36.92.203/',
      method: 'GET',
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      <h1>안녕하세요!!</h1>
      <button>연결 test</button>
    </div>
  );
}

export default App;
