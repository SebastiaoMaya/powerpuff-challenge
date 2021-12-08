import { ChakraProvider } from "@chakra-ui/react";
import {
  Footer,
  FooterArea,
  MainLayout,
  Navbar,
  NavbarArea,
  SidebarLayout,
  SideMenu,
  SideMenuArea,
} from "app/shared";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "route";
import { theme } from "styles";
import EpisodesListPage from "./EpisodesListPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PPHomepage from "./PPHomePage";
import { LoginPage } from "./LoginPage";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route
            path={["/powerpuff-challenge", "/powerpuff-challenge/episodes"]}>
            <SidebarLayout>
              <SideMenuArea>
                <SideMenu />
              </SideMenuArea>
              <Switch>
                <PrivateRoute
                  exact
                  path="/powerpuff-challenge"
                  Component={PPHomepage}
                />
                <PrivateRoute
                  path="/powerpuff-challenge/episodes-list"
                  Component={EpisodesListPage}
                />
                <Route path="/404" component={NotFoundPage} />
                <Redirect from="*" to="/404" />
              </Switch>
            </SidebarLayout>
          </Route>
          <Route path={["/", "/404"]}>
            <MainLayout>
              <NavbarArea>
                <Navbar />
              </NavbarArea>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/404" component={NotFoundPage} />
                <Redirect from="*" to="/404" />
              </Switch>
              <FooterArea>
                <Footer />
              </FooterArea>
            </MainLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
