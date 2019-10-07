import React from 'react';
import './App.css';
import List from './list';

function App(props) {
  const listArray = props.store.lists.map(item => {

  let cardIdArray = item.cardIds;
  let newCardArray = [];

  for(let i = 0; i< cardIdArray.length; i++) {
    let current = cardIdArray[i];
    let cardObj = props.store.allCards[current];
    newCardArray.push(cardObj);
  }

  return <List header = {item.header} cards = {newCardArray} key = {item.id} />;

  });

  


  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listArray}
      </div>
    </main>
  );
}

export default App;
