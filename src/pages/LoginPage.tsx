import { LoginForm } from "app/users";
import { useIsUserLoggedIn } from "app/users/store/utils";
import { observer } from "mobx-react";
import React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";

const LoginPageBase: React.FC<RouteComponentProps> = ({ location }) => {
  const { from } = (location.state as any) || {
    from: { pathname: "/powerpuff-challenge" },
  };

  const authed = useIsUserLoggedIn();

  return authed ? <Redirect to={from} /> : <LoginForm />;
};

export const LoginPage = observer(LoginPageBase);
