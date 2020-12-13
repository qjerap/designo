import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
