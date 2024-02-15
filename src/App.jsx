import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/buttons";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
