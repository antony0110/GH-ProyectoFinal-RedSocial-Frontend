import React from 'react';
import { BrowserRouter , Route, Switch  } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Containers/Users/Login/Login';
import Register from './Containers/Users/Register/Register';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Header/>
        <Switch>
         <Route path="/" component={Home} exact/> 
         <Route path="/register" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
