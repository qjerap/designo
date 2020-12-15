import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

//PAGES
import Home from "./pages/Home";
import GraphicDesign from "./pages/GraphicDesign";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import About from "./pages/About";

//UTILITY
import ScrollToTop from "./tool/ScrollToTop";

/* ##=> TODO <=##
- use React.Suspens & Placeholder for Cards
- transition animations between pages
- lazyloading
*/

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/webdesign">
          <WebDesign />
        </Route>
        <Route path="/appdesign">
          <AppDesign />
        </Route>
        <Route path="/graphicdesign">
          <GraphicDesign />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
