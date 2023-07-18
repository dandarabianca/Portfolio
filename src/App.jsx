import "./App.css";
import Navbar from "./Components/Navbar/index.jsx";
import Menu from "./Components/Menu/index";
import Border from "./Components/Border/index";
import Conhecimentos from "./Components/Conhecimentos/index";
import Assets from "./Assets/img/img-react.svg.svg";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Border />
      <Conhecimentos />
    </div>
  );
}

export default App;
