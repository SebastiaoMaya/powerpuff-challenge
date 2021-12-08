import { useIsUserLoggedIn } from "app/users/store/utils";
import { observer } from "mobx-react";
import React, { ElementType } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props {
  Component: ElementType;
  path: RouteProps["path"];
  exact?: RouteProps["exact"];
}

const PrivateRouteBase: React.FC<Props> = ({
  Component,
  path,
  exact,
  ...rest
}) => {
  const authed = useIsUserLoggedIn();

  return (
    <Route
      exact={exact}
      {...(rest as any)}
      render={(props) =>
        authed ? (
          <Component {...(props as any)} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export const PrivateRoute = observer(PrivateRouteBase);
