import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



function App() {
 
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path ='/'>
          <Home></Home>
          </Route>
          <Route exact path='/Home'>
          <Home></Home>
          </Route>
          <Route exact path='/About'>
          <About></About>
          </Route>
          <Route exact path='/Services'>
          <Services></Services>

          </Route>
          <Route exact path='/Blog'>
          <Blog></Blog>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}




export default App;
