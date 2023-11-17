import "./App.css";
import Body from "./components/Body";
import Headers from "./components/Headers";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./components/utils/Store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Headers />
        <Outlet />
      </div>
    </Provider>
  );
}
export let appLayOut = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default App;
