import './App.css';
import { Box } from './components/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Pass a card - should display "Card" */}
        <Box card />
        {/* no props - should display "empty card" */}
        <Box />
        <Box />

        {/* <ol>
          <List wordsList={draggableList} />
        </ol> */}
      </header>
    </div>
  );
}

export default App;
