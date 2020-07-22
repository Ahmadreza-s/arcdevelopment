import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header/Header';
import Footer from './ui/Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import ServicesPage from './ServicesPage/ServicesPage';
import CustomSoftwarePage from './CustomSoftwarePage/CustomSoftwarePage';
import MobileAppsPage from './MobileAppsPage/MobileAppsPage';
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
            <Route exact path='/services'>
              <ServicesPage />
            </Route>
            <Route exact path='/customsoftware'>
              <CustomSoftwarePage />
            </Route>
            <Route exact path='/mobileapps'>
              <MobileAppsPage />
            </Route>
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
