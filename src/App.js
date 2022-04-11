import React from 'react';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';
import './App.css';

function App() {

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuote(data[0]);
      });
  };

  const [quote, setQuote] = React.useState(getQuote);
  
  return (
    <div className="App">
      <DisplayQuote quote={quote}/>
      <button type="button" onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default App;
