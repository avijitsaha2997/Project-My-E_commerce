import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Headset from "./Headset";
import Home from "./Home";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
function App() {
  // eslint-disable-next-line no-empty-pattern, no-unused-vars
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is>>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (

    <div className="app">

      <Routes>

        <Route path="/" element={
          <div>

              <Header />

              <div className="home__display">
                <div className="home__display__sidebar"><Sidebar/></div>
                <div className="home__display__component"><Home /></div>
              </div>

          </div>
        }>
        </Route>
        <Route path="/headset" element={
          <div>

              <Header />

              <div className="home__display">
                <div className="home__display__sidebar"><Sidebar/></div>
                <div className="home__display__component"><Headset /></div>
              </div>

          </div>
        }>
        </Route>
        <Route path="/mboile" element={
          <div>

              <Header />

              <div className="home__display">
                <div className="home__display__sidebar"><Sidebar/></div>
                <div className="home__display__component"><Home /></div>
              </div>

          </div>
        }>
        </Route>
        <Route path="/computer" element={
          <div>

              <Header />

              <div className="home__display">
                <div className="home__display__sidebar"><Sidebar/></div>
                <div className="home__display__component"><Home /></div>
              </div>

          </div>
        }>
        </Route>

        <Route path="/login" element={
          <div>
            <Login/>
          </div>
        }>
        </Route>

        <Route path="/checkout" element={
          <div>
            <Header />
            <Checkout />
          </div>
        }>
        </Route>

      </Routes>
    </div>

  );
}

export default App;
