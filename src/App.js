import GlobalStyle from "./components/GlobalStyle";
//Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

// Routing
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter={true}>
        <Switch location={location} key={location.pathname}>
          <Route component={ContactUs} path="/contact" exact />
          <Route component={OurWork} path="/work" exact />
          <Route component={MovieDetail} path="/work/:id" exact />
          <Route component={AboutUs} path="/" exact />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
