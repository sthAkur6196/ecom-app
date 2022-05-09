import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Orders from './Orders';
import Payment from './Payment';
import { useStateValue } from './StateProvider';


const promise = loadStripe("pk_test_51KtYdQSJwVy1hdNxUPD5HK8KcKbLDVSic6q6jfdPxuSLYiCjuwzBfE8Eo5u0zVclLgPP33InVTjAyM4rZP3ouWB9009AL3lsZ6");


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
        {console.log("load stripe>>>>>>>>",promise)}
        <Routes>
          <Route path="/payment" element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          } />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
