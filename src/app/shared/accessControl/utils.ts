import { Permission } from "./constants";

export const checkPermissions = (
  userPermissions: string[],
  requiredPermission: Permission
) => {
  if (requiredPermission.length === 0) {
    return true;
  }

  const [requiredResource] = requiredPermission.split(":");

  const hasWildcardPermission = userPermissions.some((permission) => {
    const [resource, permType] = permission.split(":");
    const hasAdminWildcard = resource === "admin" && permType === "*";

    return (
      (resource === requiredResource && permType === "*") || hasAdminWildcard
    );
  });

  if (hasWildcardPermission) {
    return true;
  }

  return userPermissions.some((permission) =>
    requiredPermission.includes(permission)
  );
};
