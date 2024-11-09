import useLocalStorage from './components/localStorage';
import './App.css';

function App() {
  const [name, setName] = useLocalStorage('name', 'Visitante');
  return (
    <div>
      <h1>Bem-vindo, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
