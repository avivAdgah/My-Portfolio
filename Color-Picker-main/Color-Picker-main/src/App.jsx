import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Color Picker</h1>
        <p className="app__subtitle">
          Pick a color, type a HEX/RGB value or color name, or choose a preset.
        </p>
      </header>

      <main className="app__card">
        <ColorPicker />
      </main>
    </div>
  );
}

export default App;
