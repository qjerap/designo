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
        <Route path="/webdesign" component={WebDesign} />
        <Route path="/appdesign" component={AppDesign}/>
        <Route path="/graphicdesign" component={GraphicDesign} />
        <Route path="/about" component={About} />
        <Route path="/locations" component={Locations} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
