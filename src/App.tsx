import "./App.css";
import { useStaggerAnimation } from "./useAnimation";
import { generateSortedRandomNumbers } from "./utils";

function App() {
  const scope = useStaggerAnimation();

  return (
    <div ref={scope} className="wrapper">
      <ul>{generateSortedRandomNumbers()}</ul>
    </div>
  );
}

export default App;
