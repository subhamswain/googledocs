import "./App.css";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Main />
            <SideBar />
        </div>
    );
}

export default App;
