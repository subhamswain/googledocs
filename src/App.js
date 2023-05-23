import "./App.css";
import Editor from "./Components/Editor/Editor";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Editor />
            <SideBar />
        </div>
    );
}

export default App;
