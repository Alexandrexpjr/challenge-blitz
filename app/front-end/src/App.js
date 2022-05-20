import ToDo from './pages/ToDo';
import './App.css';
import TaskProvider from './context/TaskProvider';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <ToDo />
      </div>
    </TaskProvider>
  );
}

export default App;
