import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// importing components
import Pokemon from './routes/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
