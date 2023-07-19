import "./App.css";
import Navbar from "./Components/Navbar/index.jsx";
import Menu from "./Components/Menu/index";
import Border from "./Components/Border/index";
import Conhecimentos from "./Components/Conhecimentos/index";
import Assets from "./Assets/img/img-react.svg.svg";
import Projects from "./Components/Projects/index";
import Contacts from "./Components/Contacts/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Border />
      <Conhecimentos />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
