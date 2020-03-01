import React from 'react';
import './App.css';
import CardList from "./components/Cards/CardList/index.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CardList />
      </div>
    );
  }
}

export default App;