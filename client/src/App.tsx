import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Showcase } from "./components/showcase/Showcase";
import { RootContext } from "./context/RootContext";
import { RootStore } from "./store/rootStore";

function App() {
    return (
        <RootContext.Provider value={new RootStore()}>
            <BrowserRouter>
                <Showcase />
            </BrowserRouter>
        </RootContext.Provider>
    );
}

export default App;
