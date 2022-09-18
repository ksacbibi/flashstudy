import './App.css';
import CardInput from './components/cardInput/CardInput';
import Flashcard from './components/flashcard/Flashcard';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div>
      <Topbar/>
      <div className="App">
        <CardInput/>
        <Flashcard/>
      </div>
    </div>
  );
}

export default App;
