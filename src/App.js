import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Footer from "./Components/Footer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className=" h-screen flex flex-col">
        <Header />
        <RouterProvider router={appRouter} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
