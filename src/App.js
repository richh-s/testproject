import { Provider } from "react-redux";
import './style.css'
import Home from "./components/Home/Home";
import HomePoster from "./components/Home/HomePoster";
import LoginScreen from "./components/Login/LoginScreen";
import store from "./components/redux/store";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
     <Router>
        <div className="App">
         
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
