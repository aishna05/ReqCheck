import './App.css';
import MockManager from './components/MockManager';
import RequestHistory from './components/RequestHistory';
import ViewMocks from './components/ViewMock';
import Requestform from './components/RequestForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <MockManager />
        <Requestform />
        <ViewMocks />
        <RequestHistory />
      </main>
    </div>
  );
}

export default App;
