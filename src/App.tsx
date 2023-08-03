import './App.css';
import Counter from './features/counter/Counter';
import Sandwich from './features/sandwich/Sandwich';
import Tasks from './features/tasks/Tasks';
import TaskCreation from './features/tasks/TaskCreation';
import { Movie } from '@mui/icons-material';

function App():JSX.Element {
  return (
    <div>
     <Counter />
     <Sandwich />
     <Tasks />
     <TaskCreation />
     <Movie />
    </div>
  );
}

export default App;
