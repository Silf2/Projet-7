import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import APropos from './pages/APropos/Apropos.jsx'
import FicheLogement from './pages/Fiche-Logement/Fiche-Logement.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Error from './pages/Error/Error.jsx'

function App(){
    return(
        <React.StrictMode>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Fiche_logement/:id">
              <FicheLogement />
            </Route>
            <Route path="/A-propos">
              <APropos />
            </Route>
            <Route path={["*", "/error"]}>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </React.StrictMode>
    )
}

export default App