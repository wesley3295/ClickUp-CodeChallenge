import "./App.css";
import Header from "./Components/header";
import About from "./Components/about";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;
