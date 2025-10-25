import "./App.css";
import { RouterComponent } from "./routes/route";
import EnterName from "./components/EnterName";
import { useName } from "./context/createContext";

function App() {
  const { name, setName } = useName();
  return <>{name.length !== 0 ? <RouterComponent /> : <EnterName setSubmitName={setName} />}</>;
}

export default App;

const name = (paras: string) => {};
