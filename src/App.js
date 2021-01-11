import GlobalStyle from "./components/GlobalStyle";
//Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
// Routing
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route component={ContactUs} path="/contact" exact />
        <Route component={OurWork} path="/work" exact />
        <Route component={MovieDetail} path="/work/:id" exact />
        <Route component={AboutUs} path="/" exact />
      </Switch>
    </div>
  );
}

export default App;
