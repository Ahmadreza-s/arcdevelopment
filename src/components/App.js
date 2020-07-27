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
import WebsitesPage from './WebsitesPage/WebsitesPage';
import RevolutionPage from './RevolutionPage/RevolutionPage';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import ContactPage from './ContactPage/ContactPage';
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
            <Route exact path='/websites'>
              <WebsitesPage />
            </Route>
            <Route exact path='/revolution'>
              <RevolutionPage />
            </Route>
            <Route exact path='/about'>
              <AboutUsPage />
            </Route>
            <Route exact path='/contact'>
              <ContactPage />
            </Route>
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
