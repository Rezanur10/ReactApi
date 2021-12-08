import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //   <NavBar />
    //   <Routes>

    //     <Route exact path='/' component={Home}/>
    //     <Route exact path='/add_user' component={AddUser} />
    //     <Route exact path='/update_user' component={AddUser}/>
    //   </Routes>
    // </div>
    // </Router>
    <div className="App">
      <Home />
    </div>

  );
}

export default App;
