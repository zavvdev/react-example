import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export function ProtectedRoute({
  isAllowed,
  redirectPath,
  children,
}) {
  const render = () => {
    let result = <Outlet />;
    if (!isAllowed) {
      result = <Navigate to={redirectPath} replace />;
    } else if (children) {
      result = children;
    }
    return result;
  };

  return render();
}

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired,
  children: PropTypes.node,
};

ProtectedRoute.defaultProps = {
  children: undefined,
};
