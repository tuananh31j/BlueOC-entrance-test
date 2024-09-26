import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);
  return <div className="mx-auto my-8 max-w-[80vw] ">{router}</div>;
}

export default App;
