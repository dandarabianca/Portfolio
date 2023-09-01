import "./App.css";
import Navbar from "./Components/Navbar/index.jsx";
import Menu from "./Components/Menu/index";
import Border from "./Components/Border/index";
import Projects from "./Components/Projects/index";
import Contacts from "./Components/Contacts/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Border />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;


