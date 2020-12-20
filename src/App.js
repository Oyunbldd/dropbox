import './App.css';
import Home from './pages/home';
import {TasksProvider} from './provider/provider.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TasksProvider>
        <Home />
        </TasksProvider>
      </header>
    </div>
  );
}

export default App;
