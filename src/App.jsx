import "./App.css";
import Todos from "./Todos";
import Students from "./students";
import Employees from "./employees";
import Products from "./products";
function App() {
  return (
    <div className="border border-2 border-danger p-2 m-3">
      <h2>React.js-Practice</h2>
      <Todos></Todos>
      <Employees></Employees>
      <Students></Students>
      <Products></Products>
    </div>
  );
}

export default App;