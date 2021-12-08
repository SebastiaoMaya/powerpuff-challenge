//import { useAuthContext } from "authentication";
import React, { ReactNode } from "react";
import { Permission } from "./constants";
import { checkPermissions } from "./utils";

interface Props {
  requiredPermission?: Permission;
  renderNoAccessComponent?: () => ReactNode;
  children: ReactNode;
}

export const AccessControl: React.FC<Props> = ({
  requiredPermission,
  children,
  renderNoAccessComponent,
}) => {
  //const { permissions } = useAuthContext();

  const permissions = ["admin:*"];

  const hasAccess = requiredPermission
    ? checkPermissions(permissions ?? [], requiredPermission)
    : true;

  if (hasAccess) {
    return <>{children}</>;
  }
  return renderNoAccessComponent ? <>{renderNoAccessComponent()}</> : <></>;
};
