// PrivateRoute.js
import React from 'react';
import { Outlet, useNavigate} from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated }) => {
const navigat = useNavigate()
  return isAuthenticated ? (
    navigat('/login')
  ) : (
   <Outlet />
  );
};

export default PrivateRoute;
