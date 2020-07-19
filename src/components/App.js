import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header/Header';
import Footer from './ui/Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route
              exact
              path='/services'
              component={() => <div>Services</div>}
            />
            <Route
              exact
              path='/customsoftware'
              component={() => <div>Custom Software</div>}
            />
            <Route
              exact
              path='/mobileapps'
              component={() => <div>Mobile Apps</div>}
            />
            <Route
              exact
              path='/websites'
              component={() => <div>Websites</div>}
            />
            <Route
              exact
              path='/revolution'
              component={() => <div>The Revolution</div>}
            />
            <Route exact path='/about' component={() => <div>About us</div>} />
            <Route
              exact
              path='/contact'
              component={() => <div>Contact us</div>}
            />
            <Route
              exact
              path='/estimate'
              component={() => <div>Estimate</div>}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
