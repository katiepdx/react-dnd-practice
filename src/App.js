import React, { useState } from 'react'
import './App.css';
import { Box } from './components/Box';

function App() {
  // track index of box for DnD
  const [index, setIndex] = useState(1);

  // find the index of the card and set it to state
  const moveCard = ((index) => {
    setIndex(index)
  })


  return (
    <div className="App">
      <header className="App-header">
        {/* Pass a card - should display "Card" */}
        <Box card={index === 1} moveCard={moveCard.bind(null, 1)} />
        {/* no props - should display "empty card" */}
        < Box card={index === 2} moveCard={moveCard.bind(null, 2)} />
        <Box card={index === 3} moveCard={moveCard.bind(null, 3)} />

        {/* <ol>
          <List wordsList={draggableList} />
        </ol> */}
      </header>
    </div>
  );
}

export default App;
