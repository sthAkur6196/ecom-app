import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
