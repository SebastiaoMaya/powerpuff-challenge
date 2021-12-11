import { ChakraProvider } from "@chakra-ui/react";
import { Footer, FooterArea, MainLayout, Navbar, NavbarArea } from "app/shared";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { theme } from "styles";
import NotFoundPage from "./NotFoundPage";
import Homepage from "./Homepage";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route>
            <MainLayout>
              <NavbarArea>
                <Navbar />
              </NavbarArea>
              <Switch>
                <Route exact path="/" component={Homepage} />
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
